internetPage = require('../../pages/internet.page')

describe(' Test element actions', function () {
    it('should click element', () => {
        browser.url('/')
        internetPage.clickOnLink(1)
        expect(browser.getUrl()).equals('http://the-internet.herokuapp.com/abtest')
    })
    it('should get Text', () => {
        browser.url('/')
        expect(internetPage.getSpecificElementText(1)).equals('A/B Testing')
    })
    it('should click checkbox', () => {
        internetPage.clickOnLink(6)
        internetPage.tapCheckBox(1)
        expect(internetPage.checkbox(1).isSelected()).equals(true)
    })
    it('should uncheck checkox', () => {
        internetPage.tapCheckBox(1)
        expect(internetPage.checkbox(1).isSelected()).equals(false)
    
    })

})