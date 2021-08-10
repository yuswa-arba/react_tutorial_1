/*
 |--------------------------------------------------------------------------
 |  SERVER BACKEND ROUTE
 |--------------------------------------------------------------------------
 */

const SERVER = '/srv'

/* CUSTOMER */
export const srvCustomer = `${SERVER}/customers`;
export const srvCustomerCreate = `${SERVER}/customers`;
export const srvCustomerUpdate = (customerId) => {
    return `${srvCustomer}/${customerId}/update`
}

/* COMPONENT */
export const srvComponent = `${SERVER}/components`;

// RELIGIONS
export const srvComponentReligion = `${srvComponent}/religions`

/* DASHBOARD */
export const srvDashboard = `${SERVER}/dashboards`;
export const srvDashboardCustomerActiveMonthly = `${srvDashboard}/customerActive`
export const srvDashboardCustomerGender = `${srvDashboard}/customerGender`
export const srvDashboardHeaderAll = `${srvDashboard}/headerAll`
export const srvDashboardCustomerReligion = `${srvDashboard}/customerReligion`
export const srvDashboardCustomerActivity = `${srvDashboard}/customerActivity`


/*
 |--------------------------------------------------------------------------
 |  WEB FRONTEND ROUTE
 |--------------------------------------------------------------------------
 */

/* AUTH */
export const rootAuthLogin = '/login';
export const rootAuthRegister = '/register';

/* CUSTOMER */
export const rootCustomerMain = '/customers';
export const rootCustomerAdd = `${rootCustomerMain}/add`;
export const rootCustomerDetail = (customerId) => {
    return `${rootCustomerMain}/${customerId}/detail`
}
