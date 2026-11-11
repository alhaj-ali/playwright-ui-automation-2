const {test, expect} = require ('@playwright/test');

test("Sample test", async ({page})=>{
console.log("This is a sample test to check triggering other repo tests on a PR merge")
})