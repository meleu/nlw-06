import { Request, Response } from "express";
import { ListComplimentsBySenderService } from "../services/ListComplimentsBySenderService";

class ListComplimentsBySenderController {
  async handle(request: Request, response: Response) {
    const { user_id } = request
    const listComplimentsBySenderService = new ListComplimentsBySenderService();
    const compliments = await listComplimentsBySenderService.execute(user_id);

    return response.json(compliments);
  }
}

export { ListComplimentsBySenderController }