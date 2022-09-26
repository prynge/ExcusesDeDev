import http from "@/http-common";
import type { Excuse } from "@/types/excuse";

class ExcuseService {
  getAll(): Promise<Excuse[]> {
    return http.get("/excuses");
  }

  get(http_code: number): Promise<Excuse> {
    return http.get(`/excuses/${http_code}`);
  }

  getRandom(http_code?: number): Promise<Excuse> {
    if (http_code !== undefined) {
      return http.get(`/excuses/random/${http_code}`);
    } else {
      return http.get(`/excuses/random`);
    }
  }

  create(data: Excuse): Promise<Excuse> {
    console.log(data);
    
    return http.post("/excuses", data);
  }

  update(http_code: any, data: any): Promise<Excuse> {
    return http.put(`/excuses/${http_code}`, data);
  }

  delete(http_code: any): Promise<Excuse> {
    return http.delete(`/excuses/${http_code}`);
  }
}

export default new ExcuseService();
