import { getItem, groupingItems, printReceipt } from '../src/PrintReceipt'
// * task 1: should get barcode with quantity map when grouping items given input list
// * task 2: should return item entity when item exists given item barcode
// * ~~task 2-1: should throw exception when item ?~~
// * task 3: should get ShoppingCartItem total price equals unit price * 2 when toShoppingCartItem given item entity and quantity is 2
// * task 4: should get ShoppingCartItem total price equals unit price * 1 when toShoppingCartItem given item entity and quantity is null
// * task 5: should get ShoppingCartItem subtotal unit price * 2 when calculatePromotions given item with BUY_TWO_GET_ONE_FREE type quantity is 3
// * task 6: should get ShoppingCartItem subtotal unit price * 2 when calculatePromotions given item with BUY_TWO_GET_ONE_FREE type quantity is 2
// * task 7: should get shopping cart items string when printItemList given shopping cart list
// * task 8: should get shopping cart items total contents when printTotalContent given shopping cart items
// * task 9: should print list contents successful when printReceipt given input list


describe('printReceipt', () => {
  it('should print receipt with promotion when print receipt', () => {
    const tags = [
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000003-2.5',
      'ITEM000005',
      'ITEM000005-2',
    ]

    const expectText = `***<store earning no money>Receipt ***
Name：Sprite，Quantity：5 bottles，Unit：3.00(yuan)，Subtotal：12.00(yuan)
Name：Litchi，Quantity：2.5 pounds，Unit：15.00(yuan)，Subtotal：37.50(yuan)
Name：Instant Noodles，Quantity：3 bags，Unit：4.50(yuan)，Subtotal：9.00(yuan)
----------------------
Total：58.50(yuan)
Discounted prices：7.50(yuan)
**********************`

    expect(printReceipt(tags)).toEqual(expectText)
  })

  it('should get barcode with quantity map when grouping items given input list', () => {
    const tags = [
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000001',
      'ITEM000003-2.5',
      'ITEM000005',
      'ITEM000005-2',
    ]

    expect(groupingItems(tags)).toEqual(new Map([
      ['ITEM000001', 5],
      ['ITEM000003', 2.5],
      ['ITEM000005', 3],
    ]))
  })

  it('should return item entity when item exists given item barcode', () => {
    const barcode = 'ITEM000001'

    expect(getItem(barcode)).toEqual( {
      barcode: 'ITEM000001',
      name: 'Sprite',
      unit: 'bottle',
      price: 3.00
    })
  })
})
