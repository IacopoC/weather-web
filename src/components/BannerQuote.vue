<script>
export default {
  name: "BannerQuote",
  data() {
    return {
      texts: [
        { quote: "“Weather forecast for tonight: dark.”", author: "George Carlin" },
        { quote: "“Going to the woods is going home, for I suppose we came from the woods originally. But in some of nature’s forests, the adventurous traveler seems a feeble, unwelcome creature; wild beasts and the weather trying to kill him, the rank, tangled vegetation, armed with spears and stinging needles, barring his way and making life a hard struggle.”", author: "John Muir" },
        { quote: "“If enough people think of a thing and work hard enough at it, I guess it’s pretty nearly bound to happen, wind and weather permitting.”", author: "Laura Ingalls Wilder" },
        { quote: "“I don’t have to get up in the morning and go beat up my body like I used to. I don’t have to be out there in August in 108 degree weather down in Texas.”", author: "Emmitt Smith" },
        { quote: "“Climate is what we expect, weather is what we get.”", author: "Mark Twain" },
        { quote: "“All the world lies warm in one heart, yet the Sierra seems to get more light than other mountains. The weather is mostly sunshine embellished with magnificent storms, and nearly everything shines from base to summit – the rocks, streams, lakes, glaciers, irised falls, and the forests of silver fir and silver pine.”", author: "John Muir" },
        { quote: "“In the Spring, I have counted 136 different kinds of weather inside of 24 hours.”", author: "Mark Twain" }
      ]
    };
  },
  computed: {
    dailyQuote() {
      const today = new Date().getDay();
      return this.texts[today];
    }
  }
}
</script>

<template>
  <div class="my-5">
    <div class="h-100p" id="weatherquotes"></div>
    <div class="p-5 bg-body-tertiary">
      <div class="container py-2">
        <h4>Quote of the day</h4>
        <figure>
          <blockquote class="blockquote">
            <p>{{ dailyQuote.quote }}</p>
          </blockquote>
          <figcaption class="blockquote-footer">
            Author: <cite title="Source Title">{{ dailyQuote.author }}</cite>
          </figcaption>
        </figure>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>