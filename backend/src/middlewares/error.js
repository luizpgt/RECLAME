
export function errorHandler(error, req, res, next) {
    const message = error.message || "Ocorreu algum erro.";
    const status = error.status || 500;

    res.status(status).json({ message, success: false });
}
