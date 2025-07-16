export interface MenuItem {
  name: { ro: string; en: string };
  description?: { ro: string; en: string };
  volume?: string;
  price: string;
  alcohol?: string;
  image?: string;
  tags?: string[];
}

export interface MenuSection {
  title: { ro: string; en: string };
  items: MenuItem[];
  note?: { ro: string; en: string };
}

export const menuData: MenuSection[] = [
  {
    title: { ro: 'BERE', en: 'BEER' },
    items: [
      { 
        name: { ro: 'Bergenbier', en: 'Bergenbier' }, 
        volume: '500 ml', 
        alcohol: '4.7%', 
        price: '6,90 lei',
        image: '/images/bere/bergenbier.jpg',
        tags: ['recommended'] 
      },
      { 
        name: { ro: 'Staropramen', en: 'Staropramen' }, 
        volume: '500 ml', 
        alcohol: '5.0%', 
        price: '7,90 lei',
        image: '/images/bere/staropramen.jpg',
        tags: ['recommended'] 
      },
      { 
        name: { ro: 'Staropramen Draft', en: 'Staropramen Draft' }, 
        volume: '400 ml', 
        alcohol: '5.0%', 
        price: '7,90 lei',
        image: '/images/bere/staropramen-draft.jpg'
      },
      { 
        name: { ro: 'Madri', en: 'Madri' }, 
        volume: '500 ml', 
        alcohol: '4.6%', 
        price: '8,90 lei',
        image: '/images/bere/madri.jpg',
        tags: ['new'] 
      },
      { 
        name: { ro: 'Beck\'s', en: 'Beck\'s' }, 
        volume: '500 ml', 
        alcohol: '5.0%', 
        price: '9,90 lei',
        image: '/images/bere/becks.jpg'
      },
      { 
        name: { ro: 'Beck\'s Draft', en: 'Beck\'s Draft' }, 
        volume: '400 ml', 
        alcohol: '4.7%', 
        price: '9,90 lei',
        image: '/images/bere/becks-draft.jpg'
      },
      { 
        name: { ro: 'Strongbow', en: 'Strongbow' }, 
        volume: '330 ml', 
        alcohol: '4.5%', 
        price: '9,90 lei',
        image: '/images/bere/strongbow-red.jpg'
      },
      { 
        name: { ro: 'Fresh Fructe fără alcool', en: 'Fresh Fruit Non-alcoholic' }, 
        volume: '330 ml', 
        price: '9,90 lei',
        image: '/images/bere/fresh-fructe.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Fresh Lămâie fără alcool', en: 'Fresh Lemon Non-alcoholic' }, 
        volume: '330 ml', 
        price: '9,90 lei',
        image: '/images/bere/fresh-lamaie.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Stella Artois fără alcool', en: 'Stella Artois Non-alcoholic' }, 
        volume: '330 ml', 
        price: '11,90 lei',
        image: '/images/bere/stella-fara-alcol.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Stella Artois', en: 'Stella Artois' }, 
        volume: '500/330 ml', 
        alcohol: '5.0%', 
        price: '11,90 lei',
        image: '/images/bere/stella.jpg'
      },
      { 
        name: { ro: 'Corona', en: 'Corona' }, 
        volume: '335 ml', 
        alcohol: '4.5%', 
        price: '16,90 lei',
        image: '/images/bere/corona.jpg',
        tags: ['recommended'] 
      },
      { 
        name: { ro: 'Hugo', en: 'Hugo' }, 
        volume: '275 ml', 
        alcohol: '8%', 
        price: '14,90 lei',
        image: '/images/bere/hugo-mic.jpg'
      }
    ]
  },
  {
    title: { ro: 'COCKTAILURI', en: 'COCKTAILS' },
    note: { ro: 'Fiecare cocktail – 24,00 lei', en: 'Each cocktail – 24,00 lei' },
    items: [
      { 
        name: { ro: 'Safe Cocktail Sara', en: 'Safe Cocktail Sara' }, 
        description: { ro: '250 ml aloe vera, gheață, 20 ml curacao blue, o felie portocală', en: '250 ml aloe vera, ice, 20 ml blue curacao, orange slice' },
        price: '24,00 lei',
        image: '/images/cocktailuri/safe-sara.jpg',
        tags: ['non-alcoholic', 'recommended']
      },
      { 
        name: { ro: 'Cocktail Sara', en: 'Cocktail Sara' }, 
        description: { ro: '50 ml vodka, 250 ml aloe vera, gheață, 20 ml curacao blue, felie portocală', en: '50 ml vodka, 250 ml aloe vera, ice, 20 ml blue curacao, orange slice' },
        price: '24,00 lei',
        image: '/images/cocktailuri/sara.jpg',
        tags: ['recommended']
      },
      { 
        name: { ro: 'Martini Red Kiss', en: 'Martini Red Kiss' }, 
        description: { ro: '10 ml sirop lămâie, 10 ml sirop căpșuni, 30 ml martini, 30 ml vodka', en: '10 ml lemon syrup, 10 ml strawberry syrup, 30 ml martini, 30 ml vodka' },
        price: '24,00 lei',
        image: '/images/cocktailuri/red-kiss.jpg'
      },
      { 
        name: { ro: 'Sex on the Beach', en: 'Sex on the Beach' }, 
        description: { ro: '50 ml vodka, 100 ml nectar portocale, 100 ml nectar ananas, grenadine', en: '50 ml vodka, 100 ml orange nectar, 100 ml pineapple nectar, grenadine' },
        price: '24,00 lei',
        image: '/images/cocktailuri/sex-on-the-beach.jpg',
        tags: ['recommended']
      },
      { 
        name: { ro: 'Gin Tonic', en: 'Gin Tonic' }, 
        description: { ro: '50 ml gin, 200 ml apă tonică', en: '50 ml gin, 200 ml tonic water' },
        price: '24,00 lei',
        image: '/images/cocktailuri/gin-tonic.jpg'
      },
      { 
        name: { ro: 'Cuba Libre', en: 'Cuba Libre' }, 
        description: { ro: '50 ml rom, 200 ml cola', en: '50 ml rum, 200 ml cola' },
        price: '24,00 lei',
        image: '/images/cocktailuri/cuba-libre.jpg'
      },
      { 
        name: { ro: 'Mojito', en: 'Mojito' }, 
        description: { ro: '50 ml bacardi, lime, mentă, zahăr brun, sprite', en: '50 ml bacardi, lime, mint, brown sugar, sprite' },
        price: '24,00 lei',
        image: '/images/cocktailuri/mojito.jpg',
        tags: ['recommended']
      },
      { 
        name: { ro: 'Tequila Sunrise', en: 'Tequila Sunrise' }, 
        description: { ro: '50 ml tequila, 200 ml portocale, grenadine', en: '50 ml tequila, 200 ml orange juice, grenadine' },
        price: '24,00 lei',
        image: '/images/cocktailuri/tequila-sunrise.jpg'
      },
      { 
        name: { ro: 'Caribbean Wonder', en: 'Caribbean Wonder' }, 
        description: { ro: '50 ml vodka, 200 ml suc ananas, 40 ml blue curacao, lapte, frișcă', en: '50 ml vodka, 200 ml pineapple juice, 40 ml blue curacao, milk, whipped cream' },
        price: '24,00 lei',
        image: '/images/cocktailuri/carribean-wonder.jpg'
      },
      { 
        name: { ro: 'Aperol Spritz', en: 'Aperol Spritz' }, 
        description: { ro: '150 ml vin spumant, 40 ml aperol, apă minerală, felie portocală', en: '150 ml sparkling wine, 40 ml aperol, mineral water, orange slice' },
        price: '24,00 lei',
        image: '/images/cocktailuri/aperol.jpg',
        tags: ['new']
      },
      { 
        name: { ro: 'Safe Sex on the Beach', en: 'Safe Sex on the Beach' }, 
        description: { ro: '100 ml suc portocale, 100 ml suc ananas, grenadine', en: '100 ml orange juice, 100 ml pineapple juice, grenadine' },
        price: '24,00 lei',
        image: '/images/cocktailuri/safe-sex.jpg',
        tags: ['non-alcoholic']
      },
      {
        name: { ro: 'Campari Orange', en: 'Campari Orange' }, 
        description: { ro: '50 ml campari, 250 ml suc portocale', en: '50 ml campari, 250 ml orange juice' },
        price: '24,00 lei',
        image: '/images/cocktailuri/campari-orange.jpg'
      }
    ]
  },
  {
    title: { ro: 'SPECIALITĂȚI DIN CAFEA', en: 'COFFEE SPECIALTIES' },
    items: [
      { 
        name: { ro: 'Espresso', en: 'Espresso' }, 
        volume: '30 ml', 
        description: { ro: 'cafea, zahăr, lapte', en: 'coffee, sugar, milk' },
        price: '6,90 lei',
        image: '/images/specialitati-din-cafea/espresso.jpg',
        tags: ['non-alcoholic', 'recommended'] 
      },
      { 
        name: { ro: 'Espresso lung', en: 'Long Espresso' }, 
        volume: '60 ml', 
        description: { ro: 'cafea, zahăr, lapte', en: 'coffee, sugar, milk' },
        price: '6,90 lei',
        image: '/images/specialitati-din-cafea/espresso-lung.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Espresso dublu', en: 'Double Espresso' }, 
        volume: '60 ml', 
        description: { ro: 'cafea, zahăr, lapte', en: 'coffee, sugar, milk' },
        price: '13,80 lei',
        image: '/images/specialitati-din-cafea/espresso-dublu.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Cappuccino Italian', en: 'Italian Cappuccino' }, 
        volume: '120 ml', 
        description: { ro: 'cafea, zahăr, spumă lapte', en: 'coffee, sugar, milk foam' },
        price: '9,90 lei',
        image: '/images/specialitati-din-cafea/cappuccino-italian.jpg',
        tags: ['non-alcoholic', 'recommended'] 
      },
      { 
        name: { ro: 'Cappuccino Vienez', en: 'Viennese Cappuccino' }, 
        volume: '120 ml', 
        description: { ro: 'cafea, zahăr, frișcă', en: 'coffee, sugar, whipped cream' },
        price: '9,90 lei',
        image: '/images/specialitati-din-cafea/cappuccino-vienez.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Moccacino', en: 'Moccacino' }, 
        volume: '150 ml', 
        description: { ro: 'topping ciocolată, cafea, lapte, frișcă', en: 'chocolate topping, coffee, milk, whipped cream' },
        price: '9,90 lei',
        image: '/images/specialitati-din-cafea/moccacino.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Latte', en: 'Latte' }, 
        volume: '120 ml', 
        description: { ro: 'cafea, zahăr, spumă lapte', en: 'coffee, sugar, milk foam' },
        price: '9,90 lei',
        image: '/images/specialitati-din-cafea/latte.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Decaf Cafea', en: 'Decaf Coffee' }, 
        volume: '60 ml', 
        description: { ro: 'cafea, zahăr, lapte', en: 'coffee, sugar, milk' },
        price: '8,90 lei',
        image: '/images/specialitati-din-cafea/decaf-cafea.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Decaf Cappuccino', en: 'Decaf Cappuccino' }, 
        volume: '120 ml', 
        description: { ro: 'cafea, zahăr, frișcă, lapte', en: 'coffee, sugar, whipped cream, milk' },
        price: '11,90 lei',
        image: '/images/specialitati-din-cafea/decaf-cappuccino.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Decaf Latte', en: 'Decaf Latte' }, 
        volume: '120 ml', 
        description: { ro: 'cafea, zahăr, lapte', en: 'coffee, sugar, milk' },
        price: '11,90 lei',
        image: '/images/specialitati-din-cafea/decaf-latte.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Ice Coffee', en: 'Ice Coffee' }, 
        volume: '120 ml', 
        description: { ro: 'cafea, gheață, lapte, frișcă', en: 'coffee, ice, milk, whipped cream' },
        price: '9,90 lei',
        image: '/images/specialitati-din-cafea/ice-coffe.jpg',
        tags: ['non-alcoholic'] 
      }
    ]
  },
  {
    title: { ro: 'SPECIALITĂȚI', en: 'SPECIALTIES' },
    items: [
      { 
        name: { ro: 'Frappe fără cofeină', en: 'Decaf Frappe' }, 
        volume: '350 ml', 
        description: { ro: 'cafea, lapte, frișcă, înghețată', en: 'coffee, milk, whipped cream, ice cream' },
        price: '15,90 lei',
        image: '/images/specialitati/frape-fara-cofeina.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Frappe Cafea', en: 'Coffee Frappe' }, 
        volume: '350 ml', 
        description: { ro: 'cafea, lapte, frișcă, înghețată', en: 'coffee, milk, whipped cream, ice cream' },
        price: '12,90 lei',
        image: '/images/specialitati/frape-cafea.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Frappe Fructe', en: 'Fruit Frappe' }, 
        volume: '350 ml', 
        description: { ro: 'lapte, pireu fructe, înghețată, frișcă', en: 'milk, fruit puree, ice cream, whipped cream' },
        price: '12,90 lei',
        image: '/images/specialitati/frape-fructe.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Frappe Ciocolată', en: 'Chocolate Frappe' }, 
        volume: '350 ml', 
        description: { ro: 'lapte, sirop, frișcă', en: 'milk, syrup, whipped cream' },
        price: '12,90 lei',
        image: '/images/specialitati/frape-ciocolata.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Frappe Vanilie', en: 'Vanilla Frappe' }, 
        volume: '350 ml', 
        description: { ro: 'lapte, sirop, frișcă', en: 'milk, syrup, whipped cream' },
        price: '12,90 lei',
        image: '/images/specialitati/frape-vanilie.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Milkshake', en: 'Milkshake' }, 
        volume: '250 ml', 
        description: { ro: 'sirop diferite arome, lapte, gheață (Căpșuni • Fructe de Pădure • Mere)', en: 'different flavor syrups, milk, ice (Strawberry • Forest Berries • Apple)' },
        price: '10,90 lei',
        image: '/images/specialitati/milkshake.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Smoothie', en: 'Smoothie' }, 
        volume: '300 ml', 
        description: { ro: 'lapte, gheață, iaurt, căpșuni, căpșuni&banane (Mango • Fructul Pasiunii&Kiwi • Vanilie)', en: 'milk, ice, yogurt, strawberries, strawberries&bananas (Mango • Passion Fruit&Kiwi • Vanilla)' },
        price: '13,90 lei',
        image: '/images/specialitati/smoothie.jpg',
        tags: ['non-alcoholic', 'vegan'] 
      }
    ]
  },
  {
    title: { ro: 'BĂUTURI ALCOOLICE', en: 'ALCOHOLIC DRINKS' },
    items: [
      { 
        name: { ro: 'Martini', en: 'Martini' }, 
        volume: '50 ml', 
        alcohol: '15%', 
        price: '6,90 lei',
        image: '/images/bauturi-alcoolice/martini.jpg'
      },
      { 
        name: { ro: 'Angelli', en: 'Angelli' }, 
        volume: '50 ml', 
        alcohol: '40%', 
        price: '6,90 lei',
        image: '/images/bauturi-alcoolice/angeli.jpg'
      },
      { 
        name: { ro: 'Unirea', en: 'Unirea' }, 
        volume: '50 ml', 
        alcohol: '28%', 
        price: '4,90 lei',
        image: '/images/bauturi-alcoolice/unirea.jpg'
      },
      { 
        name: { ro: 'Jägermeister', en: 'Jägermeister' }, 
        volume: '30 ml', 
        alcohol: '35%', 
        price: '7,00 lei',
        image: '/images/bauturi-alcoolice/jager.jpg'
      },
      { 
        name: { ro: 'Tequila', en: 'Tequila' }, 
        volume: '50 ml', 
        alcohol: '40%', 
        price: '7,00 lei',
        image: '/images/bauturi-alcoolice/tequila.jpg'
      },
      { 
        name: { ro: 'Alexandrion 5★', en: 'Alexandrion 5★' }, 
        volume: '50 ml', 
        alcohol: '37.5%', 
        price: '7,40 lei',
        image: '/images/bauturi-alcoolice/alexandrion-5.jpg'
      },
      { 
        name: { ro: 'Vodka Lemon', en: 'Vodka Lemon' }, 
        volume: '50 ml', 
        alcohol: '28%', 
        price: '7,90 lei',
        image: '/images/bauturi-alcoolice/vodka-lemon.jpg'
      },
      { 
        name: { ro: 'Alexandrion 7★', en: 'Alexandrion 7★' }, 
        volume: '50 ml', 
        alcohol: '40%', 
        price: '8,40 lei',
        image: '/images/bauturi-alcoolice/alexandrion-7.jpg'
      },
      { 
        name: { ro: 'Stalinskaya', en: 'Stalinskaya' }, 
        volume: '50 ml', 
        alcohol: '40%', 
        price: '7,40 lei',
        image: '/images/bauturi-alcoolice/stalinskaya.jpg'
      },
      { 
        name: { ro: 'Finlandia', en: 'Finlandia' }, 
        volume: '50 ml', 
        alcohol: '40%', 
        price: '8,90 lei',
        image: '/images/bauturi-alcoolice/finlandia.jpg'
      },
      { 
        name: { ro: 'Metaxa 5★', en: 'Metaxa 5★' }, 
        volume: '50 ml', 
        alcohol: '40%', 
        price: '9,90 lei',
        image: '/images/bauturi-alcoolice/metaxa-5.jpg'
      },
      { 
        name: { ro: 'Vinars Jidvei', en: 'Vinars Jidvei' }, 
        volume: '50 ml', 
        alcohol: '42%', 
        price: '9,90 lei',
        image: '/images/bauturi-alcoolice/vinars-jidvei.jpg'
      },
      { 
        name: { ro: 'Bacardi', en: 'Bacardi' }, 
        volume: '50 ml', 
        alcohol: '40%', 
        price: '9,40 lei',
        image: '/images/bauturi-alcoolice/bacardi.jpg'
      },
      { 
        name: { ro: 'Gordon\'s Sicilian Lemon', en: 'Gordon\'s Sicilian Lemon' }, 
        volume: '50 ml', 
        alcohol: '40%', 
        price: '9,90 lei',
        image: '/images/bauturi-alcoolice/gordons-lemon.jpg'
      },
      { 
        name: { ro: 'Gregory\'s London Dry Gin', en: 'Gregory\'s London Dry Gin' }, 
        volume: '50 ml', 
        alcohol: '40%', 
        price: '7,40 lei',
        image: '/images/bauturi-alcoolice/gregory-gin.jpg'
      },
      { 
        name: { ro: 'Beefeater Strawberry Gin', en: 'Beefeater Strawberry Gin' }, 
        volume: '50 ml', 
        alcohol: '40%', 
        price: '9,90 lei',
        image: '/images/bauturi-alcoolice/strawberry-gin.jpg'
      },
      { 
        name: { ro: 'Vecchia Romagna', en: 'Vecchia Romagna' }, 
        volume: '50 ml', 
        alcohol: '40%', 
        price: '9,90 lei',
        image: '/images/bauturi-alcoolice/vechia-romagna.jpg'
      },
      { 
        name: { ro: 'Crema Whiskey', en: 'Cream Whiskey' }, 
        volume: '50 ml', 
        alcohol: '17%', 
        price: '9,90 lei',
        image: '/images/bauturi-alcoolice/crema-whiskey.jpg'
      },
      { 
        name: { ro: 'Havana Club', en: 'Havana Club' }, 
        volume: '50 ml', 
        alcohol: '40%', 
        price: '10,80 lei',
        image: '/images/bauturi-alcoolice/havana.jpg'
      },
      { 
        name: { ro: 'Jack Daniel\'s', en: 'Jack Daniel\'s' }, 
        volume: '50 ml', 
        alcohol: '40%', 
        price: '11,40 lei',
        image: '/images/bauturi-alcoolice/jd.jpg',
        tags: ['recommended'] 
      },
      { 
        name: { ro: 'J&B', en: 'J&B' }, 
        volume: '50 ml', 
        alcohol: '40%', 
        price: '9,90 lei',
        image: '/images/bauturi-alcoolice/jb.jpg'
      },
      { 
        name: { ro: 'Chivas Regal', en: 'Chivas Regal' }, 
        volume: '50 ml', 
        alcohol: '40%', 
        price: '14,40 lei',
        image: '/images/bauturi-alcoolice/chivas.jpg',
        tags: ['recommended'] 
      }
    ]
  },
  {
    title: { ro: 'BĂUTURI RĂCORITOARE', en: 'SOFT DRINKS' },
    items: [
      { 
        name: { ro: 'Coca Cola / Zero', en: 'Coca Cola / Zero' }, 
        volume: '250 ml', 
        price: '8,90 lei',
        image: '/images/bauturi-racoritoare/cola-zero.jpg',
        tags: ['non-alcoholic', 'recommended'] 
      },
      { 
        name: { ro: 'Fanta (portocale / madness)', en: 'Fanta (orange / madness)' }, 
        volume: '250 ml', 
        price: '8,90 lei',
        image: '/images/bauturi-racoritoare/fanta-orange-madness.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Sprite', en: 'Sprite' }, 
        volume: '250 ml', 
        price: '8,90 lei',
        image: '/images/bauturi-racoritoare/sprite.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Schweppes Tonic', en: 'Schweppes Tonic' }, 
        volume: '250 ml', 
        price: '8,90 lei',
        image: '/images/bauturi-racoritoare/tonic.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Schweppes Bitter Lemon', en: 'Schweppes Bitter Lemon' }, 
        volume: '250 ml', 
        price: '8,90 lei',
        image: '/images/bauturi-racoritoare/lemon-tonic.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Schweppes Mandarin', en: 'Schweppes Mandarin' }, 
        volume: '250 ml', 
        price: '8,90 lei',
        image: '/images/bauturi-racoritoare/schweppes-mandarin.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Schweppes Pink Tonic', en: 'Schweppes Pink Tonic' }, 
        volume: '250 ml', 
        price: '8,90 lei',
        image: '/images/bauturi-racoritoare/pink-tonic.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Fuze Tea Lemon Lemongrass', en: 'Fuze Tea Lemon Lemongrass' }, 
        volume: '250 ml', 
        price: '10,90 lei',
        image: '/images/bauturi-racoritoare/fuzetea-lemon.jpg',
        tags: ['non-alcoholic', 'new'] 
      },
      { 
        name: { ro: 'Fuze Tea Peach Hibiscus', en: 'Fuze Tea Peach Hibiscus' }, 
        volume: '250 ml', 
        price: '10,90 lei',
        image: '/images/bauturi-racoritoare/fuzetea-piersici.jpg',
        tags: ['non-alcoholic', 'new'] 
      },
      { 
        name: { ro: 'Cappy Nectar Portocale', en: 'Cappy Nectar Orange' }, 
        volume: '250 ml', 
        price: '10,90 lei',
        image: '/images/bauturi-racoritoare/capy-portocale.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Cappy Nectar Piersici', en: 'Cappy Nectar Peach' }, 
        volume: '250 ml', 
        price: '10,90 lei',
        image: '/images/bauturi-racoritoare/capy-piersici.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Cappy Nectar Vișine', en: 'Cappy Nectar Sour Cherry' }, 
        volume: '250 ml', 
        price: '10,90 lei',
        image: '/images/bauturi-racoritoare/capy-visine.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Cappy Nectar Pere', en: 'Cappy Nectar Pear' }, 
        volume: '250 ml', 
        price: '10,90 lei',
        image: '/images/bauturi-racoritoare/capy-pere.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Cappy Portocale Roșii', en: 'Cappy Red Orange' }, 
        volume: '250 ml', 
        price: '10,90 lei',
        image: '/images/bauturi-racoritoare/capy-portocale-rosii.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Dorna (carbo / plată)', en: 'Dorna (sparkling / still)' }, 
        volume: '330 ml', 
        price: '6,90 lei',
        image: '/images/bauturi-racoritoare/plata-minerala.jpg',
        tags: ['non-alcoholic']
      },
      { 
        name: { ro: 'Energizant (Burn)', en: 'Energy Drink (Burn)' }, 
        volume: '250 ml', 
        price: '9,90 lei',
        image: '/images/bauturi-racoritoare/burn.jpg',
        tags: ['non-alcoholic']
      },
      { 
        name: { ro: 'Suc roșii', en: 'Tomato Juice' }, 
        volume: '330 ml', 
        price: '8,90 lei',
        image: '/images/bauturi-racoritoare/suc-rosii.jpg',
        tags: ['non-alcoholic', 'vegan'] 
      }
    ]
  },
  {
    title: { ro: 'LIMONADE & FRESHURI', en: 'LEMONADE & FRESH' },
    items: [
      { 
        name: { ro: 'Limonadă cu fructe de pădure', en: 'Forest Berries Lemonade' }, 
        volume: '400 ml', 
        description: { ro: '80g fructe, 30 ml sirop zahăr, gheață, apă', en: '80g berries, 30 ml sugar syrup, ice, water' },
        price: '12,90 lei',
        image: '/images/limonade-freshuri/fructe-padure.jpg',
        tags: ['non-alcoholic', 'vegan', 'recommended']
      },
      { 
        name: { ro: 'Limonadă pepene galben', en: 'Yellow Melon Lemonade' }, 
        volume: '400 ml', 
        description: { ro: '200g pepene, 30 ml sirop zahăr, gheață, apă', en: '200g melon, 30 ml sugar syrup, ice, water' },
        price: '12,90 lei',
        image: '/images/limonade-freshuri/pepene.jpg',
        tags: ['non-alcoholic', 'vegan', 'new']
      },
      { 
        name: { ro: 'Limonadă cu lămâie', en: 'Lemon Lemonade' }, 
        volume: '400 ml', 
        description: { ro: '50 ml suc lămâie, 30 ml sirop zahăr, gheață, apă', en: '50 ml lemon juice, 30 ml sugar syrup, ice, water' },
        price: '12,90 lei',
        image: '/images/limonade-freshuri/lamaie.jpg',
        tags: ['non-alcoholic', 'vegan'] 
      },
      { 
        name: { ro: 'Limonadă portocale', en: 'Orange Lemonade' }, 
        volume: '400 ml', 
        description: { ro: '100 ml portocale, 30 ml sirop zahăr, gheață, apă', en: '100 ml orange juice, 30 ml sugar syrup, ice, water' },
        price: '12,90 lei',
        image: '/images/limonade-freshuri/portocale.jpg',
        tags: ['non-alcoholic', 'vegan'] 
      },
      { 
        name: { ro: 'Limonadă lămâie + ghimbir', en: 'Lemon + Ginger Lemonade' }, 
        volume: '400 ml', 
        description: { ro: '50 ml suc lămâie, 30 ml sirop zahăr, gheață, apă, ghimbir', en: '50 ml lemon juice, 30 ml sugar syrup, ice, water, ginger' },
        price: '12,90 lei',
        image: '/images/limonade-freshuri/lamaie-ghimbir.jpg',
        tags: ['non-alcoholic', 'vegan'] 
      },
      { 
        name: { ro: 'Limonadă lămâie + soc', en: 'Lemon + Elderflower Lemonade' }, 
        volume: '400 ml', 
        description: { ro: '50 ml suc lămâie, 30 ml sirop zahăr, gheață, apă și soc', en: '50 ml lemon juice, 30 ml sugar syrup, ice, water and elderflower' },
        price: '12,90 lei',
        image: '/images/limonade-freshuri/lamaie-soc.jpg',
        tags: ['non-alcoholic', 'vegan'] 
      },
      { 
        name: { ro: 'Cico', en: 'Cico' }, 
        volume: '250 ml', 
        description: { ro: 'mere, fructe de pădure, căpșuni', en: 'apples, forest berries, strawberries' },
        price: '10,90 lei',
        image: '/images/limonade-freshuri/cico.jpg',
        tags: ['non-alcoholic']
      },
      { 
        name: { ro: 'Sara Ice', en: 'Sara Ice' }, 
        volume: '250 ml', 
        description: { ro: 'mere, fructe de pădure, căpșuni', en: 'apples, forest berries, strawberries' },
        price: '10,90 lei',
        image: '/images/limonade-freshuri/sara-ice.jpg',
        tags: ['non-alcoholic']
      },
      { 
        name: { ro: 'Fresh de portocale', en: 'Fresh Orange Juice' }, 
        volume: '300 ml', 
        price: '14,90 lei',
        image: '/images/limonade-freshuri/fresh-portocale.jpg',
        tags: ['non-alcoholic', 'vegan', 'recommended'] 
      }
    ]
  },
  {
    title: { ro: 'SPECIALITĂȚI CEAI', en: 'TEA SPECIALTIES' },
    note: { ro: 'Toate preparate cu apă și pliculeț ceai', en: 'All made with water and tea bag' },
    items: [
      { 
        name: { ro: 'Mentă', en: 'Mint' }, 
        volume: '300 ml', 
        price: '10,00 lei',
        image: '/images/specialitati-ceai/menta.jpg',
        tags: ['non-alcoholic', 'vegan', 'recommended'] 
      },
      { 
        name: { ro: 'Mentă + Lămâie', en: 'Mint + Lemon' }, 
        volume: '300 ml', 
        price: '10,00 lei',
        image: '/images/specialitati-ceai/menta+lamaie.jpg',
        tags: ['non-alcoholic', 'vegan'] 
      },
      { 
        name: { ro: 'Fructe', en: 'Fruit Tea' }, 
        volume: '300 ml', 
        price: '10,00 lei',
        image: '/images/specialitati-ceai/fructe.jpg',
        tags: ['non-alcoholic', 'vegan'] 
      },
      { 
        name: { ro: 'Negru', en: 'Black Tea' }, 
        volume: '300 ml', 
        price: '10,00 lei',
        image: '/images/specialitati-ceai/negru.jpg',
        tags: ['non-alcoholic', 'vegan'] 
      },
      { 
        name: { ro: 'Verde', en: 'Green Tea' }, 
        volume: '300 ml', 
        price: '10,00 lei',
        image: '/images/specialitati-ceai/verde.jpg',
        tags: ['non-alcoholic', 'vegan'] 
      },
      { 
        name: { ro: 'Mușețel', en: 'Chamomile' }, 
        volume: '300 ml', 
        price: '10,00 lei',
        image: '/images/specialitati-ceai/musetel.jpg',
        tags: ['non-alcoholic', 'vegan'] 
      },
      { 
        name: { ro: 'Ghimbir', en: 'Ginger' }, 
        volume: '300 ml', 
        price: '10,00 lei',
        image: '/images/specialitati-ceai/ghimbir.jpg',
        tags: ['non-alcoholic', 'vegan'] 
      }
    ]
  },
  {
    title: { ro: 'FAST FOOD', en: 'FAST FOOD' },
    items: [
      { 
        name: { ro: 'Sandwich pui', en: 'Chicken Sandwich' }, 
        volume: '210g',
        description: { ro: 'șnițel pui, brânză, maioneză, castraveți, margarină, baton', en: 'chicken schnitzel, cheese, mayonnaise, pickles, margarine, baguette' },
        price: '15,00 lei',
        image: '/images/fast-food/sandwich-pui.jpg'
      },
      { 
        name: { ro: 'Sandwich porc', en: 'Pork Sandwich' }, 
        volume: '210g',
        description: { ro: 'șnițel porc, brânză, maioneză, castraveți, margarină, baton', en: 'pork schnitzel, cheese, mayonnaise, pickles, margarine, baguette' },
        price: '15,00 lei',
        image: '/images/fast-food/sandwich-porc.jpg'
      },
      { 
        name: { ro: 'Sandwich pui cu ciuperci', en: 'Chicken & Mushroom Sandwich' }, 
        volume: '190g',
        description: { ro: 'piept pui la grătar, șuncă, remouladă, margarină, baton', en: 'grilled chicken breast, ham, remoulade, margarine, baguette' },
        price: '15,00 lei',
        image: '/images/fast-food/sandwich-snitel.jpg',
        tags: ['new']
      },
      { 
        name: { ro: 'Sandwich cu șuncă și salam', en: 'Ham & Salami Sandwich' }, 
        volume: '200g',
        description: { ro: 'baton, margarină, brânză felii, șuncă, salam uscat, ardei, maioneză', en: 'baguette, margarine, sliced cheese, ham, dry salami, peppers, mayonnaise' },
        price: '13,00 lei',
        image: '/images/fast-food/sandwich-sunca.jpg'
      },
      { 
        name: { ro: 'Clătite IVA', en: 'IVA Pancakes' }, 
        volume: '170g',
        description: { ro: 'aluat: făină, zahăr, lapte, cacao / cremă: mascarpone, frișcă, zahăr, pișcoturi', en: 'dough: flour, sugar, milk, cocoa / cream: mascarpone, whipped cream, sugar, cookies' },
        price: '15,00 lei',
        image: '/images/fast-food/clatite.jpg'
      },
      { 
        name: { ro: 'Nachos + sos', en: 'Nachos + sauce' }, 
        volume: '100g', 
        price: '12,00 lei',
        image: '/images/fast-food/nachos.jpg'
      },
      { 
        name: { ro: 'Alune', en: 'Peanuts' }, 
        volume: '85g', 
        price: '6,90 lei',
        image: '/images/fast-food/alune.jpg',
        tags: ['vegan'] 
      },
      { 
        name: { ro: 'Popcorn', en: 'Popcorn' }, 
        volume: '100g', 
        price: '6,90 lei',
        image: '/images/fast-food/popcorn.jpg',
        tags: ['vegan'] 
      },
      { 
        name: { ro: 'Sos nachos', en: 'Nacho sauce' }, 
        volume: '30g', 
        price: '3,00 lei',
        image: '/images/fast-food/sos.jpg'
      }
    ]
  },
  {
    title: { ro: 'SPECIALITĂȚI DIN CIOCOLATĂ', en: 'CHOCOLATE SPECIALTIES' },
    items: [
      { 
        name: { ro: 'Gold Classic', en: 'Gold Classic' }, 
        volume: '300 ml', 
        description: { ro: 'lapte, ciocolată, frișcă', en: 'milk, chocolate, whipped cream' },
        price: '10,90 lei',
        image: '/images/specialitati-din-ciocolata/gold-clasic.jpg',
        tags: ['non-alcoholic', 'recommended'] 
      },
      { 
        name: { ro: 'Portocale + Scorțișoară', en: 'Orange + Cinnamon' }, 
        volume: '300 ml', 
        description: { ro: 'lapte, ciocolată, frișcă', en: 'milk, chocolate, whipped cream' },
        price: '10,90 lei',
        image: '/images/specialitati-din-ciocolata/portocale-scortisoara.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Neagră + Alune', en: 'Dark + Nuts' }, 
        volume: '300 ml', 
        description: { ro: 'lapte, ciocolată, frișcă', en: 'milk, chocolate, whipped cream' },
        price: '10,90 lei',
        image: '/images/specialitati-din-ciocolata/neagra-alune.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Cocos', en: 'Coconut' }, 
        volume: '300 ml', 
        description: { ro: 'lapte, ciocolată, frișcă', en: 'milk, chocolate, whipped cream' },
        price: '10,90 lei',
        image: '/images/specialitati-din-ciocolata/cocos.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Rom și Praline', en: 'Rum & Praline' }, 
        volume: '300 ml', 
        description: { ro: 'lapte, ciocolată, frișcă', en: 'milk, chocolate, whipped cream' },
        price: '10,90 lei',
        image: '/images/specialitati-din-ciocolata/gold-clasic.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Albă', en: 'White' }, 
        volume: '300 ml', 
        description: { ro: 'lapte, ciocolată, frișcă', en: 'milk, chocolate, whipped cream' },
        price: '10,90 lei',
        image: '/images/specialitati-din-ciocolata/alba.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Mentă', en: 'Mint' }, 
        volume: '300 ml', 
        description: { ro: 'lapte, ciocolată, frișcă', en: 'milk, chocolate, whipped cream' },
        price: '10,90 lei',
        image: '/images/specialitati-din-ciocolata/neagra-menta.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Neagră + Căpșuni', en: 'Dark + Strawberry' }, 
        volume: '300 ml', 
        description: { ro: 'lapte, ciocolată, frișcă', en: 'milk, chocolate, whipped cream' },
        price: '10,90 lei',
        image: '/images/specialitati-din-ciocolata/neagra-capsuni.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Albă cu Alune', en: 'White with Nuts' }, 
        volume: '300 ml', 
        description: { ro: 'lapte, ciocolată, frișcă', en: 'milk, chocolate, whipped cream' },
        price: '10,90 lei',
        image: '/images/specialitati-din-ciocolata/alba-alune.jpg',
        tags: ['non-alcoholic'] 
      },
      { 
        name: { ro: 'Budincă', en: 'Pudding' }, 
        volume: '300 ml', 
        description: { ro: 'lapte, ciocolată, frișcă', en: 'milk, chocolate, whipped cream' },
        price: '11,90 lei',
        image: '/images/specialitati-din-ciocolata/budinca.jpg',
        tags: ['non-alcoholic'] 
      }
    ]
  },
  {
    title: { ro: 'VINURI & ȘAMPANIE', en: 'WINES & CHAMPAGNE' },
    items: [
      { 
        name: { ro: 'Cinzano alb', en: 'Cinzano White' }, 
        volume: '50 ml', 
        alcohol: '15%', 
        price: '6,90 lei',
        image: '/images/vinuri-sampanie/cinzano-alb.jpg',
        tags: ['recommended'] 
      },
      { 
        name: { ro: 'Vin Roșu, Alb, Roze', en: 'Red, White, Rosé Wine' }, 
        volume: '187 ml', 
        price: '12,00 lei',
        image: '/images/vinuri-sampanie/rosu-alb-roze.jpg'
      },
      { 
        name: { ro: 'Vin Jidvei', en: 'Wine Jidvei' }, 
        volume: '750 ml', 
        description: { ro: 'sec, demi-sec, demi-dulce', en: 'dry, semi-dry, semi-sweet' },
        price: '44,00 lei',
        image: '/images/vinuri-sampanie/jidvei.jpg',
        tags: ['recommended'] 
      },
      { 
        name: { ro: 'Castel Huniade', en: 'Castel Huniade' }, 
        volume: '750 ml', 
        description: { ro: 'sec, demi-sec, demi-dulce', en: 'dry, semi-dry, semi-sweet' },
        price: '44,00 lei',
        image: '/images/vinuri-sampanie/castel-huniade.jpg'
      },
      { 
        name: { ro: 'Prosecco', en: 'Prosecco' }, 
        volume: '750 ml', 
        alcohol: '11%', 
        description: { ro: 'sec, demi-sec', en: 'dry, semi-dry' },
        price: '65,00 lei',
        image: '/images/vinuri-sampanie/prosecco.jpg',
        tags: ['new'] 
      },
      { 
        name: { ro: 'Vin alb/roșu', en: 'White/Red Wine' }, 
        volume: '200 ml', 
        alcohol: '7.0%',
        description: { ro: 'pahar (sec, demi-sec, demi-dulce)', en: 'glass (dry, semi-dry, semi-sweet)' },
        price: '8,90 lei',
        image: '/images/vinuri-sampanie/alb-rosu.jpg'
      },
      { 
        name: { ro: 'Vin fiert', en: 'Mulled Wine' }, 
        volume: '200 ml', 
        price: '8,90 lei',
        image: '/images/vinuri-sampanie/vin-fiert.jpg',
        tags: ['seasonal'] 
      },
      { 
        name: { ro: 'Șampanie Gold', en: 'Gold Champagne' }, 
        volume: '750 ml', 
        alcohol: '11%',
        price: '65,00 lei',
        image: '/images/vinuri-sampanie/sampanie-gold.jpg',
        tags: ['premium'] 
      },
      { 
        name: { ro: 'Lambrusco', en: 'Lambrusco' }, 
        volume: '750 ml', 
        alcohol: '7.5%',
        price: '44,00 lei',
        image: '/images/vinuri-sampanie/lambrusco.jpg'
      },
      { 
        name: { ro: 'Șampanie', en: 'Champagne' }, 
        volume: '750 ml', 
        alcohol: '10%',
        price: '44,00 lei',
        image: '/images/vinuri-sampanie/sampanie.jpg'
      }
    ]
  }
];
