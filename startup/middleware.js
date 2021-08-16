import express from 'express';

export default (app) => {
    app.use(express.json({limit: "30mb"}));
    app.use(express.urlencoded({limit: "30mb", extended: true}));
}