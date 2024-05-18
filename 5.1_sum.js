require('./5.0_sum')
/*we are not calling the function here, stil the consol print is displayed
this is due to the fact that the function has been called within the module itself
and while importing the module, node js implicitly invokes the call function in the other module too
this only occurs if there is a function calling in the imported module */