class Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
}

class Shop {
  constructor(items = []) {
    this.items = items
    this.QUANTITY_MAX = 50
    this.QUANTITY_MIN = 0
    this.MIN_ = 0
  }
  updateQuality() {
    this.items.map((item) => {
      if (
        item.name !== 'Aged Brie' &&
        item.name !== 'Backstage passes to a TAFKAL80ETC concert'
      ) {
        if (item.quality > this.QUANTITY_MIN) {
          if (item.name !== 'Sulfuras, Hand of Ragnaros') {
            item.quality--
          }
        }
      } else {
        if (item.quality < this.QUANTITY_MAX) {
          item.quality++
          if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.sellIn < 11) {
              if (item.quality < this.QUANTITY_MAX) {
                item.quality++
              }
            }
            if (item.sellIn < 6) {
              if (item.quality < this.QUANTITY_MAX) {
                item.quality++
              }
            }
          }
        }
      }
      if (item.name !== 'Sulfuras, Hand of Ragnaros') {
        item.sellIn--
      }
      if (item.sellIn < 0) {
        if (item.name !== 'Aged Brie') {
          if (item.name !== 'Backstage passes to a TAFKAL80ETC concert') {
            if (item.quality > this.QUANTITY_MIN) {
              if (item.name !== 'Sulfuras, Hand of Ragnaros') {
                item.quality--
              }
            }
          } else {
            item.quality -= item.quality
          }
        } else {
          if (item.quality < this.QUANTITY_MAX) {
            item.quality++
          }
        }
      }
    })

    return this.items
  }
}

module.exports = {
  Item,
  Shop,
}
