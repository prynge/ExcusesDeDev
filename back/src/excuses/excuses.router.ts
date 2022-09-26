/**
 * Required External Modules and Interfaces
 */

import express, { Request, Response } from "express";
import * as ExcuseService from "./excuses.service";
import {Excuse } from "./excuses";

/**
 * Router Definition
 */

export const excusesRouter = express.Router();

/**
 * Controller Definitions
 */

// GET excuses

excusesRouter.get("/", async (req: Request, res: Response) => {
  try {
    const excuses: Excuse[] = await ExcuseService.findAll();

    res.status(200).send(excuses);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET excuses/random/:id

excusesRouter.get("/random/:http_code?", async (req: Request, res: Response) => {
  
  const http_code: number = parseInt(req.params.http_code, 10);

  try {
    const excuse: Excuse = await ExcuseService.findRandom(http_code);
    
    if (excuse) {
      return res.status(200).send(excuse);
    }

    res.status(404).send("excuse not found");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// GET excuses/:id

excusesRouter.get("/:http_code", async (req: Request, res: Response) => {
  const http_code: number = parseInt(req.params.http_code, 10);

  try {
    const excuse: Excuse = await ExcuseService.find(http_code);

    if (excuse) {
      return res.status(200).send(excuse);
    }

    res.status(404).send("excuse not found");
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// POST excuses

excusesRouter.post("/", async (req: Request, res: Response) => {
  try {
    const excuse: Excuse = req.body;

    const newExcuse = await ExcuseService.create(excuse);

    res.status(201).json(newExcuse);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

// // PUT excuses/:http_code

// excusesRouter.put("/:http_code", async (req: Request, res: Response) => {
//   const http_code: number = parseInt(req.params.http_code, 10);

//   try {
//     const excuseUpdate: Excuse = req.body;

//     const existingExcuse: Excuse = await ExcuseService.find(http_code);

//     if (existingExcuse) {
//       const updatedExcuse = await ExcuseService.update(http_code, excuseUpdate);
//       return res.status(200).json(updatedExcuse);
//     }

//     const newExcuse = await ExcuseService.create(excuseUpdate);

//     res.status(201).json(newExcuse);
//   } catch (e) {
//     res.status(500).send(e.message);
//   }
// });

// // DELETE excuses/:http_code

// excusesRouter.delete("/:http_code", async (req: Request, res: Response) => {
//   try {
//     const http_code: number = parseInt(req.params.http_code, 10);
//     await ExcuseService.remove(http_code);

//     res.sendStatus(204);
//   } catch (e) {
//     res.status(500).send(e.message);
//   }
// });