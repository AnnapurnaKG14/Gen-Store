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
        await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RelativeLayout/android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.widget.RelativeLayout[2]/android.widget.LinearLayout/android.widget.LinearLayout[2]/android.widget.TextView[2]').click()

        await $('//*[@resource-id="com.androidsample.generalstore:id/appbar_btn_cart"]').click()

        await $("//*[@class='android.widget.CheckBox' and @index='1']").click()
        await $("//*[@class='android.widget.Button' and @index='2']").click()
        await driver.pause(6000)
    });
});

