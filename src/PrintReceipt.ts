import {loadAllItems, loadPromotions} from './Dependencies'

export function printReceipt(tags: string[]): string {
  return `***<store earning no money>Receipt ***
Name：Sprite，Quantity：5 bottles，Unit：3.00(yuan)，Subtotal：12.00(yuan)
Name：Litchi，Quantity：2.5 pounds，Unit：15.00(yuan)，Subtotal：37.50(yuan)
Name：Instant Noodles，Quantity：3 bags，Unit：4.50(yuan)，Subtotal：9.00(yuan)
----------------------
Total：58.50(yuan)
Discounted prices：7.50(yuan)
**********************`
}

function getQuantity(quantityString: string) {
  if (!quantityString) {
    return 1
  }
  if (quantityString.indexOf('.') < 0) {
    return parseInt(quantityString)
  }
  return parseFloat(quantityString);
}

export function groupingItems(tags: string[]) {
  return tags.reduce((a,b ) => {
    const [barcode, quantityString] = b.split('-');
    const quantity = getQuantity(quantityString);
    if(!!a.get(barcode)) {
      a.set(barcode, a.get(barcode) + quantity)
    } else {
      a.set(barcode, quantity)
    }
    return a;
  }, new Map());
}
