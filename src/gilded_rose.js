const QUANTITY_MAX = 50
const QUANTITY_MIN = 0

class Item {
  constructor(name, sellIn, quality) {
    this.name = name
    this.sellIn = sellIn
    this.quality = quality
  }
  updateQuality() {
    if (
      this.name !== 'Aged Brie' &&
      this.name !== 'Backstage passes to a TAFKAL80ETC concert'
    ) {
      if (this.quality > QUANTITY_MIN) {
        if (this.name !== 'Sulfuras, Hand of Ragnaros') {
          this.quality--
        }
      }
    } else {
      if (this.quality < QUANTITY_MAX) {
        this.quality++
        if (this.name === 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.sellIn < 11) {
            if (this.quality < QUANTITY_MAX) {
              this.quality++
            }
          }
          if (this.sellIn < 6) {
            if (this.quality < QUANTITY_MAX) {
              this.quality++
            }
          }
        }
      }
    }
    if (this.name !== 'Sulfuras, Hand of Ragnaros') {
      this.sellIn--
    }
    if (this.sellIn < 0) {
      if (this.name !== 'Aged Brie') {
        if (this.name !== 'Backstage passes to a TAFKAL80ETC concert') {
          if (this.quality > QUANTITY_MIN) {
            if (this.name !== 'Sulfuras, Hand of Ragnaros') {
              this.quality--
            }
          }
        } else {
          this.quality -= this.quality
        }
      } else {
        if (this.quality < QUANTITY_MAX) {
          this.quality++
        }
      }
    }
  }
}

class Shop {
  constructor(items = []) {
    this.items = items
  }
  updateQuality() {
    this.items.map((item) => {
      item.updateQuality()
    })

    return this.items
  }
}

module.exports = {
  Item,
  Shop,
}
