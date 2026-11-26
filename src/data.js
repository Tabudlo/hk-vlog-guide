// Trip data. Times are Hong Kong time (UTC+8). Pins are approximate; Maps links search by name and address.
// Stop: { t, en, wiki[], zh, area, kind, say, about, facts[], order[[en, zh]], tip, go, q, ll }
// t is only the planned order; the app does not show times. wiki = Wikipedia articles tried in order for the photo.
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
    intro: "Kia ora from Hong Kong! I've just landed, it's Saturday night, and the plan is simple: get into Jordan, get a haircut, and find my first snack on Temple Street.",
    items: [
      { t: "18:45", en: "Hong Kong International Airport", wiki: ["Hong Kong International Airport", "Chek Lap Kok", "Airport Express (MTR)"], zh: "香港國際機場", area: "Chek Lap Kok", kind: "hub",
        say: "Touched down in Hong Kong! First jobs: cash from the ATM, eSIM on, and then straight into town.",
        about: "Hong Kong's airport sits on Chek Lap Kok, an island off Lantau that was flattened and greatly enlarged with reclaimed land to build it. It opened in 1998 and replaced the old Kai Tak airport in Kowloon City.",
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
        say: "Home base for the week, right on Nathan Road in Jordan. Bags down, quick freshen up, and back out.",
        about: "Jordan sits between Tsim Sha Tsui and Yau Ma Tei, right in the middle of Kowloon. Nathan Road, the main road outside, runs north from the harbour through Tsim Sha Tsui, Jordan, Yau Ma Tei and Mong Kok.",
        facts: [
          "Nathan Road is named after Sir Matthew Nathan, Governor of Hong Kong from 1904 to 1907. It got the name in 1909.",
          "Jordan Road was called Sixth Street until 1909, when it was renamed after Sir John Jordan, then Britain's Minister to China."
        ],
        go: "Kim Tak Building, 328–342A Nathan Road. Jordan MTR station is a short walk away.",
        q: "328 Nathan Road Jordan Hong Kong", ll: [22.3058, 114.1714] },
      { leg: 1, t: "22:10", mode: "Walk", text: "To Temple Street, about 5 min." },
      { t: "22:15", en: "Temple Street Night Market", wiki: ["Temple Street, Hong Kong"], zh: "廟街夜市", area: "Jordan / Yau Ma Tei", kind: "food",
        say: "First night, first snack. This is Temple Street Night Market, and I want to see what's still sizzling.",
        about: "Temple Street runs north from Jordan into Yau Ma Tei. At night it fills with stalls selling clothes, gadgets and souvenirs, with open-air restaurants serving seafood and clay-pot rice. Near the temple end you'll find fortune tellers and, some nights, Cantonese opera singers.",
        facts: [
          "The street is named after the Tin Hau Temple in Yau Ma Tei, which sits in the middle of it.",
          "Tin Hau is the sea goddess, traditionally worshipped by Hong Kong's fishing communities.",
          "The Tin Hau temple complex dates back to the 1800s."
        ],
        order: [["Skewers or fish balls from a stall", "串燒 · 魚蛋"], ["Stir-fried clams in black bean sauce", "豉椒炒蜆"], ["Fried noodles", "炒麵"]],
        go: "Enter from Jordan Road and walk north.",
        q: "Temple Street Night Market Hong Kong", ll: [22.3066, 114.1700] }
    ]
  },
  {
    id: "sun", date: "2026-11-29", dow: "Sun", dom: "29", color: "#e2231a", line: "Tsuen Wan red",
    title: "Kowloon eating day",
    route: "Sham Shui Po → Prince Edward → Mong Kok → harbour → Jordan",
    intro: "Morning from Jordan! Today is a proper eating day. I'm working my way from Sham Shui Po all the way down to the harbour, and I'm not stopping until the light show.",
    items: [
      { t: "07:30", en: "Australia Dairy Company", wiki: ["Australia Dairy Company"], zh: "澳洲牛奶公司", area: "Jordan", kind: "food",
        say: "Breakfast at Australia Dairy Company. It's famous for scrambled eggs and very fast, very no-nonsense service. Wish me luck.",
        about: "A busy cha chaan teng (Hong Kong-style café) on Parkes Street, known for quick turnover, shared tables and staff who expect you to order fast. The set breakfasts and steamed milk puddings are the draw.",
        facts: [
          "It opened in 1970. The owner had just spent two years in Australia, which is where the name comes from.",
          "Cha chaan teng means 'tea restaurant': Hong Kong's take on Western café food with Cantonese habits.",
          "Its steamed milk pudding (燉奶) is one of its signatures."
        ],
        order: [["Scrambled egg toast", "炒蛋多士"], ["Macaroni soup with ham", "火腿通粉"], ["Hot milk tea", "熱奶茶"], ["Steamed milk pudding", "燉奶"]],
        tip: "Expect to share a table. Know your order before you sit down.",
        go: "47–49 Parkes Street, Jordan. About 5 min walk from the Airbnb.",
        q: "Australia Dairy Company 47 Parkes Street Jordan", ll: [22.3046, 114.1707] },
      { leg: 1, t: "08:15", mode: "MTR", text: "Jordan → Sham Shui Po, Tsuen Wan line towards Tsuen Wan, 4 stops, about 8 min." },
      { t: "08:30", en: "Hop Yik Tai & Kung Wo", wiki: ["Cheung fun"], zh: "合益泰小食 · 公和荳品廠", area: "Sham Shui Po", kind: "food",
        say: "Second breakfast already. Silky rice rolls at Hop Yik Tai, then tofu pudding a street over at Kung Wo.",
        about: "Sham Shui Po is one of Hong Kong's oldest working-class districts: fabric wholesalers, electronics stalls on Apliu Street, and some of the cheapest good food in the city. Hop Yik Tai is a tiny takeaway counter best known for cheung fun, steamed rice-noodle rolls drowned in sweet, peanut and sesame sauces. A street over, Kung Wo is an old-style beancurd shop that makes its own tofu, soy milk and tofu pudding.",
        facts: [
          "Cheung fun means 'intestine noodle', named for the rolled shape.",
          "Hop Yik Tai is listed in the Michelin Guide Hong Kong.",
          "Kung Wo traces its history back to 1893. Its soy is still made on site, with the stone grinder starting at 2am.",
          "Tofu pudding (豆腐花, dau fu fa) is a classic Cantonese dessert, eaten warm or cold with sugar or syrup."
        ],
        order: [["Cheung fun, all the sauces", "腸粉 · 齊醬"], ["Tofu pudding", "豆腐花"], ["Soy milk", "豆漿"], ["Pan-fried stuffed tofu", "煎釀豆腐"]],
        go: "Hop Yik Tai: 121 Kweilin Street. Kung Wo: 118 Pei Ho Street. Both a few minutes from Sham Shui Po station.",
        q: "Hop Yik Tai 121 Kweilin Street Sham Shui Po", ll: [22.3301, 114.1606] },
      { leg: 1, t: "09:50", mode: "Walk", text: "To Fuk Wing Street, about 5 min." },
      { t: "10:00", en: "Tim Ho Wan", wiki: ["Tim Ho Wan"], zh: "添好運點心專門店", area: "Sham Shui Po", kind: "food",
        say: "Tim Ho Wan, famous for being one of the cheapest Michelin-starred meals in the world. I'm here for the baked pork buns.",
        about: "Tim Ho Wan is a no-frills dim sum shop that became famous worldwide for Michelin-level dim sum at street prices. It now has branches in many countries, but it started here in Kowloon.",
        facts: [
          "It opened in 2009 as a 20-seat shop in Mong Kok, founded by Mak Kwai Pui, a former dim sum chef at the Four Seasons' Lung King Heen.",
          "The original Mong Kok shop earned a Michelin star in 2010, which made it famous as one of the cheapest Michelin-starred meals anywhere.",
          "Its baked BBQ pork bun has a crunchy, sweet top instead of the usual fluffy steamed bun."
        ],
        order: [["Baked BBQ pork buns", "酥皮焗叉燒包"], ["Shrimp dumplings", "晶瑩鮮蝦餃"], ["Steamed sponge cake", "馬拉糕"]],
        go: "9–11 Fuk Wing Street, Sham Shui Po.",
        q: "Tim Ho Wan 9 Fuk Wing Street Sham Shui Po", ll: [22.3309, 114.1640] },
      { t: "11:00", en: "Cart noodles", wiki: ["Cart noodle"], zh: "車仔麵", area: "Sham Shui Po", kind: "food",
        say: "Cart noodles: you pick the noodles, the toppings and the sauce. Very dangerous for someone like me.",
        about: "Cart noodles started as cheap street food sold from push-carts in Hong Kong's poorer neighbourhoods. Today they're sold from small shops, where you build your own bowl by ticking noodles and toppings on a menu.",
        facts: [
          "The name comes from the push-carts (車仔) the noodles were originally sold from.",
          "You choose everything: noodle type, toppings, soup or dry, and how much chilli."
        ],
        order: [["Thin egg noodles", "幼麵"], ["Curry fish balls", "咖喱魚蛋"], ["Pig skin", "豬皮"], ["Braised radish", "蘿蔔"]],
        tip: "Only if there's room. There are several cart noodle shops around Sham Shui Po station.",
        go: "Any cart noodle shop near Sham Shui Po station.",
        q: "cart noodles Sham Shui Po", ll: [22.3305, 114.1625] },
      { t: "12:00", en: "Lau Sum Kee", wiki: ["Lau Sum Kee", "Wonton noodles"], zh: "劉森記麵家", area: "Sham Shui Po", kind: "food",
        say: "Lau Sum Kee still makes its noodles the old way, pressed with a bamboo pole. Wonton noodles, and then I'm finding roast meat.",
        about: "A family-run noodle shop known for bamboo-pole noodles (竹昇麵): the dough is pressed by a cook bouncing on a long bamboo pole, which gives the noodles their springy bite. Few shops still make them this way.",
        facts: [
          "Bamboo-pole noodles are pressed by someone sitting on one end of a big bamboo pole and bouncing on the dough.",
          "It's a family business now run by the third generation, and it's known for dry noodles topped with shrimp roe.",
          "Wonton noodles are traditionally served with the wontons under the noodles so the noodles don't go soggy."
        ],
        order: [["Shrimp wonton noodles", "鮮蝦雲吞麵"], ["Dry noodles with shrimp roe", "蝦子撈麵"], ["Then: roast pork or char siu at a roast-meat shop", "燒肉 · 叉燒"]],
        go: "48 Kweilin Street, Sham Shui Po.",
        q: "Lau Sum Kee Noodle 48 Kweilin Street Sham Shui Po", ll: [22.3290, 114.1612] },
      { t: "12:45", en: "Apliu Street market", wiki: ["Apliu Street"], zh: "鴨寮街", area: "Sham Shui Po", kind: "sight",
        say: "Apliu Street: if you need a cable, a battery, an old camera or a phone from 2009, it's here.",
        about: "A street-long flea market of electronics: second-hand phones, cables, batteries, camera gear, tools and vintage odds and ends, with shops behind the stalls. The stalls are set up by around midday.",
        facts: [
          "The name 鴨寮 means 'duck huts', after a village where people once raised ducks.",
          "It became a second-hand market in the 1930s and an electronics parts hub in the 1960s."
        ],
        tip: "Good spot to grab a spare camera battery or SD card.",
        go: "Runs between Kweilin Street and Nam Cheong Street.",
        q: "Apliu Street Sham Shui Po", ll: [22.3299, 114.1638] },
      { leg: 1, t: "13:15", mode: "Walk", text: "South to Prince Edward, about 15 min." },
      { t: "13:30", en: "Kam Wah Café", wiki: ["Kam Wah Cafe", "Pineapple bun"], zh: "金華冰廳", area: "Prince Edward", kind: "food",
        say: "Kam Wah is one of the most famous spots for bolo yau: a hot pineapple bun with a thick slab of cold butter.",
        about: "A busy old-school bing sutt (ice café) on Bute Street, known across Hong Kong for its pineapple buns, egg tarts and milk tea.",
        facts: [
          "A pineapple bun has no pineapple in it. It's named after the crackly sugar top, which looks like pineapple skin.",
          "Bolo yau (菠蘿油) means 'pineapple oil': the bun split open with a slab of butter.",
          "Kam Wah opened in 1973, and its butter slab is famously thick."
        ],
        order: [["Pineapple bun with butter", "菠蘿油"], ["Egg tart", "蛋撻"], ["Iced milk tea", "凍奶茶"]],
        go: "47 Bute Street, Prince Edward.",
        q: "Kam Wah Cafe 47 Bute Street Prince Edward", ll: [22.3240, 114.1712] },
      { t: "14:00", en: "Flower Market & Goldfish Street", wiki: ["Yuen Po Street Bird Garden", "Prince Edward, Hong Kong"], zh: "花墟 · 金魚街", area: "Prince Edward / Mong Kok", kind: "sight",
        say: "Two minutes from the pineapple buns: a whole street of flowers, and then a whole street of goldfish in bags.",
        about: "Flower Market Road is lined with florists and plant shops. A short walk south, the top end of Tung Choi Street is nicknamed Goldfish Street, with shops selling fish in hanging plastic bags, plus aquariums and pet supplies.",
        facts: [
          "Yuen Po Street Bird Garden is at the east end of Flower Market Road.",
          "Goldfish Street is the northern stretch of Tung Choi Street, the same street as the Ladies' Market further south.",
          "Goldfish are linked with good fortune in Chinese tradition."
        ],
        go: "Flower Market Road, then walk south down Tung Choi Street.",
        q: "Flower Market Road Prince Edward", ll: [22.3253, 114.1722] },
      { t: "14:45", en: "Mong Kok: Ladies' Market & Sneaker Street", wiki: ["Ladies' Market", "Tung Choi Street"], zh: "女人街 · 波鞋街", area: "Mong Kok", kind: "food",
        say: "Mong Kok! Ladies' Market, Sneaker Street, and the snacks I've been waiting for: egg waffles and curry fish balls.",
        about: "Mong Kok is one of the busiest shopping districts in the city. The Ladies' Market fills Tung Choi Street with stalls selling clothes and souvenirs. One street east, Fa Yuen Street is nicknamed Sneaker Street for its run of sports shoe shops.",
        facts: [
          "Mong Kok is often described as one of the most densely populated places on Earth.",
          "Egg waffles (雞蛋仔) are cooked in a special iron that makes the bubble shape.",
          "Curry fish balls (咖喱魚蛋) are one of Hong Kong's most classic street snacks."
        ],
        order: [["Egg waffle", "雞蛋仔"], ["Curry fish balls", "咖喱魚蛋"]],
        go: "Tung Choi Street (Ladies' Market) and Fa Yuen Street.",
        q: "Ladies Market Tung Choi Street Mong Kok", ll: [22.3185, 114.1709] },
      { leg: 1, t: "15:20", mode: "MTR", text: "Mong Kok → Tsim Sha Tsui, Tsuen Wan line towards Central, 3 stops. Granville Road is a few minutes' walk." },
      { t: "15:30", en: "Haircut at KROV by KOBARBER Japan", wiki: [], zh: "尖沙咀加連威老道45號1樓", area: "Tsim Sha Tsui", kind: "sight",
        say: "Haircut time. This is a Japanese men's barber in Tsim Sha Tsui, and I'm asking for a medium-long scissor cut. Let's see how I come out.",
        about: "A Japanese-style men's barber on Granville Road in Tsim Sha Tsui, from the KOBARBER team. It's rated 5.0 on Fresha from around 900 reviews. Men's cut and styling starts at about HK$280 and takes 45 minutes to an hour. Open daily 10:00–21:00.",
        facts: [],
        tip: "Book on Fresha (search 'KROV by KOBARBER JAPAN'). Ask for: medium-long, scissors only, keep the length, light layers and texture on top, no fade, no clippers on the sides. Show a photo.",
        go: "1/F, 45 Granville Road, Tsim Sha Tsui. A few minutes' walk from Tsim Sha Tsui MTR.",
        q: "KROV by KOBARBER JAPAN 45 Granville Road Tsim Sha Tsui", ll: [22.2994, 114.1735] },
      { leg: 1, t: "15:45", mode: "MTR", text: "Tsim Sha Tsui → Jordan, 1 stop, or walk 15 min up Nathan Road." },
      { t: "16:00", en: "Rest at the Airbnb", wiki: ["Nathan Road"], zh: "休息", area: "Jordan", kind: "rest",
        say: "Quick break to charge the batteries: mine and the cameras'.",
        facts: [],
        go: "Back to Nathan Road.",
        q: "328 Nathan Road Jordan Hong Kong", ll: [22.3058, 114.1714] },
      { leg: 1, t: "16:40", mode: "Walk", text: "West to the Art Park, about 20–25 min, or a short taxi." },
      { t: "17:00", en: "West Kowloon Art Park", wiki: ["West Kowloon Cultural District", "M+"], zh: "西九藝術公園", area: "West Kowloon", kind: "sight",
        say: "Sunset at West Kowloon, looking straight across the harbour at Hong Kong Island.",
        about: "A big waterfront lawn in the West Kowloon Cultural District, looking across Victoria Harbour to Central. The M+ museum and the Hong Kong Palace Museum are right next to it. Sunset is around 17:40.",
        facts: [
          "The whole cultural district is built on reclaimed land.",
          "M+, the big museum next to the park, opened in November 2021.",
          "The Hong Kong Palace Museum opened in 2022."
        ],
        go: "Enter from Austin Road West or from Kowloon Station.",
        q: "Art Park West Kowloon Cultural District", ll: [22.3015, 114.1575] },
      { leg: 1, t: "17:50", mode: "Walk", text: "Down Canton Road to the Star Ferry pier, 30–35 min." },
      { t: "18:30", en: "Star Ferry", wiki: ["Star Ferry"], zh: "天星小輪", area: "Tsim Sha Tsui ⇄ Central", kind: "sight",
        say: "The Star Ferry: one of the best-value rides in the world. Over to Central and straight back for the skyline.",
        about: "The Star Ferry has been crossing Victoria Harbour between Kowloon and Hong Kong Island since the late 1800s. The ride takes about 10 minutes, and the upper deck gives the classic skyline view.",
        facts: [
          "It was founded in 1888 by Dorabjee Naorojee, a Parsee merchant, as the Kowloon Ferry Company, and renamed Star Ferry in 1898.",
          "Every ferry's name ends in 'Star', going back to the first boats, Morning Star and Evening Star."
        ],
        tip: "Tap Octopus or a contactless card. Sit on the upper deck. Optional: the WinterFest light show on Statue Square in Central runs every 30 min from 19:00, about 10 min walk from the Central pier.",
        go: "Tsim Sha Tsui Star Ferry Pier, by the Clock Tower.",
        q: "Star Ferry Pier Tsim Sha Tsui", ll: [22.2938, 114.1686] },
      { leg: 1, t: "19:40", mode: "Walk", text: "Back at the Tsim Sha Tsui pier: the light show is right next door at the Cultural Centre." },
      { t: "20:00", en: "WinterFest light show & Avenue of Stars", wiki: ["Hong Kong Cultural Centre", "Avenue of Stars, Hong Kong"], zh: "香港繽紛冬日節 · 星光大道", area: "Tsim Sha Tsui", kind: "sight",
        say: "Harbour at night. The old Symphony of Lights show finished just last week, so tonight it's the new winter light show here in Tsim Sha Tsui.",
        about: "For WinterFest (18 Nov 2026 – 5 Jan 2027) the Clock Tower, Cultural Centre, Museum of Art and Space Museum on the Tsim Sha Tsui waterfront are lit with free nightly projection shows. Then walk east along the Avenue of Stars, the promenade that celebrates Hong Kong film, for the skyline across the water.",
        facts: [
          "A Symphony of Lights, the nightly harbour light show that ran since 2004, had its final show on 18 November 2026.",
          "Guinness World Records listed it as the world's largest permanent light and sound show.",
          "There's a statue of Bruce Lee on the Avenue of Stars."
        ],
        tip: "Check show times on the Hong Kong Tourism Board site. Best view: the promenade in front of the Cultural Centre.",
        go: "Tsim Sha Tsui waterfront, by the Clock Tower and Cultural Centre.",
        q: "Hong Kong Cultural Centre Tsim Sha Tsui", ll: [22.2937, 114.1702] },
      { leg: 1, t: "20:25", mode: "MTR", text: "Tsim Sha Tsui → Jordan, 1 stop, or walk 15 min up Nathan Road." },
      { t: "20:45", en: "Four Seasons Pot Rice, Yee Shun & Temple Street", wiki: ["Claypot rice", "Double skin milk"], zh: "四季煲仔飯 · 義順牛奶公司", area: "Yau Ma Tei / Jordan", kind: "food",
        say: "Dinner is clay-pot rice. There's always a queue, but the crispy rice at the bottom is the whole point.",
        about: "Four Seasons on Arthur Street is one of the best-known spots for bo zai fan, rice cooked to order in a clay pot with toppings like Chinese sausage or chicken. After, walk to Yee Shun for steamed milk pudding, then back through Temple Street.",
        facts: [
          "Clay-pot rice is cooked in the pot it's served in, so the bottom forms a crispy rice crust (飯焦).",
          "Double-skin milk (雙皮奶) comes from Daliang in Shunde, Guangdong, and is named for the two skins that form on top.",
          "Clay-pot rice is a winter favourite, so queues are longest in the cold months."
        ],
        order: [["Chinese sausage clay-pot rice", "臘味煲仔飯"], ["Chicken clay-pot rice", "滑雞煲仔飯"], ["Double-skin milk", "雙皮奶"], ["Ginger milk curd", "薑汁撞奶"]],
        tip: "Opens 18:00. Expect a 30–45 min queue. Pour the soy sauce in, close the lid for a minute, then scrape the crispy bottom.",
        go: "46–58 Arthur Street, Yau Ma Tei. Yee Shun is on Nathan Road nearby.",
        q: "Four Seasons Pot Rice Arthur Street Yau Ma Tei", ll: [22.3078, 114.1708] }
    ]
  },
  {
    id: "mon", date: "2026-11-30", dow: "Mon", dom: "30", color: "#0075c2", line: "Island blue",
    title: "Island day: Dragon's Back to the Peak",
    route: "Dragon's Back → North Point → Central → the Peak",
    intro: "Early start! Today I'm crossing to Hong Kong Island: a ridge hike down to a surf beach, trams across the island, a food crawl through Central, and sunset from the Peak.",
    items: [
      { t: "07:15", en: "Congee with youtiao", wiki: ["Congee", "Youtiao"], zh: "粥 · 油炸鬼", area: "Jordan", kind: "food",
        say: "Proper Hong Kong breakfast: a big bowl of hot congee and a fried dough stick to dunk in it.",
        about: "Congee is rice simmered in lots of water until it breaks down into a smooth porridge, a classic Cantonese breakfast. There are several congee shops within a few minutes of the Airbnb.",
        facts: [
          "In Cantonese, youtiao is called yau ja gwai (油炸鬼), 'oil-fried devil'.",
          "Century egg and lean pork (皮蛋瘦肉粥) is one of the most popular congee orders."
        ],
        order: [["Century egg and pork congee", "皮蛋瘦肉粥"], ["Fried dough stick", "油炸鬼"], ["Rice roll with fried dough", "炸兩"]],
        go: "Any congee shop near Jordan station.",
        q: "congee Jordan Hong Kong", ll: [22.3050, 114.1713] },
      { leg: 1, t: "07:45", mode: "MTR", text: "Jordan → Admiralty (Tsuen Wan line), change to Island line → Shau Kei Wan, exit A3." },
      { leg: 1, t: "08:20", mode: "Bus", text: "Bus 9 from Shau Kei Wan bus terminus to To Tei Wan, about 20 min. The driver will stop if you press the bell." },
      { t: "08:45", en: "Dragon's Back hike", wiki: ["Dragon's Back"], zh: "龍脊", area: "Shek O", kind: "sight",
        say: "This is Dragon's Back, one of Hong Kong's best-known hikes, and it ends at a beach. Not a bad Monday.",
        about: "A ridge walk along the Shek O peninsula with views over the South China Sea, then a descent through woods to Big Wave Bay. Allow 2–3 hours. Bring water and sunscreen: there's little shade on the ridge.",
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
        say: "This is the Monster Building in Quarry Bay. Thousands of homes stacked in one wall, and it's even more intense in person.",
        about: "A cluster of five connected residential blocks around a courtyard, famous for its wall-to-wall windows, air conditioners and laundry. It's people's homes, so keep it quiet and respect any signs about filming.",
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
        say: "This is Chun Yeung Street: a wet market where the tram drives right through the middle of the stalls.",
        about: "A busy street market of fruit, vegetables, meat and seafood stalls with trams running down the middle. Shoppers step aside as the tram rings through.",
        facts: [
          "Trams run through the market itself, one of the few places they leave the main road.",
          "The street is named after Kwok Chun Yeung, a businessman from Fujian who developed the area in the 1920s.",
          "North Point was nicknamed 'Little Shanghai' after many Shanghainese families arrived in the 1940s, and later 'Little Fujian'."
        ],
        go: "Off King's Road, North Point.",
        q: "Chun Yeung Street North Point", ll: [22.2916, 114.1988] },
      { leg: 1, t: "13:15", mode: "MTR", text: "North Point → Central, Island line, about 12 min." },
      { t: "13:40", en: "Kau Kee", wiki: ["Kau Kee Restaurant"], zh: "九記牛腩", area: "Central", kind: "food",
        say: "First stop on the Central food loop: Kau Kee beef brisket. There's a queue, and there's a reason for the queue.",
        about: "A small, very popular beef brisket noodle shop on Gough Street. Queue first and order fast.",
        facts: [
          "It has been trading since the 1930s and is listed with a Michelin Bib Gourmand.",
          "It's famous for two styles: brisket in clear broth and curry brisket.",
          "Gough Street was once full of printing presses and old beef brisket shops. Kau Kee is the famous survivor."
        ],
        order: [["Beef brisket noodles, clear broth", "上湯牛腩麵"], ["Curry beef brisket with e-fu noodles", "咖喱牛筋腩伊麵"]],
        go: "21 Gough Street, Central.",
        q: "Kau Kee Restaurant 21 Gough Street Central", ll: [22.2841, 114.1523] },
      { t: "14:10", en: "Yat Lok", wiki: ["Yat Lok", "Siu mei"], zh: "一樂燒鵝", area: "Central", kind: "food",
        say: "Roast goose at Yat Lok. Look at that skin.",
        about: "A small roast-meat shop on Stanley Street known for its roast goose. Share a table and order the goose leg if they have it.",
        facts: [
          "Yat Lok has been trading since 1957 and holds a Michelin star.",
          "Roast goose is a Cantonese speciality; the skin is dried before roasting to make it crisp."
        ],
        order: [["Roast goose leg with rice noodles", "燒鵝髀瀨粉"], ["Roast goose on rice", "燒鵝飯"]],
        go: "34–38 Stanley Street, Central.",
        q: "Yat Lok Restaurant 34 Stanley Street Central", ll: [22.2817, 114.1558] },
      { t: "14:30", en: "Ser Wong Fun", wiki: ["Ser Wong Fun", "Snake soup"], zh: "蛇王芬", area: "Central", kind: "food",
        say: "Okay, I'm doing it: snake soup at Ser Wong Fun, one of the oldest snake soup shops in Hong Kong.",
        about: "A long-running Cantonese restaurant on Cochrane Street famous for snake soup, a thick soup of shredded snake meat, mushrooms and herbs. It's traditionally eaten in the colder months.",
        facts: [
          "The business dates back to 1895 in Guangdong. It moved to Hong Kong in 1940 and to Cochrane Street in 1989.",
          "In Cantonese tradition snake soup is a winter dish, thought to warm the body.",
          "It's usually topped with crispy crackers and lemon leaf shreds."
        ],
        order: [["Snake soup", "蛇羹"], ["Chinese sausage clay-pot rice (if still hungry)", "臘味飯"]],
        go: "30 Cochrane Street, Central.",
        q: "Ser Wong Fun 30 Cochrane Street Central", ll: [22.2826, 114.1546] },
      { t: "14:50", en: "Lan Fong Yuen", wiki: ["Lan Fong Yuen", "Hong Kong–style milk tea"], zh: "蘭芳園", area: "Central", kind: "food",
        say: "Milk tea at Lan Fong Yuen, the place that says it invented silk-stocking milk tea.",
        about: "A dai pai dong-style stall and café on Gage Street, open since the early 1950s and known for its strong, smooth milk tea and pork chop buns.",
        facts: [
          "It claims to have invented 'silk-stocking' milk tea in 1952. The 'stocking' is really a long cotton filter bag.",
          "Hong Kong milk tea is made with evaporated milk, which gives it its creamy texture."
        ],
        order: [["Milk tea", "奶茶"], ["Pork chop bun", "豬扒包"]],
        go: "2 Gage Street, Central.",
        q: "Lan Fong Yuen 2 Gage Street Central", ll: [22.2830, 114.1543] },
      { t: "15:05", en: "Tai Cheong Bakery", wiki: ["Tai Cheong Bakery", "Egg tart"], zh: "泰昌餅家", area: "Central", kind: "food",
        say: "Last stop on the loop: Tai Cheong egg tarts, the favourite of Hong Kong's last British governor.",
        about: "A bakery on Lyndhurst Terrace famous for its buttery Hong Kong-style egg tarts.",
        facts: [
          "Tai Cheong opened in 1954.",
          "Chris Patten, Hong Kong's last governor, was such a fan that the tarts got the nickname 'Fat Patten egg tarts' (肥彭蛋撻).",
          "Hong Kong egg tarts have a smooth, shiny custard, unlike the burnt-top Portuguese style you'll eat in Macau."
        ],
        order: [["Egg tart", "蛋撻"]],
        go: "35 Lyndhurst Terrace, Central.",
        q: "Tai Cheong Bakery 35 Lyndhurst Terrace Central", ll: [22.2823, 114.1535] },
      { t: "15:15", en: "Mid-Levels Escalator & Man Mo Temple", wiki: ["Man Mo Temple (Hong Kong)", "Central–Mid-Levels escalator"], zh: "中環至半山自動扶梯 · 文武廟", area: "Central / Sheung Wan", kind: "sight",
        say: "Riding one of the world's longest outdoor escalators, then a temple full of hanging incense coils.",
        about: "The Central–Mid-Levels escalator carries commuters up the hillside through SoHo. Man Mo Temple on Hollywood Road is dedicated to the god of literature (Man) and the god of war (Mo), and its ceiling is hung with giant incense coils.",
        facts: [
          "The escalator system is about 800 m long, and is often called the world's longest outdoor covered escalator.",
          "It runs downhill in the morning rush (until about 10am) and uphill the rest of the day.",
          "Man Mo Temple was built in 1847 and was declared a monument in 2010."
        ],
        go: "Escalator starts at Queen's Road Central. Man Mo Temple: 124–126 Hollywood Road.",
        q: "Man Mo Temple 124 Hollywood Road", ll: [22.2840, 114.1502] },
      { leg: 1, t: "16:00", mode: "Walk", text: "To the Peak Tram lower terminus on Garden Road, about 15 min, or a short taxi." },
      { t: "16:15", en: "Peak Tram", wiki: ["Peak Tram"], zh: "山頂纜車", area: "Central → The Peak", kind: "sight",
        say: "The Peak Tram, going up one of the steepest tracks I've ever seen. Watch the buildings look like they're leaning.",
        about: "A funicular railway running from Garden Road up to Victoria Peak. On the way up, the steep angle makes the towers outside look like they're tilting.",
        facts: [
          "It opened in May 1888 and was Asia's first funicular railway.",
          "The 'leaning buildings' are an illusion: a University of Hong Kong study linked it to the slope and the way riders lean back in their seats."
        ],
        tip: "Pre-booked. Sit on the right side going up for the best view.",
        go: "Peak Tram Garden Road Terminus.",
        q: "Peak Tram Garden Road Terminus", ll: [22.2780, 114.1594] },
      { t: "16:45", en: "Lugard Road lookout", wiki: ["Lugard Road", "Victoria Peak"], zh: "盧吉道", area: "The Peak", kind: "sight",
        say: "This is it: the view from Lugard Road. Sunset over the harbour, and then the city lights come on.",
        about: "A flat, mostly shaded path that circles Victoria Peak, with one of the best views of the skyline and harbour. Sunset is around 17:40, and the city lights come on soon after.",
        facts: [
          "It's named after Sir Frederick Lugard, Governor of Hong Kong from 1907 to 1912.",
          "Lugard was the driving force behind founding the University of Hong Kong in 1911."
        ],
        go: "Starts behind the Peak Tower; the lookout is about 15 min along the path.",
        q: "Lugard Road Lookout The Peak", ll: [22.2783, 114.1450] },
      { leg: 1, t: "18:30", mode: "Bus", text: "Bus 15 from The Peak towards Wan Chai, skipping the tram queue. Upper deck front for the view." },
      { t: "19:30", en: "Under Bridge Spicy Crab", wiki: ["Under Bridge Spicy Crab", "Causeway Bay Typhoon Shelter"], zh: "橋底辣蟹", area: "Wan Chai / Causeway Bay", kind: "food",
        say: "Typhoon shelter crab: a whole crab buried in fried garlic and chilli. This is going to be messy.",
        about: "A restaurant on Lockhart Road known for typhoon shelter-style crab, fried with a mountain of crispy garlic, chilli and black beans. You pick your spice level.",
        facts: [
          "Typhoon shelter crab comes from the boat people who lived in Causeway Bay's typhoon shelter.",
          "The restaurant started as a stall under the Canal Road flyover, hence 'Under Bridge'."
        ],
        order: [["Typhoon shelter crab", "避風塘炒蟹"], ["Mild or very spicy", "小辣 · 大辣"]],
        go: "Lockhart Road, near Canal Road flyover. Causeway Bay MTR is a few minutes away.",
        q: "Under Bridge Spicy Crab Lockhart Road Wan Chai", ll: [22.2796, 114.1817] },
      { leg: 1, t: "21:00", mode: "MTR", text: "Causeway Bay → Admiralty (Island line), change to Tsuen Wan line → Jordan." }
    ]
  },
  {
    id: "tue", date: "2026-12-01", dow: "Tue", dom: "1", color: "#e2721b", line: "Tung Chung orange",
    title: "Lantau: Big Buddha & Tai O",
    route: "Tung Chung → Ngong Ping → Tai O → Lei Yue Mun",
    intro: "Today I'm heading out west to Lantau, Hong Kong's biggest island. Cable car up to the Big Buddha, a fishing village on stilts, and a seafood dinner tonight.",
    items: [
      { t: "08:00", en: "Slow breakfast in Jordan", wiki: ["Hong Kong-style French toast", "Cha chaan teng"], zh: "佐敦早餐", area: "Jordan", kind: "food",
        say: "Slow start today. Breakfast in Jordan before a long day on Lantau.",
        facts: [],
        tip: "Any cha chaan teng nearby: try a satay beef noodle (沙爹牛肉麵) or French toast (西多士).",
        order: [["Hong Kong French toast", "西多士"], ["Satay beef noodles", "沙爹牛肉麵"], ["Lemon tea", "檸檬茶"]],
        go: "Around Jordan station.",
        q: "cha chaan teng Jordan Hong Kong", ll: [22.3049, 114.1712] },
      { leg: 1, t: "09:00", mode: "Walk", text: "To Kowloon Station, about 15 min." },
      { leg: 1, t: "09:15", mode: "MTR", text: "Kowloon → Tung Chung, Tung Chung line, about 25 min. Exit B to the cable car." },
      { t: "10:00", en: "Ngong Ping 360", wiki: ["Ngong Ping 360"], zh: "昂坪360", area: "Tung Chung → Ngong Ping", kind: "sight",
        say: "First cable car of the day, up over the mountains of Lantau. And the Big Buddha should appear any minute.",
        about: "A cable car from Tung Chung up to Ngong Ping, crossing the bay and the mountains with views back over the airport. Opens at 10:00 on weekdays.",
        facts: [
          "The ride is about 5.7 km long and takes around 25 minutes.",
          "Crystal cabins have glass floors."
        ],
        tip: "Pre-booked. Get in the queue before 10:00.",
        go: "Tung Chung cable car terminal, next to Tung Chung station exit B.",
        q: "Ngong Ping 360 Tung Chung Cable Car Terminal", ll: [22.2894, 113.9425] },
      { t: "10:30", en: "Big Buddha, Po Lin & Wisdom Path", wiki: ["Tian Tan Buddha", "The Big Buddha (Hong Kong)"], zh: "天壇大佛 · 寶蓮禪寺 · 心經簡林", area: "Ngong Ping", kind: "sight",
        say: "This is the Big Buddha. 268 steps up, so if I'm out of breath, that's why.",
        about: "The Tian Tan Buddha is a huge bronze seated Buddha on the hilltop at Ngong Ping, facing Po Lin Monastery. A short walk away, the Wisdom Path is a row of tall wooden pillars carved with the Heart Sutra.",
        facts: [
          "The Big Buddha was completed in December 1993 and is 34 m tall.",
          "There are 268 steps up to the statue.",
          "The Wisdom Path has 38 wooden pillars carved with the Heart Sutra in calligraphy by the scholar Jao Tsung-I."
        ],
        tip: "The Wisdom Path has been under refurbishment, due to finish in late 2026. If it's still closed, there's a viewing platform on the Lantau Trail nearby.",
        go: "Short walk from the Ngong Ping cable car station.",
        q: "Tian Tan Buddha Ngong Ping", ll: [22.2540, 113.9050] },
      { t: "12:15", en: "Vegetarian lunch at Po Lin", wiki: ["Po Lin Monastery"], zh: "寶蓮禪寺齋堂", area: "Ngong Ping", kind: "food",
        say: "Lunch at the monastery. It's all vegetarian, and I'm curious what they do with tofu up here.",
        about: "Po Lin Monastery's dining hall serves vegetarian set meals. Po Lin is one of Hong Kong's most important Buddhist monasteries.",
        facts: [
          "Po Lin was founded in 1906 by three monks and was first known as 'The Big Hut'. It took the name Po Lin in 1924.",
          "Buddhist monastery food in Hong Kong is fully vegetarian, often with tofu, gluten and mushrooms standing in for meat."
        ],
        order: [["Vegetarian set meal", "齋菜套餐"]],
        go: "Inside Po Lin Monastery grounds.",
        q: "Po Lin Monastery vegetarian restaurant", ll: [22.2557, 113.9077] },
      { leg: 1, t: "13:15", mode: "Bus", text: "Bus 21 Ngong Ping → Tai O, about 20 min. Runs infrequently: check the timetable at the stop." },
      { t: "13:45", en: "Tai O fishing village", wiki: ["Tai O"], zh: "大澳", area: "Lantau", kind: "food",
        say: "Tai O: houses on stilts over the water, and the whole village smells of grilled squid and shrimp paste.",
        about: "A fishing village on the west side of Lantau, known for its stilt houses built over the tidal creek, dried seafood stalls, and shrimp paste.",
        facts: [
          "The stilt houses (棚屋) belong to the Tanka, Hong Kong's traditional boat-dwelling fishing community.",
          "Tai O is famous for its shrimp paste and salted fish.",
          "Short boat trips from Tai O go looking for Chinese white dolphins (often pink), though sightings are getting rarer."
        ],
        order: [["Grilled squid", "燒魷魚"], ["Shrimp paste", "蝦醬"], ["Egg waffle", "雞蛋仔"]],
        go: "Walk from the Tai O bus terminus into the village.",
        q: "Tai O Fishing Village", ll: [22.2537, 113.8620] },
      { leg: 1, t: "16:15", mode: "Bus", text: "Bus 11 Tai O → Tung Chung, about 45 min." },
      { leg: 1, t: "17:05", mode: "MTR", text: "Tung Chung → Kowloon, Tung Chung line. Back to the Airbnb to rest." },
      { leg: 1, t: "18:30", mode: "MTR", text: "Jordan → Yau Ma Tei, change to Kwun Tong line → Yau Tong. Walk about 15 min to the village." },
      { t: "19:00", en: "Lei Yue Mun seafood village", wiki: ["Lei Yue Mun"], zh: "鯉魚門", area: "Yau Tong", kind: "food",
        say: "Lei Yue Mun: pick your seafood live from the tanks, and a restaurant cooks it for you. First, we negotiate.",
        about: "An old fishing village at the eastern entrance to Victoria Harbour, lined with seafood tanks and restaurants. You choose live seafood at a fishmonger, then a restaurant cooks it for a fee.",
        facts: [
          "Lei Yue Mun is usually translated as 'carp gate'. The name belongs to the narrow channel at the east end of Victoria Harbour.",
          "A small lighthouse on a rock at the edge of the village has guided ships through the channel for over 50 years."
        ],
        order: [["Steamed fish with ginger and spring onion", "清蒸魚"], ["Salt and pepper mantis shrimp", "椒鹽瀨尿蝦"], ["Garlic steamed scallops", "蒜蓉蒸扇貝"]],
        tip: "Agree the price per catty and the cooking charge before anything is weighed or cooked.",
        go: "Yau Tong station, then about 15 min walk.",
        q: "Lei Yue Mun Seafood Village", ll: [22.2849, 114.2391] },
      { t: "19:00", en: "Plan B: Mak Man Kee & Kai Kai", wiki: ["Wonton noodles", "Tong sui"], zh: "麥文記 · 佳佳甜品", area: "Jordan", kind: "backup",
        say: "Too tired for Lei Yue Mun, so dinner close to home: wonton noodles at Mak Man Kee, then dessert at Kai Kai.",
        about: "If the day runs long: Mak Man Kee is a classic wonton noodle shop on Parkes Street, and Kai Kai is a traditional Cantonese dessert shop on Ning Po Street. Hot pot near Jordan is the other option.",
        facts: [
          "Traditional wonton noodles are served in a small bowl, with the wontons hidden under the noodles.",
          "Cantonese tong sui (糖水, 'sugar water') desserts include sweet soups served hot or cold."
        ],
        order: [["Wonton noodles", "雲吞麵"], ["Black sesame soup", "芝麻糊"], ["Sweet potato ginger soup", "番薯糖水"]],
        go: "Mak Man Kee: 51 Parkes Street. Kai Kai: 29 Ning Po Street. Both near the Airbnb.",
        q: "Mak Man Kee Noodle Shop 51 Parkes Street Jordan", ll: [22.3054, 114.1706] }
    ]
  },
  {
    id: "wed", date: "2026-12-02", dow: "Wed", dom: "2", color: "#7d499d", line: "Macau purple",
    title: "Macau day trip",
    route: "Kennedy Town → Macau old town → Taipa → Coloane → Cotai",
    intro: "Passport day! I'm getting the ferry to Macau: Portuguese-Chinese old town, minchi and African chicken for lunch, the original Lord Stow's egg tart, and the Cotai lights tonight.",
    items: [
      { leg: 1, t: "06:25", mode: "MTR", text: "Jordan → Admiralty (Tsuen Wan line), change to Island line → Kennedy Town, about 25 min." },
      { t: "07:00", en: "Sun Hing", wiki: ["Custard bun", "Dim sum"], zh: "新興食家", area: "Kennedy Town", kind: "food",
        say: "It's 7am and this dim sum place has been open since 3. Here for the custard buns that ooze.",
        about: "An old-school dim sum shop in Kennedy Town that opens before dawn, popular with early workers and night owls. Known for its molten salted-egg custard buns.",
        facts: [
          "It opens at 3am and closes in the afternoon, which makes it a favourite for night owls and early workers.",
          "Lau sa bao (流沙包) means 'flowing sand bun', for the molten salted-egg-yolk custard inside."
        ],
        order: [["Molten custard buns", "流沙包"], ["Siu mai", "燒賣"], ["Char siu buns", "叉燒包"]],
        tip: "Bring cash. Bring your passport for Macau.",
        go: "8 Smithfield Road, Kennedy Town. Short walk from Kennedy Town station.",
        q: "Sun Hing Restaurant 8 Smithfield Road Kennedy Town", ll: [22.2843, 114.1290] },
      { leg: 1, t: "07:40", mode: "MTR", text: "Kennedy Town → Sheung Wan, Island line. Hong Kong–Macau Ferry Terminal (Shun Tak Centre) by 08:00." },
      { leg: 1, t: "08:30", mode: "Ferry", text: "Hong Kong–Macau Ferry Terminal → Macau Outer Harbour, about 1 hour. Passport through immigration on both sides." },
      { t: "10:00", en: "Ruins of St. Paul's & Senado Square", wiki: ["Ruins of Saint Paul's", "Senado Square"], zh: "大三巴牌坊 · 議事亭前地", area: "Macau", kind: "sight",
        say: "Welcome to Macau! This is the Ruins of St. Paul's: just a front wall left standing, and it's one of the most famous sights in Asia.",
        about: "The Ruins of St. Paul's are the stone facade of a 17th-century church, all that survived a fire. Downhill, Senado Square is paved in wavy black-and-white Portuguese tiles and lined with pastel colonial buildings.",
        facts: [
          "The church was built between 1602 and 1640. A fire during a typhoon in 1835 destroyed it, leaving only the front and the stairs.",
          "The Historic Centre of Macao became a UNESCO World Heritage Site in 2005.",
          "Macau was administered by Portugal until December 1999.",
          "Senado Square's wavy paving is Portuguese calçada, made of small stones."
        ],
        order: [["Pork jerky (on the street up to the Ruins)", "豬肉乾"], ["Almond cookies", "杏仁餅"]],
        go: "Taxi or bus from the Outer Harbour Ferry Terminal, about 15 min.",
        q: "Ruins of St. Paul's Macau", ll: [22.1975, 113.5409] },
      { leg: 1, t: "12:30", mode: "Bus", text: "Bus or taxi to Taipa Village, about 20–30 min." },
      { t: "13:00", en: "Taipa Village", wiki: ["Taipa Village", "Galinha à africana"], zh: "氹仔舊城區", area: "Taipa, Macau", kind: "food",
        say: "Sit-down Macanese lunch in Taipa: minchi and African chicken. Then a pork chop bun, because obviously.",
        about: "Taipa's old village is a few lanes of colonial houses, churches and food shops, with Rua do Cunha as the main food street. Macanese cooking mixes Portuguese and Cantonese food with spices from Portugal's old trading routes.",
        facts: [
          "Macanese food blends Portuguese, Chinese, African, Indian and Southeast Asian influences.",
          "Minchi, minced meat with diced potato and a fried egg, is a Macanese home-cooking classic.",
          "African chicken is a Macau dish, despite the name. Its origin is debated: one popular story credits a hotel chef in the 1940s."
        ],
        order: [["Minchi", "免治"], ["African chicken", "非洲雞"], ["Pork chop bun", "豬扒包"], ["Almond cookies", "杏仁餅"]],
        tip: "Tai Lei Loi Kei (大利來記) in Taipa is famous for pork chop buns.",
        go: "Rua do Cunha, Taipa.",
        q: "Rua do Cunha Taipa Macau", ll: [22.1535, 113.5566] },
      { leg: 1, t: "15:00", mode: "Bus", text: "Bus to Coloane Village, about 20 min." },
      { t: "15:20", en: "Lord Stow's Bakery", wiki: ["Lord Stow's Bakery", "Pastel de nata"], zh: "安德魯餅店", area: "Coloane, Macau", kind: "food",
        say: "The original Lord Stow's in Coloane, home of the Macau egg tart. Burnt top, flaky pastry. Let's go.",
        about: "A small bakery in Coloane Village that made the Portuguese-style egg tart famous in Macau. Coloane is the quiet, southern end of Macau, with a waterfront village and a small chapel square.",
        facts: [
          "Lord Stow's was opened in 1989 by Andrew Stow, an English pharmacist.",
          "The 'Lord' was a nickname from his Portuguese friends in Macau.",
          "He based the tart on Portugal's pastel de nata, but used cream in the custard."
        ],
        order: [["Portuguese egg tart", "葡撻"]],
        go: "1 Rua do Tassara, Coloane Village.",
        q: "Lord Stow's Bakery Coloane", ll: [22.1173, 113.5587] },
      { leg: 1, t: "16:30", mode: "Bus", text: "Bus or taxi to the Cotai Strip, about 15 min." },
      { t: "17:00", en: "Cotai Strip", wiki: ["Cotai Strip", "The Venetian Macao"], zh: "路氹金光大道", area: "Cotai, Macau", kind: "sight",
        say: "Cotai at night: giant resorts, fake Venice, and more lights than anywhere I've been this week.",
        about: "A strip of giant casino resorts built on reclaimed land between Taipa and Coloane. The lights come on after sunset.",
        facts: [
          "Cotai is named from COloane + TAIpa, the two islands it joined.",
          "The Venetian Macao, which opened in 2007, has indoor canals with gondola rides."
        ],
        go: "Bus or taxi from Coloane.",
        q: "Cotai Strip Macau", ll: [22.1475, 113.5600] },
      { leg: 1, t: "20:00", mode: "Ferry", text: "Taipa Ferry Terminal → Hong Kong (book ahead), then MTR home. Backup: the bridge bus runs around the clock." }
    ]
  },
  {
    id: "thu", date: "2026-12-03", dow: "Thu", dom: "3", color: "#9a3b26", line: "Tuen Ma brown",
    title: "East Kowloon & fly to Manila",
    route: "Kowloon Station → Kowloon City → Wong Tai Sin → Diamond Hill → airport",
    intro: "Last morning in Hong Kong! Bags are checked in already, so it's a hands-free morning: Kowloon Walled City, two temples, one last dim sum, and then Manila.",
    items: [
      { t: "06:45", en: "In-town check-in, Kowloon Station", wiki: ["Kowloon station (MTR)", "Airport Express (MTR)"], zh: "九龍站市區預辦登機", area: "West Kowloon", kind: "hub",
        say: "Checking my bags in at Kowloon Station, hours before the flight, so I can spend the morning exploring with nothing to carry.",
        about: "Airport Express stations offer in-town check-in, so you can drop bags in the city and ride to the airport later. Cathay's counter here is open 06:00–15:00.",
        facts: [
          "In-town check-in means your bags travel to the airport without you."
        ],
        tip: "Tap in with Octopus or a card at the in-town check-in gate. The Airport Express fare is charged here; use the same card later.",
        go: "Check out, walk to Kowloon Station, about 15 min.",
        q: "Kowloon Station In-Town Check-in", ll: [22.3049, 114.1615] },
      { leg: 1, t: "07:15", mode: "MTR", text: "Walk to Austin station, Tuen Ma line → Sung Wong Toi, about 12 min." },
      { t: "07:30", en: "Kowloon Walled City Park", wiki: ["Kowloon Walled City Park", "Kowloon Walled City"], zh: "九龍寨城公園", area: "Kowloon City", kind: "sight",
        say: "This peaceful park used to be the Kowloon Walled City, once the most densely populated place on Earth.",
        about: "A Chinese garden built on the site of the Kowloon Walled City, a lawless, extremely crowded enclave that was demolished in the 1990s. Parts of the old South Gate and the former yamen (government office) remain. Then breakfast in Kowloon City, known for its Thai food.",
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
        say: "Wong Tai Sin Temple, where people come to ask about their future. Let's see what the sticks say about mine.",
        about: "One of Hong Kong's busiest temples, dedicated to the Taoist deity Wong Tai Sin. People shake a cylinder of numbered bamboo sticks until one falls out, then have it interpreted.",
        facts: [
          "The temple's famous promise is 'what you ask for, you get' (有求必應).",
          "Shaking the fortune sticks is called kau chim (求籤)."
        ],
        go: "Next to Wong Tai Sin MTR station.",
        q: "Wong Tai Sin Temple", ll: [22.3423, 114.1935] },
      { leg: 1, t: "09:50", mode: "MTR", text: "Wong Tai Sin → Diamond Hill, Kwun Tong line, 1 stop." },
      { t: "10:00", en: "Chi Lin Nunnery & Nan Lian Garden", wiki: ["Chi Lin Nunnery", "Nan Lian Garden"], zh: "志蓮淨苑 · 南蓮園池", area: "Diamond Hill", kind: "sight",
        say: "Chi Lin Nunnery: a wooden temple built without a single nail. And the garden next door is beautiful.",
        about: "A Buddhist nunnery rebuilt in the 1990s in Tang dynasty style, with a classical Chinese garden, Nan Lian, next to it, complete with a golden pavilion and ponds.",
        facts: [
          "The nunnery was founded in 1934 and rebuilt in Tang dynasty style in 1998, with interlocking timber joints and no nails.",
          "Nan Lian Garden is laid out in the style of a Tang dynasty garden."
        ],
        go: "Short walk from Diamond Hill station.",
        q: "Chi Lin Nunnery Diamond Hill", ll: [22.3403, 114.2048] },
      { t: "11:15", en: "Last dim sum, Diamond Hill", wiki: ["Dim sum"], zh: "鑽石山點心", area: "Diamond Hill", kind: "food",
        say: "Last meal in Hong Kong. It has to be dim sum.",
        facts: [],
        order: [["Shrimp dumplings", "蝦餃"], ["Siu mai", "燒賣"], ["Char siu buns", "叉燒包"], ["Rice rolls", "腸粉"]],
        go: "Near Diamond Hill station.",
        q: "dim sum Diamond Hill", ll: [22.3400, 114.2015] },
      { leg: 1, t: "12:15", mode: "MTR", text: "Diamond Hill → Austin, Tuen Ma line, then walk to Kowloon Station." },
      { leg: 1, t: "12:50", mode: "Airport Express", text: "Kowloon → Airport with the same card, at the airport about 13:20." },
      { t: "16:05", en: "CX903 to Manila", wiki: ["Cathay Pacific", "Hong Kong International Airport"], zh: "國泰航空 CX903", area: "Hong Kong International Airport", kind: "hub",
        say: "That's Hong Kong done. Next stop, Manila.",
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
