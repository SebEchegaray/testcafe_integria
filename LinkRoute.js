import { Selector } from 'testcafe';

fixture`LinkRouting`
    .page`https://www.integria.com/en-au/about-us`;

test('About Us page', async t => {
    await t
        // .debug()
        .takeScreenshot();
});