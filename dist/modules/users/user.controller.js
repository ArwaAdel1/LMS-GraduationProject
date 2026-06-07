import { UserService } from "./user.service.js";
import { okResponse } from "../../shared/utils/apiResponse.js";
const userService = new UserService();
export class UserController {
    list = async (_req, res, next) => {
        try {
            const users = await userService.listUsers();
            res.status(200).json(okResponse("Users fetched successfully", users));
        }
        catch (error) {
            next(error);
        }
    };
    create = async (req, res, next) => {
        try {
            const user = await userService.createUser(req.body);
            res.status(201).json(okResponse("User created successfully", user));
        }
        catch (error) {
            next(error);
        }
    };
}
//# sourceMappingURL=user.controller.js.map