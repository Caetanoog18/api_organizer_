exports.getPermissions = async () => {

    return {
        viewer: ["viewOwnAPIs", "viewAPIsFromCompany", "viewAllCompanyEmployees", "viewPublicAPIs", "viewOwnUser"],
        manager: ["viewAllAPIs", "viewAllCompanies", "viewAllUsers"]
    };
}