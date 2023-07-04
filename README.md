# Cars app

Cars app is a simple desctop application that consists information about 1000 cars in table form.

## Getting started
For launching application you just need moving to the https://cars-bice.vercel.app/

## Usage 
You can use the following application for:
- serching the car using filter. When you start entering search information in input field which named "Search", number of items begin reducing. 
- turning the page using pagination in page bottom. Each page contains 20 items.
- adding new car using add car form. You can launch this form by pressing button "Add car".
- deleting car. For deleting car you just need to press by "Delete" button in corresponding row and form will be launched.
- editing car information. For editing car information you need to press by "Edit" button in corresponding row and form will be launched. You can modify only color, price and availability properties.
After successfull actions changes will applies.
Alter reloading page or breaking session changes which you provide will be stored and you will not lose your results.

## Technologies
For developing cars appliaction i used react.js and corresponding bibliotekas:
- for table design, filter and pagination - react table;
- for state management - redux toolkit;
- for sending requst getting car information -axios
- for output notice messages -react-toastify