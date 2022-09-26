/**
 * Data Model Interfaces
 */

import { Excuse, Excuses } from "./excuses";
var fs = require('fs')


/**
 * In-Memory Store
 */
const excuses : Excuse[] = require('../ressources/excuses.json')

/**
 * Service Methods
 */
export const findAll = async (): Promise<Excuse[]> => Object.values(excuses);

export const find = async (http_code: number): Promise<Excuse> => {
    let excuse : Excuse = {} as Excuse;
    excuses.forEach(element => {
        if (element.http_code==http_code) {
            excuse = element;
            return excuse
        }
    });
    return excuse
};

export const findRandom = async (http_code?: number): Promise<Excuse> => {
    
    let excuse : Excuse = {} as Excuse;
    let min = 0;
    let max = excuses.length-1;
    let code = http_code
    
    do {
        do {
            code = excuses[Math.floor(Math.random() * (max - min) + min)].http_code;
        } while (code==http_code);
        
        excuses.forEach(element => {
            if (element.http_code==code) {
                excuse = element;
            }
        });
        
    } while (!excuse.http_code);
    return excuse
};

export const create = async (newExcuse: Excuse): Promise<Excuse> => {

    fs.readFile('./src/ressources/excuses.json', 'utf8', function readFileCallback(err: any, data: string){
        if (err){
            console.log("File read failed:", err);
            return
        } 
        try {
            const excuseData : Excuses = JSON.parse(data)
            excuseData.push(newExcuse)
            fs.writeFile("./src/ressources/excuses.json", JSON.stringify(excuseData), (err: any) => {
                if (err) console.log("Error writing file:", err);
            });
        } catch (err) {
            console.log("File read failed:", err);
        }
    });

  return newExcuse;
};