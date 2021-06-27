import { Request, Response } from "express";
import { ListComplimentsByReceiverService } from "../services/ListComplimentsByReceiverService";

class ListComplimentsByReceiverController {
  async handle(request: Request, response: Response) {
    const { user_id } = request
    const listComplimentsByReceiverService = new ListComplimentsByReceiverService();
    const compliments = await listComplimentsByReceiverService.execute(user_id);

    return response.json(compliments);
  }
}

export { ListComplimentsByReceiverController }