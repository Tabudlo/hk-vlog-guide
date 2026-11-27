// Trip data. Times are Hong Kong time (UTC+8). Pins are approximate; Maps links search by name and address.
// Stop: { t, en, wiki[], zh, area, kind, say, about, facts[], order[[en, zh]], eat[], tip, go, q, ll }
// eat = "While you eat" prompts: what to point the camera at and how to describe the taste and texture.
// t is only the planned order; the app does not show it. fixed = a time that can't move (booking, flight, ferry, opening, sunset), shown as a tag. wiki = Wikipedia articles tried in order for the photo.
// Leg:  { leg, t, mode, text }
window.TRIP = {
  home: {
    en: "Kim Tak Building, 328–342A Nathan Road, Jordan, Kowloon",
    zh: "九龍佐敦彌敦道328–342A號",
    ll: [22.3058, 114.1714]
  },
  days: [
  {
    id: "sat", date: "2026-11-28", dow: "Sat", dom: "28", color: "#00888a", line: "Airport Express teal",
    title: "Arrival night",
    route: "Airport → Kowloon → Jordan",
    intro: "Kia ora from Hong Kong. It's Saturday night, I've just landed, and tonight I've got one job: get into Jordan, drop the bags, and find something hot on a stick on Temple Street. Everything else can wait till morning.",
    items: [
      { t: "18:45", fixed: "Lands 18:45", en: "Hong Kong International Airport", wiki: ["Hong Kong International Airport", "Chek Lap Kok", "Airport Express (MTR)"], zh: "香港國際機場", area: "Chek Lap Kok", kind: "hub",
        say: "Touched down. This whole airport sits on an island they flattened and enlarged out of the sea, which is a very Hong Kong way to solve a problem. Cash, eSIM, and straight into town.",
        about: "Hong Kong ran out of flat land a long time ago, so when it needed a new airport, it made some. Chek Lap Kok was a hilly island off Lantau. It was levelled and joined to Lam Chau with reclaimed land, and the airport opened here in 1998. Before that, planes landed at Kai Tak, right in the middle of Kowloon City, coming in low over the rooftops. You'll be near that old neighbourhood on Thursday.",
        facts: [
          "The airport opened in July 1998, replacing Kai Tak, whose runway was right next to Kowloon City.",
          "Most of the airport platform is reclaimed land built around the islands of Chek Lap Kok and Lam Chau.",
          "You'll walk near Kai Tak's old neighbourhood on Thursday at Kowloon Walled City Park."
        ],
        tip: "At the ATM, choose to be charged in HKD, not NZD. Switch the eSIM on before you leave the arrivals hall.",
        go: "Follow signs to the Airport Express, right off the arrivals hall.",
        q: "Hong Kong International Airport Terminal 1", ll: [22.3135, 113.9145] },
      { leg: 1, t: "19:40", mode: "Airport Express", text: "Airport → Kowloon Station, about 22 min. Tap Octopus or a contactless card." },
      { leg: 1, t: "20:05", mode: "Taxi", text: "Kowloon Station → Airbnb on Nathan Road. Taxi rank at the station; show the driver the address on the Home card." },
      { t: "20:30", en: "Airbnb, Jordan", wiki: ["Nathan Road"], zh: "佐敦 · 彌敦道", area: "Jordan", kind: "rest",
        say: "Home base for the week: Nathan Road, Jordan, right in the middle of Kowloon. Bags down, quick freshen up, and back out. Nobody comes to Hong Kong to sit in the room.",
        about: "Nathan Road is Kowloon's spine. It runs north from the harbour through Tsim Sha Tsui, Jordan, Yau Ma Tei and Mong Kok, and almost everything this week starts from it. It's named after Sir Matthew Nathan, governor from 1904 to 1907. Jordan sits in the middle: close enough to walk to the harbour, close enough to the night markets to be dangerous.",
        facts: [
          "Nathan Road is named after Sir Matthew Nathan, Governor of Hong Kong from 1904 to 1907. It got the name in 1909.",
          "Jordan Road was called Sixth Street until 1909, when it was renamed after Sir John Jordan, then Britain's Minister to China."
        ],
        go: "Kim Tak Building, 328–342A Nathan Road. Jordan MTR station is a short walk away.",
        q: "328 Nathan Road Jordan Hong Kong", ll: [22.3058, 114.1714] },
      { leg: 1, t: "22:10", mode: "Walk", text: "To Temple Street, about 5 min." },
      { t: "22:15", en: "Temple Street Night Market", wiki: ["Temple Street, Hong Kong"], zh: "廟街夜市", area: "Jordan / Yau Ma Tei", kind: "food",
        say: "First night, first snack. This is Temple Street Night Market: fortune tellers, cheap gadgets, and open-air kitchens throwing clams around a wok. I'm going in hungry.",
        about: "Temple Street is named after the Tin Hau Temple in the middle of it. Tin Hau is the sea goddess, worshipped by the fishing families who were here long before the towers. At night the street fills with stalls selling clothes and souvenirs, and the restaurants put their tables out for seafood and clay-pot rice. Near the temple end there are fortune tellers, and some nights Cantonese opera singers.",
        facts: [
          "The street is named after the Tin Hau Temple in Yau Ma Tei, which sits in the middle of it.",
          "Tin Hau is the sea goddess, traditionally worshipped by Hong Kong's fishing communities.",
          "The Tin Hau temple complex dates back to the 1800s."
        ],
        order: [["Skewers or fish balls from a stall", "串燒 · 魚蛋"], ["Stir-fried clams in black bean sauce", "豉椒炒蜆"], ["Fried noodles", "炒麵"]],
        eat: [
          "Stand near a wok for a minute before you order. Describe the flames and the smoke. That charred, smoky smell is wok hei, 'the breath of the wok', and you only get it from a huge flame and a very hot pan.",
          "Black bean clams: the fermented black beans are salty and funky, like soy sauce in solid form. Show the sauce clinging to the shells, then suck it off one.",
          "Eat a skewer standing up and say so. Street food tastes different when you're dodging people. Talk about the noise and the crowd, not just the food."
        ],
        go: "Enter from Jordan Road and walk north.",
        q: "Temple Street Night Market Hong Kong", ll: [22.3066, 114.1700] }
    ]
  },
  {
    id: "sun", date: "2026-11-29", dow: "Sun", dom: "29", color: "#e2231a", line: "Tsuen Wan red",
    title: "Kowloon eating day",
    route: "Sham Shui Po → Prince Edward → Mong Kok → harbour → Jordan",
    intro: "Morning from Jordan. No pretending today: this is an eating day. First Sham Shui Po, one of the oldest working-class corners of Kowloon, where the food is cheap and the bar is high. Then I eat my way south to the harbour. People keep telling me to pace myself. We'll see.",
    items: [
      { t: "07:30", en: "Australia Dairy Company", wiki: ["Australia Dairy Company"], zh: "澳洲牛奶公司", area: "Jordan", kind: "food",
        say: "Australia Dairy Company. Nobody here is going to hold your hand. You sit where they point, you share a table with strangers, you order fast, and in return you get some of the most famous scrambled eggs in Hong Kong. Fair trade.",
        about: "Cha chaan teng literally means 'tea restaurant'. Think of it as Hong Kong's answer to the Western café: macaroni soup, toast and milk tea, done the Cantonese way. This one opened in 1970, and the owner named it after the two years he'd just spent in Australia. The speed isn't rudeness, it's how the place works: tables turn over in minutes.",
        facts: [
          "It opened in 1970. The owner had just spent two years in Australia, which is where the name comes from.",
          "Cha chaan teng means 'tea restaurant': Hong Kong's take on Western café food with Cantonese habits.",
          "Its steamed milk pudding (燉奶) is one of its signatures."
        ],
        order: [["Scrambled egg toast", "炒蛋多士"], ["Macaroni soup with ham", "火腿通粉"], ["Hot milk tea", "熱奶茶"], ["Steamed milk pudding", "燉奶"]],
        eat: [
          "Scrambled eggs: describe them before you taste. Soft, glossy and barely set, closer to custard than the dry eggs at home. Show how they sit on the toast.",
          "Macaroni soup with ham sounds wrong to most people at home, so explain it: Western ingredients, Cantonese comfort-food logic. Light broth, soft pasta, salty ham.",
          "Milk pudding: give the bowl a wobble on camera first. Smooth, set, sweet but not heavy.",
          "Narrate the pace: how fast the food came, and how fast the table next to you left."
        ],
        tip: "Expect to share a table. Know your order before you sit down.",
        go: "47–49 Parkes Street, Jordan. About 5 min walk from the Airbnb.",
        q: "Australia Dairy Company 47 Parkes Street Jordan", ll: [22.3046, 114.1707] },
      { leg: 1, t: "08:15", mode: "MTR", text: "Jordan → Sham Shui Po, Tsuen Wan line towards Tsuen Wan, 4 stops, about 8 min." },
      { t: "08:30", en: "Hop Yik Tai & Kung Wo", wiki: ["Cheung fun"], zh: "合益泰小食 · 公和荳品廠", area: "Sham Shui Po", kind: "food",
        say: "Second breakfast already. This is Sham Shui Po, where cheap and brilliant is normal. Rice rolls drowned in sauce at Hop Yik Tai, then tofu pudding a street over at Kung Wo, a shop that traces its history back to 1893.",
        about: "Sham Shui Po is one of Hong Kong's oldest working-class districts: fabric wholesalers, electronics stalls, and food priced for people who work for a living. Hop Yik Tai is a tiny takeaway counter in the Michelin Guide for one thing, cheung fun: steamed rice-noodle rolls, named 'intestine noodle' for their rolled shape. A street over, Kung Wo still makes its own tofu, soy milk and tofu pudding on site, and the stone grinder starts at 2am. They were working while you were asleep.",
        facts: [
          "Cheung fun means 'intestine noodle', named for the rolled shape.",
          "Hop Yik Tai is listed in the Michelin Guide Hong Kong.",
          "Kung Wo traces its history back to 1893. Its soy is still made on site, with the stone grinder starting at 2am.",
          "Tofu pudding (豆腐花, dau fu fa) is a classic Cantonese dessert, eaten warm or cold with sugar or syrup."
        ],
        order: [["Cheung fun, all the sauces", "腸粉 · 齊醬"], ["Tofu pudding", "豆腐花"], ["Soy milk", "豆漿"], ["Pan-fried stuffed tofu", "煎釀豆腐"]],
        eat: [
          "Cheung fun: film the sauces going on, sweet sauce, peanut and sesame. Then describe the roll: slippery, soft, silky, with no filling. It's there to carry the sauce, and that's the point.",
          "Tofu pudding: lift a spoonful and let it wobble. It's much softer than the tofu you know, like a barely set custard made from soy. Say whether you went with sugar or syrup.",
          "Soy milk: taste it on its own first. Fresh soy milk is beany and a little nutty, nothing like the carton stuff."
        ],
        go: "Hop Yik Tai: 121 Kweilin Street. Kung Wo: 118 Pei Ho Street. Both a few minutes from Sham Shui Po station.",
        q: "Hop Yik Tai 121 Kweilin Street Sham Shui Po", ll: [22.3301, 114.1606] },
      { leg: 1, t: "09:50", mode: "Walk", text: "To Fuk Wing Street, about 5 min." },
      { t: "10:00", en: "Tim Ho Wan", wiki: ["Tim Ho Wan"], zh: "添好運點心專門店", area: "Sham Shui Po", kind: "food",
        say: "Tim Ho Wan. A dim sum chef from the Four Seasons opened a 20-seat shop, got a Michelin star within about a year, and became famous for one of the cheapest starred meals on the planet. I'm here for the baked pork buns.",
        about: "In 2009 Mak Kwai Pui, a former dim sum chef at Lung King Heen in the Four Seasons, opened a tiny shop in Mong Kok. In 2010 it got a Michelin star, and the queues never really stopped. Now there are branches around the world, but the idea is the same: hotel-level dim sum at street prices. The thing everyone orders is the baked BBQ pork bun, with a crunchy sugar top instead of a fluffy steamed bun.",
        facts: [
          "It opened in 2009 as a 20-seat shop in Mong Kok, founded by Mak Kwai Pui, a former dim sum chef at the Four Seasons' Lung King Heen.",
          "The original Mong Kok shop earned a Michelin star in 2010, which made it famous as one of the cheapest Michelin-starred meals anywhere.",
          "Its baked BBQ pork bun has a crunchy, sweet top instead of the usual fluffy steamed bun."
        ],
        order: [["Baked BBQ pork buns", "酥皮焗叉燒包"], ["Shrimp dumplings", "晶瑩鮮蝦餃"], ["Steamed sponge cake", "馬拉糕"]],
        eat: [
          "Explain char siu, because it's in half the things you'll eat this week. It's Cantonese barbecued pork, marinated in a sweet, savoury glaze and roasted until the edges go sticky and red. Char siu (叉燒) literally means 'fork roast', because it was roasted on long forks. Think of it as Hong Kong's barbecue, but sweeter.",
          "Baked pork bun: break one open on camera. Contrast the crackly, sweet top with the soft bread and the sticky char siu inside. Sweet outside, salty-sweet in the middle.",
          "Shrimp dumplings: hold one up to the light. The wrapper should be thin enough to see the pink prawn through it. Talk about the snap when you bite.",
          "Sponge cake (ma lai go): pull it apart to show the air pockets. Light, springy, with a brown-sugar flavour. A good one to finish on."
        ],
        go: "9–11 Fuk Wing Street, Sham Shui Po.",
        q: "Tim Ho Wan 9 Fuk Wing Street Sham Shui Po", ll: [22.3309, 114.1640] },
      { leg: 1, t: "10:45", mode: "Walk", text: "Tim Ho Wan → Tai Nan Street, about 10 min. Leave by 10:45." },
      { t: "11:00", fixed: "Booked 11:00", en: "Haircut at The Old Soul Barbershop", wiki: [], zh: "太子大南街148號地下A2", area: "Prince Edward / Sham Shui Po", kind: "sight",
        say: "Haircut time, squeezed in between dim sum and noodles. The Old Soul Barbershop, on a street that used to be full of leather factories. Medium-long, scissors only. Let's hope I come out looking like I meant it.",
        about: "A small men's barbershop on Tai Nan Street, on the border of Sham Shui Po and Prince Edward. It's rated 5.0 on Fresha from over 800 reviews and about 4.9 elsewhere, with people calling it friendly. The street is worth a line on camera: in Hong Kong's post-war factory boom it was lined with leather, fabric and accessory workshops, and it's still nicknamed 'Leather Street'. Open 11:00–20:00, seven days a week.",
        facts: [
          "Tai Nan Street is nicknamed 'Leather Street'. In Hong Kong's post-war manufacturing boom it was full of factories making leather, fabrics and accessories.",
          "Luen Cheong Leather, a few doors up at 173 Tai Nan Street, has been there since 1948."
        ],
        tip: "Booked for 11:00. If you're running late, call +852 9888 0597. Show your slicked-back photo, plus the glasses-man and side-part cuts on their own Google Maps page. Say: 1) Slicked back, classic and neat. 2) No fade, no clippers on the sides, scissors only. 3) Keep the top long enough to comb back, just trim the ends. 4) Take the bulk out of the sides with scissors (thick hair sticks out), but don't go short. 5) Back tidy and natural, not shaved, just above the collar. 6) Not too much thinning. Ask them to show how much they'll take off before they start.",
        go: "Shop A2, G/F, 148 Tai Nan Street, Prince Edward. About 10 min walk from Tim Ho Wan.",
        q: "The Old Soul Barbershop 148 Tai Nan Street Prince Edward", ll: [22.3262, 114.1660] },
      { leg: 1, t: "12:00", mode: "Walk", text: "Back towards Kweilin Street for cart noodles and Lau Sum Kee, about 10 min." },
      { t: "12:00", en: "Cart noodles", wiki: ["Cart noodle"], zh: "車仔麵", area: "Sham Shui Po", kind: "food",
        say: "Cart noodles. You pick the noodles, the toppings, the sauce, everything. Someone has handed me a tick-box menu and no supervision. This is going to get out of hand.",
        about: "Cart noodles started as cheap street food sold from push-carts in Hong Kong's poorer neighbourhoods. You pointed at the noodles and toppings you wanted and that was dinner. The carts have moved indoors now, but the idea hasn't changed: build your own bowl, cheap and fast, by ticking boxes on a menu.",
        facts: [
          "The name comes from the push-carts (車仔) the noodles were originally sold from.",
          "You choose everything: noodle type, toppings, soup or dry, and how much chilli."
        ],
        order: [["Thin egg noodles", "幼麵"], ["Curry fish balls", "咖喱魚蛋"], ["Pig skin", "豬皮"], ["Braised radish", "蘿蔔"]],
        eat: [
          "Before you eat, read your order back to the camera: noodle, toppings, soup or dry, spice level. Half the fun is the combination.",
          "Curry fish balls: fish paste beaten until it's bouncy, soaked in a mild, slightly sweet curry sauce. Describe the bounce when you bite.",
          "Pig skin and radish are the toppings people at home won't know. Pig skin is soft and gelatinous, and radish soaks up the broth like a sponge. Sell them on texture, not flavour."
        ],
        tip: "Only if there's room. There are several cart noodle shops around Sham Shui Po station.",
        go: "Any cart noodle shop near Sham Shui Po station.",
        q: "cart noodles Sham Shui Po", ll: [22.3305, 114.1625] },
      { t: "12:00", en: "Lau Sum Kee", wiki: ["Lau Sum Kee", "Wonton noodles"], zh: "劉森記麵家", area: "Sham Shui Po", kind: "food",
        say: "Lau Sum Kee. These noodles are made the old way: a cook sits on one end of a big bamboo pole and bounces on the dough, over and over. Almost nobody does it like this anymore, because it's brutal work. Third generation running the place, and they still haven't taken the shortcut.",
        about: "Explain the bounce: pressing the dough with body weight instead of a machine is what gives bamboo-pole noodles (竹昇麵) their springy, snappy bite. Then the bowl: the wontons go under the noodles, so the noodles sit above the soup and don't go soggy. Point that out when it arrives. If you go for the dry noodles with shrimp roe, the roe is the whole point.",
        facts: [
          "Bamboo-pole noodles are pressed by someone sitting on one end of a big bamboo pole and bouncing on the dough.",
          "It's a family business now run by the third generation, and it's known for dry noodles topped with shrimp roe.",
          "Wonton noodles are traditionally served with the wontons under the noodles so the noodles don't go soggy."
        ],
        order: [["Shrimp wonton noodles", "鮮蝦雲吞麵"], ["Dry noodles with shrimp roe", "蝦子撈麵"], ["Then: roast pork or char siu at a roast-meat shop", "燒肉 · 叉燒"]],
        eat: [
          "Noodles: lift a strand and let it spring. Describe the bite: firm, snappy, a little chewy, al dente all the way through.",
          "Dig under the noodles to find the wontons on camera. Thin wrapper, whole prawns inside, a clean snap.",
          "Shrimp roe noodles: shrimp roe is dried shrimp eggs, so tiny they look like sand scattered over the noodles. Think of it as seasoning from the sea: salty and savoury like dried shrimp, but finer. Mix it through before you film the first bite.",
          "Then roast pork at a nearby roast-meat shop: ask for a piece with crackling and let the mic hear it."
        ],
        go: "48 Kweilin Street, Sham Shui Po.",
        q: "Lau Sum Kee Noodle 48 Kweilin Street Sham Shui Po", ll: [22.3290, 114.1612] },
      { t: "12:45", en: "Apliu Street market", wiki: ["Apliu Street"], zh: "鴨寮街", area: "Sham Shui Po", kind: "sight",
        say: "Apliu Street. If you need a cable, a battery, an old film camera or a phone you forgot existed, it's here somewhere. It's a museum of everything you ever threw away.",
        about: "The name 鴨寮 means 'duck huts', after a village where people once raised ducks. It became a second-hand market in the 1930s and an electronics parts hub in the 1960s, when Hong Kong was making radios and gadgets for the world. Today it's a street-long flea market of phones, cables, batteries, tools and camera gear, with proper shops behind the stalls. The stalls are set up by around midday.",
        facts: [
          "The name 鴨寮 means 'duck huts', after a village where people once raised ducks.",
          "It became a second-hand market in the 1930s and an electronics parts hub in the 1960s."
        ],
        tip: "Good spot to grab a spare camera battery or SD card.",
        go: "Runs between Kweilin Street and Nam Cheong Street.",
        q: "Apliu Street Sham Shui Po", ll: [22.3299, 114.1638] },
      { leg: 1, t: "13:15", mode: "Walk", text: "South to Kam Wah Café on Bute Street, Prince Edward, about 15 min." },
      { t: "13:30", en: "Kam Wah Café", wiki: ["Kam Wah Cafe", "Pineapple bun"], zh: "金華冰廳", area: "Prince Edward", kind: "food",
        say: "Kam Wah Café, since 1973. This is bolo yau: a hot pineapple bun, split open, with a slab of cold butter jammed inside. There's no pineapple in it, and there's no shame either.",
        about: "A bing sutt, an 'ice room', is the old-school café that came before the cha chaan teng, and Kam Wah on Bute Street is one of the most famous. The pineapple bun is named after its sugar top, which cracks into a pattern like pineapple skin. Bolo yau, 'pineapple oil', is that bun split and stuffed with butter, and Kam Wah's slab is famously thick. This is not health food. Nobody here pretends it is.",
        facts: [
          "A pineapple bun has no pineapple in it. It's named after the crackly sugar top, which looks like pineapple skin.",
          "Bolo yau (菠蘿油) means 'pineapple oil': the bun split open with a slab of butter.",
          "Kam Wah opened in 1973, and its butter slab is famously thick."
        ],
        order: [["Pineapple bun with butter", "菠蘿油"], ["Egg tart", "蛋撻"], ["Iced milk tea", "凍奶茶"]],
        eat: [
          "Bolo yau: film the butter while it's still a cold block, then bite fast. Describe the three layers: crunchy sweet top, warm soft bun, cold salty butter starting to melt. Hot and cold in one bite.",
          "Egg tart: Hong Kong style, with smooth, shiny custard, eggy and not too sweet. Remember it, because you'll compare it with Macau's burnt-top tart on Wednesday.",
          "Iced milk tea: strong, a little bitter, creamy from evaporated milk. Say how it cuts through the butter."
        ],
        go: "47 Bute Street, Prince Edward.",
        q: "Kam Wah Cafe 47 Bute Street Prince Edward", ll: [22.3240, 114.1712] },
      { t: "14:00", en: "Flower Market & Goldfish Street", wiki: ["Yuen Po Street Bird Garden", "Prince Edward, Hong Kong"], zh: "花墟 · 金魚街", area: "Prince Edward / Mong Kok", kind: "sight",
        say: "Two minutes from the pineapple buns: a whole street of flowers, then a whole street of goldfish hanging in plastic bags. Mong Kok doesn't do a few shops. It does an entire street of one thing.",
        about: "Hong Kong likes to keep its trades together. Flower Market Road is florists and plant shops end to end, with Yuen Po Street Bird Garden at the east end. Walk south and the top of Tung Choi Street turns into Goldfish Street: shopfronts covered in fish in hanging plastic bags, plus aquariums and pet supplies. Goldfish are linked with good fortune in Chinese tradition, which explains a lot of living-room tanks.",
        facts: [
          "Yuen Po Street Bird Garden is at the east end of Flower Market Road.",
          "Goldfish Street is the northern stretch of Tung Choi Street, the same street as the Ladies' Market further south.",
          "Goldfish are linked with good fortune in Chinese tradition."
        ],
        go: "Flower Market Road, then walk south down Tung Choi Street.",
        q: "Flower Market Road Prince Edward", ll: [22.3253, 114.1722] },
      { t: "14:45", en: "Mong Kok: Ladies' Market & Sneaker Street", wiki: ["Ladies' Market", "Tung Choi Street"], zh: "女人街 · 波鞋街", area: "Mong Kok", kind: "food",
        say: "Mong Kok. Ladies' Market on one street, Sneaker Street on the next, and in between, the two snacks I've been waiting all day for: egg waffles and curry fish balls.",
        about: "Mong Kok is often called one of the most densely populated places on Earth, and on a Sunday afternoon you'll believe it. The Ladies' Market fills Tung Choi Street with clothes and souvenir stalls. One street east, Fa Yuen Street is nicknamed Sneaker Street for its run of sports shoe shops. But the snacks are the real reason I'm here: egg waffles, cooked in a special iron that makes the bubbles, and curry fish balls on a stick, about as Hong Kong as street food gets.",
        facts: [
          "Mong Kok is often described as one of the most densely populated places on Earth.",
          "Egg waffles (雞蛋仔) are cooked in a special iron that makes the bubble shape.",
          "Curry fish balls (咖喱魚蛋) are one of Hong Kong's most classic street snacks."
        ],
        order: [["Egg waffle", "雞蛋仔"], ["Curry fish balls", "咖喱魚蛋"]],
        eat: [
          "Egg waffle is gai daan jai (雞蛋仔), literally 'little chicken eggs', named for the egg-shaped bubbles. Think of it as a waffle crossed with bubble wrap. Tear off one bubble on camera: crisp shell, soft and almost hollow inside, eggy and sweet. Let the mic catch the tear.",
          "Curry fish balls (咖喱魚蛋): in Cantonese a fish ball is literally a 'fish egg'. It's fish paste beaten over and over until it turns bouncy, then rolled into balls. You know it's a good one when it springs back between your teeth. These are stewed in a mild, slightly sweet curry sauce. Eat them off the stick while walking, and talk about the crowd around you."
        ],
        go: "Tung Choi Street (Ladies' Market) and Fa Yuen Street.",
        q: "Ladies Market Tung Choi Street Mong Kok", ll: [22.3185, 114.1709] },
      { leg: 1, t: "15:45", mode: "MTR", text: "Mong Kok → Jordan, Tsuen Wan line towards Central, 2 stops." },
      { t: "16:00", en: "Rest at the Airbnb", wiki: ["Nathan Road"], zh: "休息", area: "Jordan", kind: "rest",
        say: "Quick break to charge the batteries, mine and the cameras'. Nobody tells you a food trip is an endurance sport.",
        facts: [],
        go: "Back to Nathan Road.",
        q: "328 Nathan Road Jordan Hong Kong", ll: [22.3058, 114.1714] },
      { leg: 1, t: "16:40", mode: "Walk", text: "West to the Art Park, about 20–25 min, or a short taxi." },
      { t: "17:00", fixed: "Sunset ~17:40", en: "West Kowloon Art Park", wiki: ["West Kowloon Cultural District", "M+"], zh: "西九藝術公園", area: "West Kowloon", kind: "sight",
        say: "Sunset at West Kowloon, looking straight across the harbour at Hong Kong Island. Not that long ago, where I'm standing was water.",
        about: "The whole West Kowloon Cultural District sits on reclaimed land, which is Hong Kong's answer to most problems. The Art Park's big lawn looks across Victoria Harbour to Central, and right next to it are M+, a museum of visual culture that opened in 2021, and the Hong Kong Palace Museum, which opened in 2022. Sunset is around 17:40. Watch the towers across the water turn gold, then light up.",
        facts: [
          "The whole cultural district is built on reclaimed land.",
          "M+, the big museum next to the park, opened in November 2021.",
          "The Hong Kong Palace Museum opened in 2022."
        ],
        go: "Enter from Austin Road West or from Kowloon Station.",
        q: "Art Park West Kowloon Cultural District", ll: [22.3015, 114.1575] },
      { leg: 1, t: "17:50", mode: "Walk", text: "Down Canton Road to the Star Ferry pier, 30–35 min." },
      { t: "18:30", en: "Star Ferry", wiki: ["Star Ferry"], zh: "天星小輪", area: "Tsim Sha Tsui ⇄ Central", kind: "sight",
        say: "The Star Ferry. It's been crossing this harbour since 1888, it costs next to nothing, and it gives you the best view in Hong Kong. Over to Central and straight back.",
        about: "In 1888 a Parsee merchant called Dorabjee Naorojee started a ferry across the harbour, and ten years later it was renamed the Star Ferry. Every boat's name has ended in 'Star' ever since the first two, Morning Star and Evening Star. The crossing takes about 10 minutes. Sit on the upper deck, face the island, and let the skyline do the talking.",
        facts: [
          "It was founded in 1888 by Dorabjee Naorojee, a Parsee merchant, as the Kowloon Ferry Company, and renamed Star Ferry in 1898.",
          "Every ferry's name ends in 'Star', going back to the first boats, Morning Star and Evening Star."
        ],
        tip: "Tap Octopus or a contactless card. Sit on the upper deck. Optional: the WinterFest light show on Statue Square in Central runs every 30 min from 19:00, about 10 min walk from the Central pier.",
        go: "Tsim Sha Tsui Star Ferry Pier, by the Clock Tower.",
        q: "Star Ferry Pier Tsim Sha Tsui", ll: [22.2938, 114.1686] },
      { leg: 1, t: "19:40", mode: "Walk", text: "Back at the Tsim Sha Tsui pier: the light show is right next door at the Cultural Centre." },
      { t: "20:00", en: "WinterFest light show & Avenue of Stars", wiki: ["Hong Kong Cultural Centre", "Avenue of Stars, Hong Kong"], zh: "香港繽紛冬日節 · 星光大道", area: "Tsim Sha Tsui", kind: "sight",
        say: "The harbour at night. The old Symphony of Lights finished just last week after more than twenty years, so tonight it's the new winter light show here in Tsim Sha Tsui.",
        about: "For WinterFest (18 Nov 2026 – 5 Jan 2027), the Clock Tower, Cultural Centre, Museum of Art and Space Museum on the Tsim Sha Tsui waterfront become screens for free nightly projection shows. Afterwards, walk east along the Avenue of Stars, the promenade that celebrates Hong Kong film, with Bruce Lee in bronze and the whole skyline across the water.",
        facts: [
          "A Symphony of Lights, the nightly harbour light show that ran since 2004, had its final show on 18 November 2026.",
          "Guinness World Records listed it as the world's largest permanent light and sound show.",
          "There's a statue of Bruce Lee on the Avenue of Stars."
        ],
        tip: "Check show times on the Hong Kong Tourism Board site. Best view: the promenade in front of the Cultural Centre.",
        go: "Tsim Sha Tsui waterfront, by the Clock Tower and Cultural Centre.",
        q: "Hong Kong Cultural Centre Tsim Sha Tsui", ll: [22.2937, 114.1702] },
      { leg: 1, t: "20:25", mode: "MTR", text: "Tsim Sha Tsui → Jordan, 1 stop, or walk 15 min up Nathan Road." },
      { t: "20:45", fixed: "Opens 18:00", en: "Four Seasons Pot Rice, Yee Shun & Temple Street", wiki: ["Claypot rice", "Double skin milk"], zh: "四季煲仔飯 · 義順牛奶公司", area: "Yau Ma Tei / Jordan", kind: "food",
        say: "Dinner is clay-pot rice at Four Seasons. There's always a queue, and the queue is for the bottom of the pot: the crispy, slightly scorched rice crust you scrape off yourself.",
        about: "Bo zai fan is rice cooked to order in the clay pot it's served in, with toppings like Chinese sausage or chicken steaming on top. Because the pot sits right on the flame, the bottom layer turns into a crisp crust called fan jiu (飯焦). It's a winter dish, so this time of year the queues are at their longest. Afterwards, walk to Yee Shun for double-skin milk, a steamed milk pudding from Shunde in Guangdong named for the two skins that form on top, then wander back through Temple Street.",
        facts: [
          "Clay-pot rice is cooked in the pot it's served in, so the bottom forms a crispy rice crust (飯焦).",
          "Double-skin milk (雙皮奶) comes from Daliang in Shunde, Guangdong, and is named for the two skins that form on top.",
          "Clay-pot rice is a winter favourite, so queues are longest in the cold months."
        ],
        order: [["Chinese sausage clay-pot rice", "臘味煲仔飯"], ["Chicken clay-pot rice", "滑雞煲仔飯"], ["Double-skin milk", "雙皮奶"], ["Ginger milk curd", "薑汁撞奶"]],
        eat: [
          "Do the ritual on camera: pour the soy sauce in around the edge, put the lid back on for a minute, and listen for the sizzle.",
          "Then scrape. Show the crust coming off the bottom and describe it: crunchy, toasty, a bit smoky, soaked in sweet soy. It's the best part and everyone knows it.",
          "Chinese sausage is lap cheong (臘腸): cured pork sausage, air-dried until it's firm, and seasoned sweet rather than salty, usually with a splash of rice wine. Think of it as China's salami, but sweet. As it steams on top of the rice, the fat melts down, and that's why every grain underneath tastes of it.",
          "Ginger milk curd (薑汁撞奶) translates as 'ginger juice hits milk', and that's the whole recipe: hot milk poured onto fresh ginger juice. Something in the ginger sets the milk in minutes, with no gelatine and no eggs. Think of it as a ginger panna cotta that sets itself. Tap it with the spoon to show it holds. Silky and sweet, with a ginger burn at the back of your throat.",
          "Double-skin milk: tap the skin with your spoon before you break it. Smooth, silky, milky and gently sweet."
        ],
        tip: "Opens 18:00. Expect a 30–45 min queue. Pour the soy sauce in, close the lid for a minute, then scrape the crispy bottom.",
        go: "46–58 Arthur Street, Yau Ma Tei. Yee Shun is on Nathan Road nearby.",
        q: "Four Seasons Pot Rice Arthur Street Yau Ma Tei", ll: [22.3078, 114.1708] }
    ]
  },
  {
    id: "mon", date: "2026-11-30", dow: "Mon", dom: "30", color: "#0075c2", line: "Island blue",
    title: "Island day: Dragon's Back to the Peak",
    route: "Dragon's Back → North Point → Central → the Peak",
    intro: "Early start, and a big one. Today I cross to Hong Kong Island: a ridge walk above the South China Sea that ends at a surf beach, a tram that drives straight through a wet market, and then a food crawl through Central. Sunset from the Peak to finish. Legs first, stomach second.",
    items: [
      { t: "07:15", en: "Congee with youtiao", wiki: ["Congee", "Youtiao"], zh: "粥 · 油炸鬼", area: "Jordan", kind: "food",
        say: "Proper Hong Kong breakfast: a big bowl of hot congee, and a fried dough stick to dunk in it. In Cantonese the dough stick is called 'oil-fried devil'. Breakfast of champions.",
        about: "Congee is rice simmered in a lot of water for a long time, until the grains break down into a smooth, thick porridge. It's what Cantonese families eat for breakfast, when they're sick, and when it's cold. The fried dough stick, youtiao, is called yau ja gwai here: 'oil-fried devil'. Rip it up and dunk it, or have it wrapped in a rice roll, which is called ja leung.",
        facts: [
          "In Cantonese, youtiao is called yau ja gwai (油炸鬼), 'oil-fried devil'.",
          "Century egg and lean pork (皮蛋瘦肉粥) is one of the most popular congee orders."
        ],
        order: [["Century egg and pork congee", "皮蛋瘦肉粥"], ["Fried dough stick", "油炸鬼"], ["Rice roll with fried dough", "炸兩"]],
        eat: [
          "Stir the congee and lift the spoon for the camera: smooth and silky, no grains left. Explain that's from hours of simmering.",
          "Century egg: show the dark, jelly-like white and the creamy grey-green yolk. Be honest: rich and a bit funky, like a strong cheese. It's preserved for weeks, not a century.",
          "Dunk the dough stick and talk about the change: crunchy and airy when it's dry, soft and soaked once it's been in the congee."
        ],
        go: "Any congee shop near Jordan station.",
        q: "congee Jordan Hong Kong", ll: [22.3050, 114.1713] },
      { leg: 1, t: "07:45", mode: "MTR", text: "Jordan → Admiralty (Tsuen Wan line), change to Island line → Shau Kei Wan, exit A3." },
      { leg: 1, t: "08:20", mode: "Bus", text: "Bus 9 from Shau Kei Wan bus terminus to To Tei Wan, about 20 min. The driver will stop if you press the bell." },
      { t: "08:45", en: "Dragon's Back hike", wiki: ["Dragon's Back"], zh: "龍脊", area: "Shek O", kind: "sight",
        say: "This is Dragon's Back, a ridge that goes up and down like the spine of a dragon. The South China Sea below, and it ends at a surf beach. Not a bad Monday.",
        about: "Most people picture Hong Kong as all towers, but a huge share of it is hills and country park. Dragon's Back is part of stage 8 of the Hong Kong Trail: a ridge walk along the Shek O peninsula with sea views, then down through the woods to Big Wave Bay. Allow 2–3 hours. There's not much shade on the ridge, so bring water and sunscreen.",
        facts: [
          "The trail is part of stage 8 of the Hong Kong Trail.",
          "It's named for the ridge's up-and-down shape, like the spine of a dragon.",
          "Big Wave Bay has a prehistoric rock carving, a declared monument, found in 1970 by a police officer."
        ],
        tip: "Water, sunscreen, phone charged. The trail ends at Big Wave Bay beach.",
        go: "Trailhead at the To Tei Wan bus stop on Shek O Road.",
        q: "Dragon's Back To Tei Wan trailhead", ll: [22.2437, 114.2366] },
      { leg: 1, t: "11:30", mode: "Minibus", text: "Red minibus Big Wave Bay → Shau Kei Wan, about 20 min. Leaves when full; take a taxi if the wait is long." },
      { leg: 1, t: "12:00", mode: "Tram", text: "Ding Ding tram west from Shau Kei Wan to Quarry Bay, about 20 min. Board at the back, tap out at the front." },
      { t: "12:20", en: "Monster Building", wiki: ["Monster Building"], zh: "怪獸大廈", area: "Quarry Bay", kind: "sight",
        say: "The Monster Building in Quarry Bay. More than two thousand homes in one wall of windows, air conditioners and laundry. Photos don't prepare you for it. And remember, people live here, so voices down.",
        about: "It's actually five connected blocks from the 1960s, Montane, Oceanic, Fok Cheong, Yick Cheong and Yick Fat, wrapped around a courtyard. It shows what this city does with too little land: it builds up, and then it builds in. It's been in films, including Transformers: Age of Extinction. But it's still people's homes, so keep it quiet and follow the signs about filming.",
        facts: [
          "It's actually five buildings: Montane, Oceanic, Fok Cheong, Yick Cheong and Yick Fat.",
          "It was built in the 1960s and holds over 2,000 flats.",
          "It appeared in the film Transformers: Age of Extinction (2014)."
        ],
        tip: "Residential: keep your voice down and follow the signs.",
        go: "King's Road, Quarry Bay. Short walk from the tram stop or Tai Koo station.",
        q: "Monster Building Yick Cheong Building Quarry Bay", ll: [22.2857, 114.2128] },
      { leg: 1, t: "12:45", mode: "Tram", text: "Tram west to North Point, about 10 min. The tram turns into Chun Yeung Street." },
      { t: "12:45", en: "Chun Yeung Street market", wiki: ["Chun Yeung Street", "North Point"], zh: "春秧街", area: "North Point", kind: "sight",
        say: "Chun Yeung Street. It's a wet market, and the tram drives right through the middle of it. People step aside, the tram rings past, and they go back to buying fish.",
        about: "Fruit, vegetable, meat and seafood stalls line both sides, and the tram rings its way through: one of the few places the trams leave the main road. The street is named after Kwok Chun Yeung, a businessman from Fujian who developed the area in the 1920s. So many Shanghainese families arrived in the 1940s that North Point was nicknamed 'Little Shanghai'. Later it became 'Little Fujian'.",
        facts: [
          "Trams run through the market itself, one of the few places they leave the main road.",
          "The street is named after Kwok Chun Yeung, a businessman from Fujian who developed the area in the 1920s.",
          "North Point was nicknamed 'Little Shanghai' after many Shanghainese families arrived in the 1940s, and later 'Little Fujian'."
        ],
        go: "Off King's Road, North Point.",
        q: "Chun Yeung Street North Point", ll: [22.2916, 114.1988] },
      { leg: 1, t: "13:15", mode: "MTR", text: "North Point → Central, Island line, about 12 min." },
      { t: "13:40", en: "Kau Kee", wiki: ["Kau Kee Restaurant"], zh: "九記牛腩", area: "Central", kind: "food",
        say: "First stop on the Central food crawl: Kau Kee, beef brisket since the 1930s. There's a queue, there's always a queue, and there's a reason for the queue.",
        about: "Gough Street used to be full of printing presses and old brisket shops. Kau Kee is the one that survived and got famous. It does two things: brisket in clear broth, and curry brisket. The room is small, turnover is fast, and nobody is going to wait while you decide. Queue, sit, order, eat.",
        facts: [
          "It has been trading since the 1930s and is listed with a Michelin Bib Gourmand.",
          "It's famous for two styles: brisket in clear broth and curry brisket.",
          "Gough Street was once full of printing presses and old beef brisket shops. Kau Kee is the famous survivor."
        ],
        order: [["Beef brisket noodles, clear broth", "上湯牛腩麵"], ["Curry beef brisket with e-fu noodles", "咖喱牛筋腩伊麵"]],
        eat: [
          "Clear broth first: taste the soup on its own. Deep and beefy but clean, not greasy. Say your first reaction before you add anything.",
          "Brisket: press a piece with your chopsticks to show how tender it is. Describe the layers: soft meat, melting fat, maybe a sticky strip of tendon.",
          "Curry brisket is a different animal: rich, a little sweet, more fragrant than spicy. E-fu noodles are springy fried egg noodles that soak up the sauce.",
          "If you get both, compare them side by side and pick one. Have an opinion."
        ],
        go: "21 Gough Street, Central.",
        q: "Kau Kee Restaurant 21 Gough Street Central", ll: [22.2841, 114.1523] },
      { t: "14:10", en: "Yat Lok", wiki: ["Yat Lok", "Siu mei"], zh: "一樂燒鵝", area: "Central", kind: "food",
        say: "Yat Lok: trading since 1957, one Michelin star, and everyone is here for the same thing, the goose. Look at that skin. That isn't luck, it's patience. The goose gets dried before it ever goes near the fire.",
        about: "Roast goose is Cantonese roast meat taken seriously. Drying the skin first is the whole trick: no moisture means it shatters instead of going chewy. Order the leg if they have it. It's the juiciest part, and it comes over rice noodles that soak up the drippings. Expect to share a table.",
        facts: [
          "Yat Lok has been trading since 1957 and holds a Michelin star.",
          "Roast goose is a Cantonese speciality; the skin is dried before roasting to make it crisp."
        ],
        order: [["Roast goose leg with rice noodles", "燒鵝髀瀨粉"], ["Roast goose on rice", "燒鵝飯"]],
        eat: [
          "Before you eat, get the camera close on the skin: glossy, dark amber, lacquered. That's what the drying gets you.",
          "Bite the skin first and let the mic hear the crunch. Then the fat underneath: soft, melting, rich.",
          "Rice noodles (lai fun): thick, round and slippery. Explain they're there to soak up the goose juices."
        ],
        go: "34–38 Stanley Street, Central.",
        q: "Yat Lok Restaurant 34 Stanley Street Central", ll: [22.2817, 114.1558] },
      { t: "14:30", en: "Ser Wong Fun", wiki: ["Ser Wong Fun", "Snake soup"], zh: "蛇王芬", area: "Central", kind: "food",
        say: "Okay, I'm doing it. Snake soup at Ser Wong Fun, a business that goes back to 1895. In Cantonese tradition this is a winter dish to warm you up. It's winter. No excuses.",
        about: "The business started in Guangdong in 1895, moved to Hong Kong in 1940, and has been on Cochrane Street since 1989. Snake soup is a thick soup of shredded snake meat, mushrooms and herbs, eaten in the colder months because it's thought to warm the body. It comes with crispy crackers and fine shreds of lemon leaf to scatter on top. It sounds scarier than it is.",
        facts: [
          "The business dates back to 1895 in Guangdong. It moved to Hong Kong in 1940 and to Cochrane Street in 1989.",
          "In Cantonese tradition snake soup is a winter dish, thought to warm the body.",
          "It's usually topped with crispy crackers and lemon leaf shreds."
        ],
        order: [["Snake soup", "蛇羹"], ["Chinese sausage clay-pot rice (if still hungry)", "臘味飯"]],
        eat: [
          "Film the toppings going on: crispy crackers and lemon leaf shreds. Mention the citrusy smell the moment the leaf hits the hot soup.",
          "Describe the texture: thick and silky, with fine shreds of meat. The snake itself is mild. Lots of people say chicken, but say what it's actually like to you.",
          "After a few spoons, say how it feels: warming from the inside, which is the whole point in winter."
        ],
        go: "30 Cochrane Street, Central.",
        q: "Ser Wong Fun 30 Cochrane Street Central", ll: [22.2826, 114.1546] },
      { t: "14:50", en: "Lan Fong Yuen", wiki: ["Lan Fong Yuen", "Hong Kong–style milk tea"], zh: "蘭芳園", area: "Central", kind: "food",
        say: "Milk tea at Lan Fong Yuen, which says it invented silk-stocking milk tea back in 1952. The 'stocking' is really a long cotton filter bag. Disappointing, but probably for the best.",
        about: "Lan Fong Yuen started as a dai pai dong, a licensed open-air food stall, on Gage Street in the early 1950s. Its claim to fame is 'silk-stocking' milk tea: strong black tea strained through a long cotton bag that turns brown with use and looks like a stocking. The creamy body comes from evaporated milk. The pork chop bun is the other reason people queue.",
        facts: [
          "It claims to have invented 'silk-stocking' milk tea in 1952. The 'stocking' is really a long cotton filter bag.",
          "Hong Kong milk tea is made with evaporated milk, which gives it its creamy texture."
        ],
        order: [["Milk tea", "奶茶"], ["Pork chop bun", "豬扒包"]],
        eat: [
          "Milk tea: show the colour first, a deep tan. Then taste: strong, slightly bitter tea with a smooth, creamy, almost silky body. Say if it's stronger than you expected.",
          "Pork chop bun: crusty bun, thin fried chop, no fuss. Describe the bite: crunchy outside, juicy meat. It's simple, and that's why it works."
        ],
        go: "2 Gage Street, Central.",
        q: "Lan Fong Yuen 2 Gage Street Central", ll: [22.2830, 114.1543] },
      { t: "15:05", en: "Tai Cheong Bakery", wiki: ["Tai Cheong Bakery", "Egg tart"], zh: "泰昌餅家", area: "Central", kind: "food",
        say: "Last stop on the crawl: Tai Cheong Bakery, since 1954. Hong Kong's last British governor, Chris Patten, loved these egg tarts so much they got nicknamed 'Fat Patten' egg tarts. Good for him.",
        about: "Tai Cheong opened in 1954, and its egg tarts are the ones people bring up when you ask about Hong Kong egg tarts. Chris Patten, the last governor, was such a regular fan that they got the nickname 肥彭蛋撻, 'Fat Patten egg tarts'. The Hong Kong style has a smooth, shiny custard: a completely different animal from the burnt-top Portuguese tart you'll eat in Macau on Wednesday.",
        facts: [
          "Tai Cheong opened in 1954.",
          "Chris Patten, Hong Kong's last governor, was such a fan that the tarts got the nickname 'Fat Patten egg tarts' (肥彭蛋撻).",
          "Hong Kong egg tarts have a smooth, shiny custard, unlike the burnt-top Portuguese style you'll eat in Macau."
        ],
        order: [["Egg tart", "蛋撻"]],
        eat: [
          "Hold one up: shiny yellow custard, smooth as glass, no burnt spots. That's the Hong Kong style.",
          "Bite and describe the pastry: buttery and short, more crumbly than flaky. Then the custard: soft, eggy, gently sweet, best while it's warm.",
          "Save a line for Wednesday: this is the one you'll compare with Lord Stow's in Macau."
        ],
        go: "35 Lyndhurst Terrace, Central.",
        q: "Tai Cheong Bakery 35 Lyndhurst Terrace Central", ll: [22.2823, 114.1535] },
      { t: "15:15", en: "Mid-Levels Escalator & Man Mo Temple", wiki: ["Man Mo Temple (Hong Kong)", "Central–Mid-Levels escalator"], zh: "中環至半山自動扶梯 · 文武廟", area: "Central / Sheung Wan", kind: "sight",
        say: "One of the world's longest outdoor escalators, straight up the hill through SoHo. Then Man Mo Temple, where giant coils of incense hang from the ceiling and burn slowly over your head.",
        about: "The Central–Mid-Levels escalator is about 800 m of covered escalators and walkways, built for commuters on one of the steepest hillsides in the city. It runs downhill in the morning rush, until about 10am, and uphill the rest of the day. On Hollywood Road, Man Mo Temple, built in 1847, honours two gods: Man, the god of literature, and Mo, the god of war. Look up when you walk in: the incense coils hang from the ceiling, and the smoke catches the light.",
        facts: [
          "The escalator system is about 800 m long, and is often called the world's longest outdoor covered escalator.",
          "It runs downhill in the morning rush (until about 10am) and uphill the rest of the day.",
          "Man Mo Temple was built in 1847 and was declared a monument in 2010."
        ],
        go: "Escalator starts at Queen's Road Central. Man Mo Temple: 124–126 Hollywood Road.",
        q: "Man Mo Temple 124 Hollywood Road", ll: [22.2840, 114.1502] },
      { leg: 1, t: "16:00", mode: "Walk", text: "To the Peak Tram lower terminus on Garden Road, about 15 min, or a short taxi." },
      { t: "16:15", fixed: "Booked 16:15", en: "Peak Tram", wiki: ["Peak Tram"], zh: "山頂纜車", area: "Central → The Peak", kind: "sight",
        say: "The Peak Tram, running since 1888, Asia's first funicular. It's so steep the skyscrapers outside look like they're leaning over. They're not. It's your brain.",
        about: "It opened in May 1888 to carry people up to Victoria Peak. On the way up, the slope makes the towers outside look like they're tilting. A University of Hong Kong study linked the illusion to the angle of the slope and the way riders lean back in their seats. Sit on the right going up for the best view.",
        facts: [
          "It opened in May 1888 and was Asia's first funicular railway.",
          "The 'leaning buildings' are an illusion: a University of Hong Kong study linked it to the slope and the way riders lean back in their seats."
        ],
        tip: "Pre-booked. Sit on the right side going up for the best view.",
        go: "Peak Tram Garden Road Terminus.",
        q: "Peak Tram Garden Road Terminus", ll: [22.2780, 114.1594] },
      { t: "16:45", fixed: "Sunset ~17:40", en: "Lugard Road lookout", wiki: ["Lugard Road", "Victoria Peak"], zh: "盧吉道", area: "The Peak", kind: "sight",
        say: "This is it: the view from Lugard Road. The whole harbour below me. Give it till sunset, and the city switches itself on.",
        about: "A flat, mostly shaded path that circles Victoria Peak, with one of the best views of the skyline and the harbour. It's named after Sir Frederick Lugard, governor from 1907 to 1912. Sunset is around 17:40. Film the light going, then stay for the moment the towers light up.",
        facts: [
          "It's named after Sir Frederick Lugard, Governor of Hong Kong from 1907 to 1912.",
          "Lugard was the driving force behind founding the University of Hong Kong in 1911."
        ],
        go: "Starts behind the Peak Tower; the lookout is about 15 min along the path.",
        q: "Lugard Road Lookout The Peak", ll: [22.2783, 114.1450] },
      { leg: 1, t: "18:30", mode: "Bus", text: "Bus 15 from The Peak towards Wan Chai, skipping the tram queue. Upper deck front for the view." },
      { t: "19:30", en: "Under Bridge Spicy Crab", wiki: ["Under Bridge Spicy Crab", "Causeway Bay Typhoon Shelter"], zh: "橋底辣蟹", area: "Wan Chai / Causeway Bay", kind: "food",
        say: "Typhoon shelter crab: a whole crab buried under a mountain of fried garlic and chilli. This style comes from the boat people of Causeway Bay. It's going to be messy, and I'm going to enjoy it.",
        about: "Families once lived on boats in Causeway Bay's typhoon shelter, and they cooked on them too. Their style of fried crab, smothered in crispy garlic, chilli and black beans, is what this restaurant made famous. It started as a stall under the Canal Road flyover, hence 'Under Bridge'. You choose your spice level. Choose carefully.",
        facts: [
          "Typhoon shelter crab comes from the boat people who lived in Causeway Bay's typhoon shelter.",
          "The restaurant started as a stall under the Canal Road flyover, hence 'Under Bridge'."
        ],
        order: [["Typhoon shelter crab", "避風塘炒蟹"], ["Mild or very spicy", "小辣 · 大辣"]],
        eat: [
          "Before cracking anything, film the pile: golden fried garlic burying the crab. Describe the smell first, toasted garlic and chilli.",
          "Crack a claw on camera. Describe the meat: sweet and firm, with garlic crumbs sticking to it.",
          "Eat a spoonful of the garlic on its own: crunchy, salty, a bit spicy. Plenty of people say it's the best part. Do you agree?",
          "Talk about the mess. Use your hands. That's how it's eaten."
        ],
        go: "Lockhart Road, near Canal Road flyover. Causeway Bay MTR is a few minutes away.",
        q: "Under Bridge Spicy Crab Lockhart Road Wan Chai", ll: [22.2796, 114.1817] },
      { leg: 1, t: "21:00", mode: "MTR", text: "Causeway Bay → Admiralty (Island line), change to Tsuen Wan line → Jordan." }
    ]
  },
  {
    id: "tue", date: "2026-12-01", dow: "Tue", dom: "1", color: "#e2721b", line: "Tung Chung orange",
    title: "Lantau: Big Buddha & Tai O",
    route: "Tung Chung → Ngong Ping → Tai O → Lei Yue Mun",
    intro: "Today I'm heading west to Lantau, Hong Kong's biggest island, and it's a different Hong Kong out here. A cable car over the mountains to a giant bronze Buddha, lunch at the monastery, then a fishing village where the houses stand on stilts over the water. Tonight, seafood I pick out of the tank myself.",
    items: [
      { t: "08:00", en: "Slow breakfast in Jordan", wiki: ["Hong Kong-style French toast", "Cha chaan teng"], zh: "佐敦早餐", area: "Jordan", kind: "food",
        say: "Slow start today. One more cha chaan teng breakfast in Jordan before a long day out on Lantau. I'm loading up.",
        about: "Any cha chaan teng near the station will do. Two things you haven't had yet: Hong Kong French toast, thick bread usually sandwiched with peanut butter, fried and served with butter and syrup; and satay beef noodles, a cha chaan teng classic that makes no sense on paper and total sense in the bowl.",
        facts: [],
        tip: "Any cha chaan teng nearby: try a satay beef noodle (沙爹牛肉麵) or French toast (西多士).",
        order: [["Hong Kong French toast", "西多士"], ["Satay beef noodles", "沙爹牛肉麵"], ["Lemon tea", "檸檬茶"]],
        eat: [
          "French toast: cut it open so the camera sees the middle. Crisp, eggy outside, soft inside, butter melting into syrup. Admit it's ridiculous.",
          "Satay beef noodles: thin, tender beef in a nutty, slightly sweet satay sauce. The noodles are often instant noodles. That's normal here, nobody's cutting corners.",
          "Lemon tea: mash the lemon slices with your spoon and explain why: that's how you get the flavour out."
        ],
        go: "Around Jordan station.",
        q: "cha chaan teng Jordan Hong Kong", ll: [22.3049, 114.1712] },
      { leg: 1, t: "09:00", mode: "Walk", text: "To Kowloon Station, about 15 min." },
      { leg: 1, t: "09:15", mode: "MTR", text: "Kowloon → Tung Chung, Tung Chung line, about 25 min. Exit B to the cable car." },
      { t: "10:00", fixed: "Opens 10:00", en: "Ngong Ping 360", wiki: ["Ngong Ping 360"], zh: "昂坪360", area: "Tung Chung → Ngong Ping", kind: "sight",
        say: "First cable car of the day, up over the mountains of Lantau. Nearly six kilometres of this. And the Big Buddha should appear any minute.",
        about: "The ride is about 5.7 km and takes around 25 minutes. It crosses the bay and climbs over the hills, with the airport laid out behind you on its man-made island. The crystal cabins have glass floors, which is either the best or the worst idea, depending on how you feel about heights. Opens 10:00 on weekdays.",
        facts: [
          "The ride is about 5.7 km long and takes around 25 minutes.",
          "Crystal cabins have glass floors."
        ],
        tip: "Buy a ONE-WAY ticket (Tung Chung → Ngong Ping) online a day or two ahead, on the official webstore (webstore.np360.com.hk) or Klook. You come back down by bus via Tai O, so don't buy a return. Crystal cabin (glass floor) is worth it for footage. Check np360.com.hk the night before: it stops in strong wind. Backup if it's closed: bus 23 from Tung Chung to Ngong Ping.",
        go: "Tung Chung cable car terminal, next to Tung Chung station exit B.",
        q: "Ngong Ping 360 Tung Chung Cable Car Terminal", ll: [22.2894, 113.9425] },
      { t: "10:30", en: "Big Buddha, Po Lin & Wisdom Path", wiki: ["Tian Tan Buddha", "The Big Buddha (Hong Kong)"], zh: "天壇大佛 · 寶蓮禪寺 · 心經簡林", area: "Ngong Ping", kind: "sight",
        say: "This is the Big Buddha: 34 metres of bronze sitting on a mountaintop. And 268 steps to get up to him, so if I'm out of breath, that's why.",
        about: "The Tian Tan Buddha was completed in December 1993 and faces Po Lin Monastery below. The statue is modern, but the monastery has been here since 1906. A short walk away, the Wisdom Path is a row of 38 tall wooden pillars carved with the Heart Sutra, in the calligraphy of the scholar Jao Tsung-I.",
        facts: [
          "The Big Buddha was completed in December 1993 and is 34 m tall.",
          "There are 268 steps up to the statue.",
          "The Wisdom Path has 38 wooden pillars carved with the Heart Sutra in calligraphy by the scholar Jao Tsung-I."
        ],
        tip: "The Wisdom Path has been under refurbishment, due to finish in late 2026. If it's still closed, there's a viewing platform on the Lantau Trail nearby.",
        go: "Short walk from the Ngong Ping cable car station.",
        q: "Tian Tan Buddha Ngong Ping", ll: [22.2540, 113.9050] },
      { t: "12:15", en: "Vegetarian lunch at Po Lin", wiki: ["Po Lin Monastery"], zh: "寶蓮禪寺齋堂", area: "Ngong Ping", kind: "food",
        say: "Lunch at the monastery. It's all vegetarian, and after two days of goose, crab and brisket, my body is quietly saying thank you.",
        about: "Po Lin was founded in 1906 by three monks and was first known as 'The Big Hut'; it took the name Po Lin in 1924. The dining hall serves vegetarian set meals, cooked the Buddhist way, with tofu, wheat gluten and mushrooms doing the jobs meat usually does. With no meat to lean on, it's all technique.",
        facts: [
          "Po Lin was founded in 1906 by three monks and was first known as 'The Big Hut'. It took the name Po Lin in 1924.",
          "Buddhist monastery food in Hong Kong is fully vegetarian, often with tofu, gluten and mushrooms standing in for meat."
        ],
        order: [["Vegetarian set meal", "齋菜套餐"]],
        eat: [
          "Go dish by dish and guess what each one is standing in for. Tofu and gluten are often shaped and cooked to play the part of meat. Describe the texture: chewy, springy, meaty.",
          "Mushrooms: talk about how savoury they are. That's where the depth comes from when there's no meat.",
          "Say how you feel afterwards, compared with a week of roast meat."
        ],
        go: "Inside Po Lin Monastery grounds.",
        q: "Po Lin Monastery vegetarian restaurant", ll: [22.2557, 113.9077] },
      { leg: 1, t: "13:15", mode: "Bus", text: "Bus 21 Ngong Ping → Tai O, about 20 min. Runs infrequently: check the timetable at the stop." },
      { t: "13:45", en: "Tai O fishing village", wiki: ["Tai O"], zh: "大澳", area: "Lantau", kind: "food",
        say: "Tai O. Houses on stilts over the water, dried seafood everywhere, and the whole village smells of grilled squid and shrimp paste. This is the Hong Kong from before the skyscrapers.",
        about: "The stilt houses belong to the Tanka, Hong Kong's traditional boat-dwelling fishing people, who built their homes over the tidal creek. Tai O is famous for its shrimp paste and salted fish, both made by salting the catch and drying it in the sun. Short boat trips leave from here to look for Chinese white dolphins, which are often pink, though sightings are getting rarer.",
        facts: [
          "The stilt houses (棚屋) belong to the Tanka, Hong Kong's traditional boat-dwelling fishing community.",
          "Tai O is famous for its shrimp paste and salted fish.",
          "Short boat trips from Tai O go looking for Chinese white dolphins (often pink), though sightings are getting rarer."
        ],
        order: [["Grilled squid", "燒魷魚"], ["Shrimp paste", "蝦醬"], ["Egg waffle", "雞蛋仔"]],
        eat: [
          "Shrimp paste: smell it first, on camera, and be honest. Pungent and fishy. Then taste: deeply salty and savoury, like the sea concentrated. A little goes a long way.",
          "Grilled squid: chewy, smoky, charred at the edges. Describe the chew.",
          "Point the camera at the seafood drying in the sun while you eat, and tell people this is how food has been made here for generations.",
          "Egg waffle by the water: compare it with the one from Mong Kok."
        ],
        go: "Walk from the Tai O bus terminus into the village.",
        q: "Tai O Fishing Village", ll: [22.2537, 113.8620] },
      { leg: 1, t: "16:15", mode: "Bus", text: "Bus 11 Tai O → Tung Chung, about 45 min." },
      { leg: 1, t: "17:05", mode: "MTR", text: "Tung Chung → Kowloon, Tung Chung line. Back to the Airbnb to rest." },
      { leg: 1, t: "18:30", mode: "MTR", text: "Jordan → Yau Ma Tei, change to Kwun Tong line → Yau Tong. Walk about 15 min to the village." },
      { t: "19:00", en: "Lei Yue Mun seafood village", wiki: ["Lei Yue Mun"], zh: "鯉魚門", area: "Yau Tong", kind: "food",
        say: "Lei Yue Mun. You pick your seafood live from the tanks, agree the price, and a restaurant cooks it for you. It's dinner and a negotiation.",
        about: "Lei Yue Mun is usually translated as 'carp gate', after the narrow channel at the east end of Victoria Harbour. The village on its edge is lined with seafood tanks and restaurants. The system: pick live seafood at a fishmonger, agree the price per catty, then hand it to a restaurant, which charges a fee to cook it. At the edge of the village, a small lighthouse on a rock has guided ships through the channel for over 50 years.",
        facts: [
          "Lei Yue Mun is usually translated as 'carp gate'. The name belongs to the narrow channel at the east end of Victoria Harbour.",
          "A small lighthouse on a rock at the edge of the village has guided ships through the channel for over 50 years."
        ],
        order: [["Steamed fish with ginger and spring onion", "清蒸魚"], ["Salt and pepper mantis shrimp", "椒鹽瀨尿蝦"], ["Garlic steamed scallops", "蒜蓉蒸扇貝"]],
        eat: [
          "Film the choosing: the tanks, the net, the weighing. Seafood here is priced per catty (斤, gan), an old Chinese weight of about 600 g, so 'per catty' means roughly per 600 grams. Explain that, then say the price you agreed out loud.",
          "Steamed fish: explain it's the Cantonese test of freshness. Ginger, spring onion, soy, hot oil, nothing to hide behind. The flesh should be soft and slide off the bone.",
          "Mantis shrimp isn't actually a shrimp. It's its own kind of crustacean, famous for one of the fastest, hardest punches in the animal kingdom: big ones can crack aquarium glass. The Cantonese name, 瀨尿蝦, is ruder. It means 'pee shrimp', because it squirts water when you pick it up. Show how big it is, then describe the crunchy salt-and-pepper coating and the sweet, soft meat inside.",
          "Scallops: garlic on top, glass noodles underneath to catch the juices. Slurp the noodles too."
        ],
        tip: "Agree the price per catty and the cooking charge before anything is weighed or cooked.",
        go: "Yau Tong station, then about 15 min walk.",
        q: "Lei Yue Mun Seafood Village", ll: [22.2849, 114.2391] },
      { t: "19:00", en: "Plan B: Mak Man Kee & Kai Kai", wiki: ["Wonton noodles", "Tong sui"], zh: "麥文記 · 佳佳甜品", area: "Jordan", kind: "backup",
        say: "Too tired for Lei Yue Mun, so dinner close to home: wonton noodles at Mak Man Kee, then something sweet at Kai Kai. Honestly, not a bad consolation prize.",
        about: "If the day runs long: Mak Man Kee on Parkes Street is a classic wonton noodle shop, serving the old-school small bowl with the wontons hidden under the noodles. Kai Kai on Ning Po Street does tong sui, 'sugar water': Cantonese sweet soups, eaten hot or cold. Hot pot near Jordan is the other option.",
        facts: [
          "Traditional wonton noodles are served in a small bowl, with the wontons hidden under the noodles.",
          "Cantonese tong sui (糖水, 'sugar water') desserts include sweet soups served hot or cold."
        ],
        order: [["Wonton noodles", "雲吞麵"], ["Black sesame soup", "芝麻糊"], ["Sweet potato ginger soup", "番薯糖水"]],
        eat: [
          "Wonton noodles: lift the noodles to find the wontons underneath. Thin wrapper, prawn inside with a clean snap.",
          "Black sesame soup: thick, glossy, nutty and toasty. It looks like ink and tastes far better than it looks.",
          "Sweet potato ginger soup: gentle sweetness first, then the ginger warming the back of your throat."
        ],
        go: "Mak Man Kee: 51 Parkes Street. Kai Kai: 29 Ning Po Street. Both near the Airbnb.",
        q: "Mak Man Kee Noodle Shop 51 Parkes Street Jordan", ll: [22.3054, 114.1706] }
    ]
  },
  {
    id: "wed", date: "2026-12-02", dow: "Wed", dom: "2", color: "#7d499d", line: "Macau purple",
    title: "Macau day trip",
    route: "Kennedy Town → Macau old town → Taipa → Coloane → Cotai",
    intro: "Passport day. I'm taking the ferry to Macau, which Portugal ran until 1999, and you can taste it. Old town in the morning, minchi and African chicken for lunch, the original Lord Stow's egg tart in the afternoon, and the Cotai lights tonight. Two food cultures that met centuries ago and never stopped mixing.",
    items: [
      { leg: 1, t: "06:25", mode: "MTR", text: "Jordan → Admiralty (Tsuen Wan line), change to Island line → Kennedy Town, about 25 min." },
      { t: "07:00", en: "Sun Hing", wiki: ["Custard bun", "Dim sum"], zh: "新興食家", area: "Kennedy Town", kind: "food",
        say: "It's 7am, and this dim sum place has been open since 3. Night owls and early workers, same tables. I'm here for the custard buns that ooze.",
        about: "Sun Hing in Kennedy Town opens at 3am and closes in the afternoon, which makes it a favourite for people finishing a night and people starting a day. The star is lau sa bao, 'flowing sand bun', with molten salted-egg-yolk custard inside. Bring cash.",
        facts: [
          "It opens at 3am and closes in the afternoon, which makes it a favourite for night owls and early workers.",
          "Lau sa bao (流沙包) means 'flowing sand bun', for the molten salted-egg-yolk custard inside."
        ],
        order: [["Molten custard buns", "流沙包"], ["Siu mai", "燒賣"], ["Char siu buns", "叉燒包"]],
        eat: [
          "Custard bun: give it a few seconds, then tear it open slowly on camera so the custard runs. Sweet and salty at once, rich, a little grainy, like sand. That's the name.",
          "Warn people it's hot. Very hot.",
          "Siu mai (燒賣): an open-topped dumpling, pork and prawn packed into a thin yellow wrapper, so you can see the filling on top. Think of it as a little meat cupcake in dumpling form. You know it's a good one when it's dense and bouncy, not crumbly. Say how it compares with Tim Ho Wan."
        ],
        tip: "Bring cash. Bring your passport for Macau.",
        go: "8 Smithfield Road, Kennedy Town. Short walk from Kennedy Town station.",
        q: "Sun Hing Restaurant 8 Smithfield Road Kennedy Town", ll: [22.2843, 114.1290] },
      { leg: 1, t: "07:40", mode: "MTR", text: "Kennedy Town → Sheung Wan, Island line. Hong Kong–Macau Ferry Terminal (Shun Tak Centre) by 08:00." },
      { leg: 1, t: "08:30", fixed: "Ferry 08:30 · be there 08:00", mode: "Ferry", text: "Hong Kong–Macau Ferry Terminal → Macau Outer Harbour, about 1 hour. Passport through immigration on both sides." },
      { t: "10:00", en: "Ruins of St. Paul's & Senado Square", wiki: ["Ruins of Saint Paul's", "Senado Square"], zh: "大三巴牌坊 · 議事亭前地", area: "Macau", kind: "sight",
        say: "Welcome to Macau. This is the Ruins of St. Paul's: a church that burned down in 1835, and the only thing left standing is the front wall. Somehow, that wall became the most famous sight in Macau.",
        about: "The church was built between 1602 and 1640. A fire during a typhoon in 1835 destroyed it, leaving only the stone front and the stairs. Macau was run by Portugal until December 1999, and you can see it in Senado Square downhill: wavy black-and-white Portuguese calçada paving and pastel colonial buildings. The whole historic centre has been a UNESCO World Heritage Site since 2005. The street up to the Ruins is lined with shops selling pork jerky and almond cookies.",
        facts: [
          "The church was built between 1602 and 1640. A fire during a typhoon in 1835 destroyed it, leaving only the front and the stairs.",
          "The Historic Centre of Macao became a UNESCO World Heritage Site in 2005.",
          "Macau was administered by Portugal until December 1999.",
          "Senado Square's wavy paving is Portuguese calçada, made of small stones."
        ],
        order: [["Pork jerky (on the street up to the Ruins)", "豬肉乾"], ["Almond cookies", "杏仁餅"]],
        eat: [
          "Pork jerky: sweet, sticky and smoky, more like a thin sheet of barbecued meat than dry jerky. Compare it with jerky at home.",
          "Almond cookies (杏仁餅): plot twist, they're usually made from mung bean flour, pressed into a wooden mould and baked. That's why they crumble straight into powder in your mouth. Think of it as shortbread's drier cousin: crumbly, nutty, sweet. Don't try to talk while eating one. Or do, for the camera."
        ],
        go: "Taxi or bus from the Outer Harbour Ferry Terminal, about 15 min.",
        q: "Ruins of St. Paul's Macau", ll: [22.1975, 113.5409] },
      { leg: 1, t: "12:30", mode: "Bus", text: "Bus or taxi to Taipa Village, about 20–30 min." },
      { t: "13:00", en: "Taipa Village", wiki: ["Taipa Village", "Galinha à africana"], zh: "氹仔舊城區", area: "Taipa, Macau", kind: "food",
        say: "Sit-down Macanese lunch in Taipa: minchi and African chicken. This is food made from centuries of sailors, traders and families mixing everything they brought with them. Then a pork chop bun, because obviously.",
        about: "Macanese food is what happened when Portuguese cooking spent centuries in southern China, picking up flavours from Portugal's old trade routes through Africa, India and Southeast Asia on the way. Minchi is the home-cooking classic: minced meat with diced potato and a fried egg on top. African chicken is a Macau dish despite the name. Its origin is debated, and one popular story credits a hotel chef in the 1940s. Taipa Village is a few lanes of colonial houses and food shops, and Rua do Cunha is the main food street.",
        facts: [
          "Macanese food blends Portuguese, Chinese, African, Indian and Southeast Asian influences.",
          "Minchi, minced meat with diced potato and a fried egg, is a Macanese home-cooking classic.",
          "African chicken is a Macau dish, despite the name. Its origin is debated: one popular story credits a hotel chef in the 1940s."
        ],
        order: [["Minchi", "免治"], ["African chicken", "非洲雞"], ["Pork chop bun", "豬扒包"], ["Almond cookies", "杏仁餅"]],
        eat: [
          "Minchi: break the yolk over the mince and potato. Salty, savoury, with crispy potato cubes. It's the kind of thing a grandma makes, and that's the point.",
          "African chicken: describe the sauce before you taste: rich, red-brown, spiced. Then say what you can pick out. Don't guess the recipe, describe what you taste.",
          "Pork chop bun: a crusty bun and a fried chop, nothing else. Talk about how simple it is, and why that works."
        ],
        tip: "Tai Lei Loi Kei (大利來記) in Taipa is famous for pork chop buns.",
        go: "Rua do Cunha, Taipa.",
        q: "Rua do Cunha Taipa Macau", ll: [22.1535, 113.5566] },
      { leg: 1, t: "15:00", mode: "Bus", text: "Bus to Coloane Village, about 20 min." },
      { t: "15:20", en: "Lord Stow's Bakery", wiki: ["Lord Stow's Bakery", "Pastel de nata"], zh: "安德魯餅店", area: "Coloane, Macau", kind: "food",
        say: "The original Lord Stow's in Coloane. An English pharmacist took Portugal's pastel de nata, changed the custard, and it became Macau's egg tart. Burnt top, flaky pastry. Let's go.",
        about: "Andrew Stow, an English pharmacist, opened the bakery in 1989. The 'Lord' was a nickname from his Portuguese friends. He based his tart on Portugal's pastel de nata, but used cream in the custard. Coloane is the quiet southern end of Macau, a small waterfront village with a chapel square: a good place to sit down and eat one while it's still warm.",
        facts: [
          "Lord Stow's was opened in 1989 by Andrew Stow, an English pharmacist.",
          "The 'Lord' was a nickname from his Portuguese friends in Macau.",
          "He based the tart on Portugal's pastel de nata, but used cream in the custard."
        ],
        order: [["Portuguese egg tart", "葡撻"]],
        eat: [
          "Compare it with Monday's Tai Cheong tart: blistered, caramelised top here, glossy smooth top there.",
          "Bite and listen: the pastry should shatter. Flaky, crackly, buttery layers.",
          "Custard: creamy and rich, like crème brûlée where the top has caught. Then pick a side: Hong Kong or Macau?"
        ],
        go: "1 Rua do Tassara, Coloane Village.",
        q: "Lord Stow's Bakery Coloane", ll: [22.1173, 113.5587] },
      { leg: 1, t: "16:30", mode: "Bus", text: "Bus or taxi to the Cotai Strip, about 15 min." },
      { t: "17:00", en: "Cotai Strip", wiki: ["Cotai Strip", "The Venetian Macao"], zh: "路氹金光大道", area: "Cotai, Macau", kind: "sight",
        say: "Cotai at night. Giant resorts, a fake Venice with indoor canals, and more lights than anywhere I've been all week. An hour ago I was eating egg tarts in a sleepy village.",
        about: "Cotai is short for COloane + TAIpa: the strip of reclaimed land that joined the two islands, now lined with giant casino resorts. The Venetian Macao opened in 2007 with indoor canals and gondola rides. It's the same city as the Ruins of St. Paul's this morning, and that might be the strangest thing about Macau.",
        facts: [
          "Cotai is named from COloane + TAIpa, the two islands it joined.",
          "The Venetian Macao, which opened in 2007, has indoor canals with gondola rides."
        ],
        go: "Bus or taxi from Coloane.",
        q: "Cotai Strip Macau", ll: [22.1475, 113.5600] },
      { leg: 1, t: "20:00", fixed: "Ferry 20:00", mode: "Ferry", text: "Taipa Ferry Terminal → Hong Kong (book ahead), then MTR home. Backup: the bridge bus runs around the clock." }
    ]
  },
  {
    id: "thu", date: "2026-12-03", dow: "Thu", dom: "3", color: "#9a3b26", line: "Tuen Ma brown",
    title: "East Kowloon & fly to Manila",
    route: "Kowloon Station → Kowloon City → Wong Tai Sin → Diamond Hill → airport",
    intro: "Last morning in Hong Kong. Bags are already checked in, so it's hands-free: the site of the old Kowloon Walled City, two temples, and one last round of dim sum before Manila. I'm going to try not to get sentimental. No promises.",
    items: [
      { t: "06:45", fixed: "Check-in 06:00–15:00", en: "In-town check-in, Kowloon Station", wiki: ["Kowloon station (MTR)", "Airport Express (MTR)"], zh: "九龍站市區預辦登機", area: "West Kowloon", kind: "hub",
        say: "Checking my bags in at Kowloon Station, hours before the flight. The bags go to the airport without me, and I get a whole last morning with nothing to carry. Every city should do this.",
        about: "Airport Express stations offer in-town check-in, so you can drop bags in the city and ride to the airport later. Cathay's counter here is open 06:00–15:00.",
        facts: [
          "In-town check-in means your bags travel to the airport without you."
        ],
        tip: "Tap in with Octopus or a card at the in-town check-in gate. The Airport Express fare is charged here; use the same card later.",
        go: "Check out, walk to Kowloon Station, about 15 min.",
        q: "Kowloon Station In-Town Check-in", ll: [22.3049, 114.1615] },
      { leg: 1, t: "07:15", mode: "MTR", text: "Walk to Austin station, Tuen Ma line → Sung Wong Toi, about 12 min." },
      { t: "07:30", en: "Kowloon Walled City Park", wiki: ["Kowloon Walled City Park", "Kowloon Walled City"], zh: "九龍寨城公園", area: "Kowloon City", kind: "sight",
        say: "Listen to how quiet it is. In 1987, around 33,000 people lived on this one patch of land, stacked on top of each other, with planes coming in to Kai Tak low over the rooftops. Now it's a Chinese garden. This city doesn't do subtle contrasts.",
        about: "For most of the 20th century this was a strange hole in the map, a patch of land that the colonial government largely left alone. It grew into a dense, lawless block of buildings packed so tightly that little daylight reached the alleys. It was demolished in 1993–94, and the garden was opened in December 1995 by Chris Patten, the egg-tart governor from Monday. Parts of the old South Gate and the yamen, the old government office, still stand. Then breakfast in Kowloon City, which is known for its Thai food.",
        facts: [
          "In 1987, around 33,000 people were estimated to live inside the Walled City.",
          "It was demolished in 1993–94. The park was opened in December 1995 by Chris Patten, the egg-tart-loving governor from Monday.",
          "Planes landing at Kai Tak flew low over Kowloon City's rooftops until 1998."
        ],
        order: [["Breakfast in Kowloon City: Thai or cha chaan teng", "九龍城早餐"]],
        go: "Short walk from Sung Wong Toi station.",
        q: "Kowloon Walled City Park", ll: [22.3318, 114.1904] },
      { leg: 1, t: "08:50", mode: "Taxi", text: "Kowloon City → Wong Tai Sin Temple, about 10 min." },
      { t: "09:00", en: "Wong Tai Sin Temple", wiki: ["Wong Tai Sin Temple (Hong Kong)"], zh: "黃大仙祠", area: "Wong Tai Sin", kind: "sight",
        say: "Wong Tai Sin Temple. People come here to ask about their future, and the temple's promise is 'what you ask for, you get'. Let's see what the sticks say about mine.",
        about: "One of Hong Kong's busiest temples, dedicated to the Taoist deity Wong Tai Sin. The ritual is called kau chim (求籤): you shake a cylinder of numbered bamboo sticks until one falls out, then take the number to be interpreted. Film the shaking. The sound of the sticks is the sound of this place.",
        facts: [
          "The temple's famous promise is 'what you ask for, you get' (有求必應).",
          "Shaking the fortune sticks is called kau chim (求籤)."
        ],
        go: "Next to Wong Tai Sin MTR station.",
        q: "Wong Tai Sin Temple", ll: [22.3423, 114.1935] },
      { leg: 1, t: "09:50", mode: "MTR", text: "Wong Tai Sin → Diamond Hill, Kwun Tong line, 1 stop." },
      { t: "10:00", en: "Chi Lin Nunnery & Nan Lian Garden", wiki: ["Chi Lin Nunnery", "Nan Lian Garden"], zh: "志蓮淨苑 · 南蓮園池", area: "Diamond Hill", kind: "sight",
        say: "Chi Lin Nunnery: a wooden temple held together without a single nail, just timber locked into timber. Then the garden next door, which is about as calm as Hong Kong gets.",
        about: "A Buddhist nunnery founded in 1934 and rebuilt in 1998 in Tang dynasty style, with interlocking timber joints and no nails. Next door, Nan Lian Garden is laid out like a Tang dynasty garden, with ponds and a golden pavilion. After a week of noise, this is the place to let the camera sit still for a minute.",
        facts: [
          "The nunnery was founded in 1934 and rebuilt in Tang dynasty style in 1998, with interlocking timber joints and no nails.",
          "Nan Lian Garden is laid out in the style of a Tang dynasty garden."
        ],
        go: "Short walk from Diamond Hill station.",
        q: "Chi Lin Nunnery Diamond Hill", ll: [22.3403, 114.2048] },
      { t: "11:15", en: "Last dim sum, Diamond Hill", wiki: ["Dim sum"], zh: "鑽石山點心", area: "Diamond Hill", kind: "food",
        say: "Last meal in Hong Kong, so it has to be dim sum. Shrimp dumplings, siu mai, char siu buns, rice rolls. The classics one more time.",
        about: "Going for dim sum in Cantonese is yum cha, 'drink tea', because the tea is half the point. Any busy dim sum restaurant near Diamond Hill station will do. Use it as the week's final exam.",
        facts: [],
        order: [["Shrimp dumplings", "蝦餃"], ["Siu mai", "燒賣"], ["Char siu buns", "叉燒包"], ["Rice rolls", "腸粉"]],
        eat: [
          "Do a quick ranking of the week's dim sum on camera: Tim Ho Wan, Sun Hing, and this one. Be honest.",
          "Go through the classics one by one: thin, see-through shrimp dumpling wrapper, juicy siu mai, fluffy char siu bun with sweet-salty pork, silky rice rolls.",
          "When someone pours you tea, tap two fingers on the table. It's how people say thank you here. Explain it on camera."
        ],
        go: "Near Diamond Hill station.",
        q: "dim sum Diamond Hill", ll: [22.3400, 114.2015] },
      { leg: 1, t: "12:15", mode: "MTR", text: "Diamond Hill → Austin, Tuen Ma line, then walk to Kowloon Station." },
      { leg: 1, t: "12:50", fixed: "Train ~12:50", mode: "Airport Express", text: "Kowloon → Airport with the same card, at the airport about 13:20." },
      { t: "16:05", fixed: "Departs 16:05", en: "CX903 to Manila", wiki: ["Cathay Pacific", "Hong Kong International Airport"], zh: "國泰航空 CX903", area: "Hong Kong International Airport", kind: "hub",
        say: "That's Hong Kong done. Six days, too many egg tarts, not enough stomach. Next stop, Manila.",
        facts: [],
        go: "Bags already checked; go straight to security.",
        q: "Hong Kong International Airport Terminal 1", ll: [22.3135, 113.9145] }
    ]
  }
  ],
  phrases: [
    { rom: "m goi", zh: "唔該", en: "Thanks / excuse me / please", note: "For service: a waiter, a shopkeeper, holding a door." },
    { rom: "do je", zh: "多謝", en: "Thank you", note: "For a gift or a compliment." },
    { rom: "ho sik", zh: "好食", en: "Delicious" },
    { rom: "mai dan", zh: "埋單", en: "The bill, please" },
    { rom: "gei do chin", zh: "幾多錢", en: "How much?" },
    { rom: "ni go", zh: "呢個", en: "This one" },
    { rom: "yat go", zh: "一個", en: "One (of these)" },
    { rom: "m sai", zh: "唔使", en: "No need / no thanks" },
    { rom: "jo san", zh: "早晨", en: "Good morning" },
    { rom: "dong naai cha", zh: "凍奶茶", en: "Iced milk tea" },
    { rom: "siu laat", zh: "小辣", en: "A little spicy" },
    { rom: "dai laat", zh: "大辣", en: "Very spicy" }
  ]
};
