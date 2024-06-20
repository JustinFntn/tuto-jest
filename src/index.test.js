const request = require("supertest");
const { app } = require("./index");
const { db } = require("./db");

jest.mock("./db", () => {
    return {
        db: {
            all: jest.fn(),
        },
    };
});

const allMovies = [
    {
        id: 1,
        title: "The Dark Knight",
        director: "Christopher Nolan",
        year: 2008,
        rating: 5,
    },
];

db.all.mockImplementation((querySql, params, callback) => {
    callback(null, allMovies);
});

describe("GET /movies", () => {
    it("should return 500 if error", async () => {
        db.all.mockImplementation((querySql, params, callback) => {
            callback(new Error("Error"), null);
        });
        const response = await request(app).get("/movies");
        expect(response.status).toBe(500);
    });

    it("should return 204 if no movies found", async () => {
        db.all.mockImplementation((querySql, params, callback) => {
            callback(null, []);
        });
        const response = await request(app).get("/movies");
        expect(response.status).toBe(204);
    });

    it("should return a movie list", async () => {
        db.all.mockImplementation((querySql, params, callback) => {
            callback(null, allMovies);
        });
        const res = await request(app).get("/movies");
        expect(res.status).toBe(200);
    });
});
