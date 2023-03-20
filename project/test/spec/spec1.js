//DUMMY
describe('Grocery shopping', () => {
    it('Sterting with the initial login page', async() => {
        await $('//*[@text="Enter name here"]').setValue("Annapurna K G")
        await $("//*[@text='Female']").click()
        await $("//*[@resource-id='com.androidsample.generalstore:id/spinnerCountry']").click()
        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollIntoView(text("Bangladesh"))')
        await $("//*[@text='Bangladesh']").click()
        await $("//*[@class='android.widget.Button' and @index='6']").click()
    });

    it('Adding the products to cart now',async () => {
        /*here since all products are having the same resource id as well as other values,
        the distinguishing factor is element id ,
        hence we will be using the same*/

        //clicks on shoe
        await $("//*[@class='android.widget.TextView'][2]").click()

        //after clicking add to cart changes to added to cart
        const assertcheck = await $("//*[@class='android.widget.TextView'][2]")
        //here we use an assert to just check whether we have added to cart properly or not
        await $(assertcheck).toHaveText("ADDED TO CART")

    });
});

