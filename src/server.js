require("express-async-errors");

const path = require("path");

const swaggerDocument = require("./docs/swagger.json");
const swaggerUI = require("swagger-ui-express");
const uploadConfig = require("./configs/upload");
const AppError = require("./utils/AppError");
const express = require("express");
const cors = require("cors");

const app = express();

app.use("/avatar", express.static(uploadConfig.UPLOADS_FOLDER));

const demoExercisePath = path.resolve(__dirname, "..", "exercises", "gif");
app.use("/exercise/demo", express.static(demoExercisePath));

const thumbExercisesPath = path.resolve(__dirname, "..", "exercises", "thumb");
app.use("/exercise/thumb", express.static(thumbExercisesPath));

const routes = require("./routes");

app.use(express.json());
app.use(cors());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(routes);

// Rota simples para a raiz
app.get("/", (req, res) => {
    res.send("Bem-vindo ao servidor!");
});

app.use((err, request, response, next) => {
    if (err instanceof AppError) {
        return response.status(err.statusCode).json({
            status: "error",
            message: err.message,
        });
    }

    console.error(err);

    return response.status(500).json({
        status: "error",
        message: "Internal server error",
    });
});

// Alterando a porta padrão para 8080
const PORT = process.env.PORT || 8080; 
app.listen(PORT, '0.0.0.0', () => console.log(`Server is running on Port ${PORT}`));
