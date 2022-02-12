import ApiService from "../shared/apiService";

class UserService {
    static async getUsers(amount: string) {
        return ApiService.get(`/users/random_user?size=${amount}`);
    }

    static async getUser() {
        return ApiService.get(`/users/random_user`);
    }
}

export default UserService;