---
layout: page
title: Let's Put People Over Parking
# description: "Your friends at Strong Towns Nanaimo are asking Nanaimo City Council and Staff to put #PeopleOverParking. It's time to rethink our parking mandates and create a more sustainable, equitable, and vibrant city. Learn more about our proposal and how you can help make it a reality."
permalink: /parking
# image: '/images/campaigns/people-over-parking/people-over-parking-header.png'
toc: true
---

We need your help to make this vision a reality. By sending an email to Nanaimo City Council, you can show your support for parking reform and help shape the future of our city. Use the form below to send a message to Nanaimo City Council expressing your support for the proposed motions. You can choose from a selection of template letters or write your own message.

<form style="margin-bottom: 32px;" >
    <input type="hidden" class="campaign-input" name="_subject" id="_subject" name="_subject">
    <input type="hidden" class="campaign-input" name="_from" id="_from" name="_from">
    <input class="campaign-input" type="text" id="name" name="name" placeholder="Your Name (eg. Johny The Housing Activist)" required>
    <input class="campaign-input" type="email" id="email" name="email" placeholder="Your Email Address (eg. iwanthousing@gmail.com)" required>
    <select style="display:none;visibility:hidden;" id="template" name="template" required>
        <option value="">-- Select a template --</option>
        <option value="template1">Template 1</option>
        <option value="template2">Template 2</option>
        <option value="template3">Template 3</option>
        <option value="template4">Template 4</option>
        <option value="template5">Template 5</option>
        <option value="template6">Template 6</option>
        <option value="template7">Template 7</option>
        <option value="template8">Template 8</option>
        <option value="template9">Template 9</option>
        <option value="template10">Template 10</option>
        <option value="template11">Template 11</option>
        <option value="template12">Template 12</option>
        <option value="template13">Template 13</option>
        <option value="template14">Template 14</option>
        <option value="template15">Template 15</option>
        <option value="template16">Template 16</option>
        <option value="template17">Template 17</option>
        <option value="template18">Template 18</option>
        <option value="template19">Template 19</option>
        <option value="template20">Template 20</option>
        <option value="template21">Template 21</option>
    </select>
    <button style="background-color: #48687a;" class="campaign-submit" type="button" id="randomizeBtn">Generate A New Message</button>
    <input type="hidden" name="_to" value="michael@bassi.li">
    <textarea class="campaign-message" id="message" name="message" rows="10" required></textarea>
    <button class="campaign-submit" type="submit">Send Your Message To Mayor & Council</button>
    <input type="hidden" name="_captcha" value="false">
</form>

<script>
  const templateLetters = {
    template1: "Mayor and Council, eliminating mandatory parking requirements is crucial to solving Nanaimo's housing crisis. These mandates inflate development costs by forcing developers to dedicate valuable land to parking instead of much-needed housing. Without them, builders could provide more units, increasing housing supply and making homes more affordable. Parking mandates hinder the construction of affordable and diverse housing options, so by abolishing them, we can create more livable, affordable communities for all. Thank you for your time, and I urge you to seriously consider this proposal for the benefit of Nanaimo’s future.",
    template2: "I urge you to support Strong Towns Nanaimo's call to abolish parking mandates because they create unnecessary obstacles for small businesses. Entrepreneurs already struggle with high startup costs, and parking requirements only add to the financial burden. By requiring parking spaces that often go unused, we make it harder for local businesses to open and operate, especially in dense, walkable neighbourhoods. Removing these barriers will make it easier for local businesses to thrive and create a more vibrant local economy. Thank you for considering this important change that will empower Nanaimo’s small business community.",
    template3: "Our city’s valuable land is being wasted on empty parking lots, and that’s why I support abolishing parking mandates. These vast, unused spaces contribute little to the community, while they could instead be used for housing, green spaces, or local businesses. Eliminating parking mandates will free up land for more productive and engaging purposes, fostering a more walkable, community-focused urban environment that benefits all residents. Thank you for your time, and I hope you will give this proposal thoughtful consideration for the future of our city.",
    template4: "I believe that abolishing parking mandates is essential for fostering local economic growth. By requiring excessive parking, we reduce the space available for shops, housing, and other productive uses that would generate more economic activity. This hurts local businesses and limits opportunities for economic development. Removing these mandates will allow land to be used more efficiently, creating vibrant urban areas that attract businesses and residents alike. Thank you for considering this important step toward a more dynamic and prosperous Nanaimo.",
    template5: "I believe parking mandates are stifling Nanaimo’s potential, which is why I support their removal. By forcing developers to prioritize parking, we limit their ability to create diverse, human-centered developments. These requirements result in more concrete and less community space, reducing the vibrancy and character of our city. By removing parking mandates, we can encourage innovative, people-oriented urban design that makes Nanaimo a more inviting and economically productive place to live. Thank you for your time and dedication to improving our community, and I hope you will consider this important proposal.",
    template6: "I stand with Strong Towns Nanaimo in advocating for the removal of parking mandates because they make housing less affordable. When developers are required to include parking, the added costs are passed on to tenants and homebuyers, making homes more expensive for everyone. This is especially problematic for those who don’t even own cars. Removing these mandates would help reduce housing costs and provide more equitable access to affordable housing across the city. Thank you for your time, and I encourage you to consider this positive change for our growing community.",
    template7: "I support abolishing parking mandates because they encourage unnecessary car dependency. By requiring parking in every development, we reinforce the idea that cars are the default mode of transportation. This undermines efforts to promote alternative, more sustainable transportation options like public transit, cycling, and walking. Eliminating these mandates will help create a city that supports more sustainable, healthier ways of getting around, reducing congestion and pollution. Thank you for considering this change that will make Nanaimo a greener, more livable city.",
    template8: "Parking mandates are holding back infill development in Nanaimo, and that’s why I believe they should be abolished. These requirements make it harder to build in established neighbourhoods, where space is already limited. Instead of using land for more housing or businesses, developers are forced to provide parking. Abolishing parking mandates will allow for smarter, more efficient infill development, which is critical to meeting our city’s growing housing needs while reducing sprawl. Thank you for your time, and I encourage you to consider this smart, forward-thinking proposal.",
    template9: "Nanaimo’s future should prioritize people, not cars, which is why I support removing parking mandates. These mandates lead to parking lots that take up valuable land that could be better used for parks, public spaces, or affordable housing. By eliminating parking requirements, we can repurpose this land for community-focused spaces that promote social interaction, improve quality of life, and make our city more livable. Thank you for your time, and I hope you will consider this proposal that prioritizes the needs of our community.",
    template10: "Parking mandates contribute to urban sprawl, and I believe they should be abolished to create a more sustainable Nanaimo. When parking is prioritized over people, developers are forced to build outward, increasing distances between housing, jobs, and services. This leads to a car-dependent city, higher infrastructure costs, and less walkability. By eliminating parking mandates, we can encourage denser, more sustainable development that benefits the entire community, both economically and environmentally. Thank you for considering this proposal, which will help create a more connected and sustainable city.",
    template12: "Mayor and Council, I fully support the removal of parking mandates as they make it more difficult to develop affordable housing. When developers are required to build parking spaces, it drives up construction costs and takes away land that could be used for housing. With fewer parking mandates, we can create more housing units, helping to address the housing shortage in Nanaimo. By reducing this burden, we can make it easier for people of all income levels to find a place to live. Thank you for your time, and I hope you consider this proposal to make housing more accessible for all.",
    template13: "I believe abolishing parking mandates is a crucial step toward encouraging local entrepreneurship. Small businesses often operate on limited budgets, and mandatory parking spaces increase their overhead costs significantly. Many businesses don’t need as much parking as the mandates require, and the land could be better used to expand their services or enhance the customer experience. By removing these requirements, Nanaimo can foster a more business-friendly environment. Thank you for your time, and I urge you to consider this change for the benefit of local businesses.",
    template14: "Mayor and Council, eliminating mandatory parking requirements will create more opportunities for thoughtful urban development. Parking lots often sit empty, contributing nothing to the surrounding community. Instead, this land could be used for housing, parks, or public spaces that benefit residents. Reducing parking mandates will allow developers to make better use of available land, creating vibrant, mixed-use areas that enhance the quality of life in Nanaimo. Thank you for your time and for considering this forward-thinking approach to urban planning.",
    template15: "I strongly support the removal of parking mandates because they disproportionately affect people who do not drive. Many residents rely on public transit, walking, or biking as their primary modes of transportation. Yet, they are still burdened by the costs of parking that they do not use. Removing these mandates will make housing more affordable for everyone, especially those who don’t own cars. Thank you for your time, and I hope you will consider this equitable policy change for a more inclusive Nanaimo.",
    template16: "I support the removal of parking mandates because they limit our ability to create pedestrian-friendly neighbourhoods. Parking lots dominate urban spaces, making them less inviting and harder to navigate on foot. By eliminating these mandates, we can prioritize walkability, public spaces, and transit access. This shift would make Nanaimo a more livable, vibrant city, where people can enjoy their neighbourhoods without being forced to rely on cars. Thank you for your time, and I encourage you to support this important step toward a more walkable city.",
    template17: "Removing parking mandates is essential for promoting more sustainable transportation options in Nanaimo. When we require parking spaces in all developments, we make car use the default mode of transportation. However, many residents want to rely more on public transit, cycling, or walking. Eliminating parking mandates will encourage more sustainable habits and reduce our city’s environmental footprint. Thank you for your time, and I hope you will consider this environmentally responsible proposal.",
    template18: "Mayor and Council, I support Strong Towns Nanaimo’s call to abolish parking mandates because they limit the density of development in our city. Parking requirements mean developers have to spread out their projects to accommodate cars, rather than focusing on building up and using land efficiently. By removing parking mandates, we can encourage denser, more efficient developments that support a broader range of housing options and make better use of infrastructure. Thank you for considering this critical change for a more efficient and inclusive city.",
    template19: "I believe parking mandates should be abolished because they prioritize cars over the needs of the community. Large parking lots create urban spaces that are dominated by vehicles rather than people, making neighbourhoods less walkable and less engaging. By removing these mandates, we can reclaim urban spaces for people, creating more parks, plazas, and community-focused areas that benefit everyone. Thank you for your time, and I urge you to consider this important shift toward a people-first urban design.",
    template20: "I support abolishing parking mandates because they are a financial burden on developers and homebuyers alike. The costs of creating parking spaces are ultimately passed on to consumers, making both housing and commercial space more expensive. This is an unnecessary burden, especially in areas where many residents may not need parking at all. By removing these mandates, we can lower costs and make housing and businesses more accessible. Thank you for your time, and I hope you consider this proposal to create a more affordable Nanaimo.",
    template21: "Mayor and Council, I strongly support the elimination of parking mandates because they do not align with our city's sustainability goals. Requiring parking in every development encourages more driving and makes it harder for people to choose greener transportation options. Removing parking mandates would send a clear signal that Nanaimo is committed to creating a sustainable future by promoting alternatives to car travel. Thank you for your time, and I hope you will support this environmentally conscious proposal to help build a more sustainable city.",
  };
  const templateSelect = document.getElementById('template');
  const messageTextarea = document.getElementById('message');
  const randomizeBtn = document.getElementById('randomizeBtn');
  function setRandomTemplate() {
    const templateKeys = Object.keys(templateLetters);
    const randomKey = templateKeys[Math.floor(Math.random() * templateKeys.length)];
    templateSelect.value = randomKey;
    messageTextarea.value = templateLetters[randomKey];
  }
  window.onload = setRandomTemplate;
  templateSelect.addEventListener('change', function() {
    const selectedTemplate = this.value;
    messageTextarea.value = templateLetters[selectedTemplate] || '';
  });
  randomizeBtn.addEventListener('click', setRandomTemplate);
  document.querySelector('form').addEventListener('submit', function() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;
        var subject = name + " - Support for People Over Parking";
        window.location.href = "mailto:mayor.council@nanaimo.ca?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(message);
    });
</script>

You can also email [mayor.council@nanaimo.ca](mailto:mayor.council@nanaimo.ca) directly as well.

***

Nanaimo is at a pivotal moment—today's decisions on parking mandates will determine the future of urban development, livability, and sustainability in our city. As highlighted in this paper, the existing parking requirements have widespread negative impacts on housing affordability, urban design, municipal budgets, and environmental well-being.

<div style="margin-bottom:32px;">
<a target="_blank" href="/reports/people-over-parking-2024-09-01.pdf">
  <div style="height:100%;z-index: 10;border-radius: 60px !important;" id="parking-victoria-button">
    <div class="parking_banner_bg lazy loaded" data-bg="" data-ll-status="entered">
      <div id="parking_banner_text">
        Download The "People Over Parking" Report!
      </div>
    </div>
  </div>
</a>
</div>

Nanaimo has already solved the housing crisis… _for cars_. Strong Towns Nanaimo & friends are asking Nanaimo City Council and Staff to put people over parking.

- [What The Heck Are Mandatory Parking Requirements And Why Are They So Bad?](#what-the-heck-are-mandatory-parking-requirements-and-why-are-they-so-bad)
- [Our Proposal For Parking Reform In Nanaimo](#our-proposal-for-parking-reform-in-nanaimo)
- [See Where Parking Reform Has Already Happened](#see-where-parking-reform-has-already-happened)
- [Words From Community Supporters Our Proposal](#hear-from-groups-in-nanaimo-and-beyond-that-support-our-proposal-for-parking-reform)
- [Read Letters Of Support For Our Proposal](#read-letters-of-support-for-our-proposal)

# What The Heck Are Mandatory Parking Requirements And Why Are They So Bad?

Parking mandates are regulations that require developers to provide a certain number of parking spaces for each new building they construct. These requirements are intended to ensure that there is enough parking available for residents, customers, and employees. However, they often result in an overabundance of parking, which can have negative consequences for urban development, housing affordability, and the environment. Municipal parking requirements were initially implemented in a time when personal automobiles were assumed to be the best and primary mode of transportation.

> “The right to access every building in a city by private motorcar in an age when everyone owns such a vehicle, is actually the right to destroy the city.” &mdash; Lewis Mumford, 1961

We have learned much about equity, finance, and the environment since those days and it is clear—parking minimums are a subsidy to the automobile which comes as a detriment to nearly everyone in society, including those who drive them. Parking minimums were created with the specific intent to alleviate on-street parking congestion. Ultimately, however, these regulations have resulted in an overabundance of parking infrastructure, leading to a host of urban planning challenges. By embracing reform, we have the opportunity to create a more equitable, economically robust, and environmentally sustainable Nanaimo. The time to act is now, and with the support of policymakers, planners, and the community, we can build a city that truly reflects our shared values and aspirations. 

![Our contribution to Park(ing) Day 2024. Strong Towns Nanaimo transformed a single parking space into an outdoor living room, complete with a TV, seating, board games, Twister, and more! (Strong Towns Nanaimo)](/images/campaigns/people-over-parking/parking-day-1.jpg){:loading="lazy"}
*Our contribution to Park(ing) Day 2024. Strong Towns Nanaimo transformed a single parking space into an outdoor living room, complete with a TV, seating, board games, Twister, and more! (Strong Towns Nanaimo)*


## Our Proposal For Parking Reform In Nanaimo

Two draft proposals for parking reform are being brought to the Governance and Priorities Committee. The two proposals are:

- Motion to change the word “required” to “recommended” in Section 7.3.3 Off-Street Parking Regulations Bylaw 2018 No. 7266, **OR**...
- Motion to expand section 7.3.(i) of the Off-Street Parking Regulations Bylaw 2018 No. 7266.03. (Transit- Oriented Areas) to cover all reliable and regular bus stops (defined by BC Transit as services of “at least 30 minutes at peak commute times.”) Source: RDN Transit Future Plan 2022.

These motions independently seek to rectify the adverse impacts of our current parking provisions and foster sustainable, equitable, beautiful, and prosperous urban development in our beloved city.

![We have allowed our city to be dominated by auto-oriented uses, leading to unpleasant, dangerous, and unproductive urban spaces. Our off-street parking bylaws have been built to favour stip malls over vibrant urban areas. (Google Maps)](/images/campaigns/people-over-parking/woodgrove-parking-1.png){:loading="lazy"}
*We have allowed our city to be dominated by auto-oriented uses, leading to unpleasant, dangerous, and unproductive urban spaces. Our off-street parking bylaws have been built to favour stip malls over vibrant urban areas. (Google Maps)*

## See Where Parking Reform Has Already Happened

While to many Canadians and residents of Nanaimo, market-controlled parking might seem unthinkable, Parking reform is anything but new. Below is a map of all cities in North America that have removed their parking mandates or relaxed their parking requirements city-wide.

<div style="border: 1px solid var(--border-second-color) !important;box-shadow: 0 0 30px rgba(0,0,0,.3);margin-bottom: 32px;border-radius: 10px;">
    <iframe src="https://parkingreform.org/mandates-map" width="100%" height="100%"></iframe>
</div>

Parking reform isn’t fringe–momentum is building across North America for change. Canadian cities as large as Toronto, O.N. (population 2,794,356) to towns as small as Lunenburg, N.S. (population 2,263) have discovered the potential that eliminating parking mandates holds.

## Hear From Groups In Nanaimo And Beyond That Support Our Proposal For Parking Reform

We are proud to have the support of dozens of organizations and individuals from Nanaimo and across North America. We are grateful for their support and look forward to working with them to make our vision a reality. Here are some quotes from groups that have endorsed our proposal:

> "Adam Smith invented the invisible hand, but city planners seem to prefer the hiding hand. Minimum parking requirements hide the cost of parking in higher prices for everything else. Most of us don’t know it, but we all pay for free parking." &mdash; Donald Shoup

> "Parking requirements limit the feasibility of Small-Scale, Multi-Unit Homes by reducing available space for liveable areas. The result of this is unnecessarily inflated housing costs. By providing flexibility around parking, the city allows both industry and homebuyers to make their own decisions on the tradeoffs between parking, living space, and affordability." &mdash; Small Housing BC

> "Parking minimums add significant expense to new housing. Surface parking requires homebuilders to purchase more land or build fewer units, while underground parking can cost as much as $120k per stall. These costs are passed down to the eventual owners orrenters of these buildings,regardless of their vehicle storage needs." &mdash; More Homes Canada

> "Strong Towns Nanaimo has identified a profound disincentive for infill development and we support their efforts to recommend changes to this anachronistic bylaw." &mdash; Masthead Properties

> "While vast amounts of free parking might seem like a benefit, it's not free at all. The cost is borne by everyone, and it's a cost that your city, especially in its current budgetary situation, can ill afford." &mdash; Charles Marohn, Strong Towns

We've met with developers, architects, planners, and other stakeholders to discuss the benefits of parking reform. We've also hosted community events to raise awareness about the issue and build support for our proposal. We are confident that with the support of these groups and individuals, we can make parking reform a reality in Nanaimo. **Builders, business owners and residents alike all agree: it's time to put people over parking.**

## Read Letters Of Support For Our Proposal

We have received letters of support from a variety of organizations and individuals who believe in the importance of parking reform. Some of these letters are included below:

- 🏙️ [Happy Cities](/documents/campaigns/parking/happy-cities-letter-of-support-for-parking-reform.pdf) - Submitted on October 16th, 2024
- 🏠 [Small Housing BC](/documents/campaigns/parking/small-housing-bc-letter-of-support-for-parking-reform.pdf) - Submitted on September 20th, 2024
- 🏙️ [More Homes Canada](/documents/campaigns/parking/more-homes-canada-letter-of-support-for-parking-reform.pdf) - Submitted on September 14th, 2024
- 👑 [Donald Shoup](/documents/campaigns/parking/donald-shoup-letter-of-support-for-parking-reform.pdf) - Submitted on September 12th, 2024
- 🚲 [Strong Towns (US)](/documents/campaigns/parking/strong-towns-letter-of-support-for-parking-reform.pdf) - Submitted on September 11th, 2024

We are grateful for the support of these organizations and look forward to working with them to make parking reform a reality in Nanaimo. Note that these letters are just a small sample of the many organizations and individuals who have endorsed our proposal. We are proud to have the support of so many diverse groups and individuals who share our vision for a more sustainable, equitable, and vibrant Nanaimo. However, not all letters of support are public, and some _organizations have requested that their support remain private_.

***