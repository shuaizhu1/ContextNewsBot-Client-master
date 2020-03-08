$(function() {
    const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    console.log(location.host)
    if (location.host == "twitter.com") {
      var clickLogic = function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;

        console.log(target.parentElement.parentNode.children[1].children[1].innerText)
        console.log(text);
        var titleObj = target.parentElement.parentNode.children[1].children[1].innerText.split(/\r?\n/);
        var obj = {
          entity: titleObj[0],
          entityTag: titleObj[1],
          body: text,
          type: "twitter"
        }
        console.log(JSON.stringify(obj))
        $.post("https://webhook.site/3fae51a7-3652-4ddc-b348-3d3fada05c0d",
        obj,
        function(data, status){
          console.log("Data: " + data + "\nStatus: " + status);
          data = {
            "articles": [
              {
                "author": "Bob Brigham",
                "content": "The Associated Press issued a bombshell report on Saturday evening that the White House overruled medical experts who had sought to issue a warning to America's seniors.\r\n\"The White House overruled health officials who wanted to recommend that elderly and phy\u2026 [+1536 chars]",
                "description": "White House reportedly overruled health officials who had urgent coronavirus warning for America\u2019s seniors",
                "publishedAt": "2020-03-08T09:00:01Z",
                "source": {
                  "id": null,
                  "name": "Salon.com"
                },
                "title": "Trump administration blocked health officials' urgent coronavirus warning: report",
                "url": "https://www.salon.com/2020/03/08/trump-administration-blocked-health-officials-urgent-coronavirus-warning-report_partner/",
                "urlToImage": "https://media.salon.com/2020/01/donald-trump-0131201.jpg"
              },
              {
                "author": "Bob Brigham",
                "content": "The Associated Press issued a bombshell report on Saturday evening that the White House overruled medical experts who had sought to issue a warning to America\u2019s seniors.\r\n\u201cThe White House overruled health officials who wanted to recommend that elderly and phy\u2026 [+1247 chars]",
                "description": "The Associated Press issued a bombshell report on Saturday evening that the White House overruled medical experts who had sought to issue a warning to America\u2019s seniors. \u201cThe White House overruled health officials who wanted to recommend that elderly and phys\u2026",
                "publishedAt": "2020-03-08T03:05:23Z",
                "source": {
                  "id": null,
                  "name": "Rawstory.com"
                },
                "title": "White House overruled health officials who had urgent coronavirus warning for America\u2019s seniors: report",
                "url": "https://www.rawstory.com/2020/03/white-house-overruled-health-officials-who-had-urgent-coronavirus-warning-for-americas-seniors-report/",
                "urlToImage": "https://www.rawstory.com/wp-content/uploads/2019/10/trump-afp-6.jpg"
              },
              {
                "author": null,
                "content": "To contain coronavirus, Italy will limit movement across much of its northern region, including the cities of Milan and Venice. The measures, the most drastic outside of China, place significant restrictions on 16 million people in a broad area that is Italys\u2026 [+89652 chars]",
                "description": "The measures in Italy, the most drastic outside of China, place significant restrictions in a broad area that is the country's economic engine.",
                "publishedAt": "2020-03-06T22:05:00Z",
                "source": {
                  "id": null,
                  "name": "Msn.com"
                },
                "title": "Live updates: Top US officials say testing total unclear as death toll rises to 19 - msnNOW",
                "url": "https://www.msn.com/en-us/news/world/live-updates-top-us-officials-say-testing-total-unclear-as-death-toll-rises-to-19/ar-BB10RsFM?li=BBnb7Kz",
                "urlToImage": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BB10T0WB.img?h=630&w=1200&m=6&q=60&o=t&l=f&f=jpg"
              },
              {
                "author": "Anne Laurie",
                "content": "by Anne Laurie|\u00a0\u00a0March 8, 20205:25 am| Leave a Comment\r\nThis post is in:\u00a0C.R.E.A.M., COVID-19 Coronavirus, Healthcare, Republican Stupidity, Republican Venality, World's Best Healthcare (If You Can Afford It)\r\nTop infectious disease experts are advising peopl\u2026 [+6540 chars]",
                "description": "Top infectious disease experts are advising people aged 60 and up to strongly consider avoiding activities that involve large crowds \u2014 traveling by airplane, going to movie theaters, attending family events, shopping at crowded malls and religious services ht\u2026",
                "publishedAt": "2020-03-08T09:25:49Z",
                "source": {
                  "id": null,
                  "name": "Balloon-juice.com"
                },
                "title": "COVID-19 Update (Domestic Edition) \u2013 Saturday/Sunday, March 7/8",
                "url": "https://www.balloon-juice.com/2020/03/08/covid-19-update-domestic-edition-saturday-sunday-march-7-8/",
                "urlToImage": "https://www.balloon-juice.com/wp-content/uploads/2015/07/tunchiswatching-1024x768.jpg"
              },
              {
                "author": null,
                "content": "(Bloomberg) -- More coronavirus cases were reported in countries other than China in the past 24 hours for the first time, the World Health Organization said, a significant development as new cases spread around the globe.\r\nU.S. health authorities said theyve\u2026 [+10391 chars]",
                "description": "(Bloomberg) -- More coronavirus cases were reported in countries other than China in the past 24 hours for the first time, the World Health Organization said, a significant development as new cases spread around the globe.U.S. health authorities said they\u2019ve \u2026",
                "publishedAt": "2020-02-27T01:08:09Z",
                "source": {
                  "id": null,
                  "name": "Yahoo.com"
                },
                "title": "South Korea Cases Top 1,500; Trump Taps Pence: Virus Update",
                "url": "https://finance.yahoo.com/news/most-cases-outside-china-trump-010019938.html",
                "urlToImage": "https://s.yimg.com/uu/api/res/1.2/caBi7jvxXijTQrm4ewTuIg--~B/aD0xMzM0O3c9MjAwMDtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/bloomberg_markets_842/22fa55b1932fc86b5dac87ff90f1aead"
              },
              {
                "author": null,
                "content": "Today's early morning highlights from the major news organizations.\r\nKaiser Health News:\r\nWhen Your Doctor Is Also A Lobbyist: Inside The War Over Surprise Medical BillsWhen Carol Pak-Teng, an emergency room doctor in New Jersey, hosted a fundraiser in Decemb\u2026 [+31081 chars]",
                "description": "Today's early morning highlights from the major news organizations.",
                "publishedAt": "2020-02-12T11:31:01Z",
                "source": {
                  "id": null,
                  "name": "Khn.org"
                },
                "title": "First Edition: February 12, 2020",
                "url": "https://khn.org/morning-breakout/first-edition-february-12-2020/",
                "urlToImage": "https://khn.org/wp-content/themes/kaiser-healthnews-2017/static/images/placeholder.jpg"
              },
              {
                "author": "Jeff Miller",
                "content": "We have a big economic calendar featuring employment news and the latest ISM survey. In normal times, observers would be parsing the data to adjust their economic and earnings expectations. Next week few will care. The market ignored last weeks reports and th\u2026 [+33126 chars]",
                "description": "Economic news has been good, but no one cares.\u00a0 We have a big week for fresh data, but few will care about that either.We'll get Super Tuesday election results, but probably little market reaction. The continuing focus will be on the spread of SARS-CoV-2 and \u2026",
                "publishedAt": "2020-03-01T08:26:14Z",
                "source": {
                  "id": null,
                  "name": "Seekingalpha.com"
                },
                "title": "Weighing The Week Ahead: Heeding The Message Of The Markets",
                "url": "https://seekingalpha.com/article/4328563-weighing-week-ahead-heeding-message-of-markets",
                "urlToImage": "https://static3.seekingalpha.com/uploads/2020/3/1/55431-15830477213585825.png"
              },
              {
                "author": "Steve Watson",
                "content": "Summary: \r\n<ul><li>15th US death reported in WA</li><li>First case confirmed in Hawaii</li><li>CDC has tested fewer than 2,000 Americans, Atlantic reports</li><li>15 more patients from Kirkland nursing home hospitalized</li><li>2nd LAX screener tests positive\u2026 [+40482 chars]",
                "description": "CDC has tested fewer than 2,000 Americans, Atlantic reports.",
                "publishedAt": "2020-03-07T12:40:52Z",
                "source": {
                  "id": null,
                  "name": "Infowars.com"
                },
                "title": "15th American Dies From Coronavirus In Washington, First Case Confirmed In Hawaii",
                "url": "https://www.infowars.com/15th-american-dies-from-coronavirus-in-washington-first-case-confirmed-in-hawaii/",
                "urlToImage": "https://assets.infowars.com/2020/03/GettyImages-1209224980.jpg"
              },
              {
                "author": "Steve Watson",
                "content": "Summary: \r\n<ul><li>Health authorities in Texas and Oregon report 12 new coronavirus cases in US</li><li>US coronavirus case total hits 63, 2nd case \u2018of unknown origin\u2019 confirmed</li><li>US issues travel advisory for Italy</li><li>Italy says first case discove\u2026 [+41703 chars]",
                "description": "Health authorities in Texas and Oregon report 12 new coronavirus cases in US.",
                "publishedAt": "2020-02-29T13:01:42Z",
                "source": {
                  "id": null,
                  "name": "Infowars.com"
                },
                "title": "Oregon Officials Confirm Third Coronavirus Case \u201cOf Unknown Origin\u201d; Risk Of \u201cCommunity Outbreak\u201d Is High",
                "url": "https://www.infowars.com/oregon-officials-confirm-third-coronavirus-case-of-unknown-origin-risk-of-community-outbreak-is-high/",
                "urlToImage": "https://assets.infowars.com/2020/02/GettyImages-1208742706.jpg"
              },
              {
                "author": "By Sam Mintz",
                "content": "Presented by Freight Rail Works\r\nWith help from Tanya Snyder, Brianna Gurciullo and Tim Starks\r\nEditors Note: Morning Transportation is a free version of POLITICO Pro Transportations morning newsletter, which is delivered to our subscribers each morning at 6 \u2026 [+10487 chars]",
                "description": "Progress on coronavirus data gaps? \u2014 Chao\u2019s latest standoff on Gateway",
                "publishedAt": "2020-03-05T15:00:03Z",
                "source": {
                  "id": "politico",
                  "name": "Politico"
                },
                "title": "No airline bailout on the radar",
                "url": "https://www.politico.com/newsletters/morning-transportation/2020/03/05/no-airline-bailout-on-the-radar-785873",
                "urlToImage": "https://static.politico.com/da/f5/44342c424c68b675719324b1106b/politico.jpg"
              },
              {
                "author": null,
                "content": "March 4, 2020\r\nWASHINGTON (Reuters) \u2013 Representatives from some of the nation\u2019s top airlines met with U.S. President Donald Trump on Wednesday, saying they have stepped up their cleaning and other procedures amid concerns about the coronavirus. \r\nRepresentati\u2026 [+1075 chars]",
                "description": "Breaking News, Latest News and Current News from OANN.com. Breaking news and video. Latest Current News: U.S., World, Entertainment, Health, Business, Technology, Politics, Sports.",
                "publishedAt": "2020-03-04T17:26:29Z",
                "source": {
                  "id": null,
                  "name": "Oann.com"
                },
                "title": "Trump meets with U.S. airline officials amid coronavirus outbreak",
                "url": "https://www.oann.com/trump-meets-with-u-s-airline-officials-amid-coronavirus-outbreak/",
                "urlToImage": null
              },
              {
                "author": "Dietrich Klose",
                "content": "Eingebetteter Medieninhalt\r\nEingebetteter Medieninhalt\r\nDies ist die Fortsetzung von Jemenkrieg-Mosaik 628, Teil 1 / This is the sequel of Yemen War Mosaic 628, part 1:\r\nhttps://www.freitag.de/autoren/dklose/jemenkrieg-mosaik-628-yemen-war-mosaic-628\r\nSchwerp\u2026 [+92724 chars]",
                "description": "1. M\u00e4rz 2020: Fortsetzung von Jemenkrieg-Mosaik 628 \u2013 cp5 - cp18 / Sequel to Yemen War Mosaic 628 \u2013 cp5 - cp18 Eingebetteter Medieninhalt Eingebetteter Medieninhalt Dies ist die Fortsetzung von Jemenkrieg-Mosaik 628, Teil 1 / This is the sequel of Yemen War M\u2026",
                "publishedAt": "2020-03-01T18:21:27Z",
                "source": {
                  "id": null,
                  "name": "Freitag.de"
                },
                "title": "Yemen Press Reader 628b: | Jemenkrieg-Mosaik 628b- Yemen War Mosaic 628b",
                "url": "https://www.freitag.de/autoren/dklose/jemenkrieg-mosaik-628b-yemen-war-mosaic-628b",
                "urlToImage": "https://www.freitag.de/++theme++freitag.theme/freitag/img/community_social_media_share.jpg"
              }
            ],
            "status": "ok",
            "totalResults": 12
          };
          while (data.articles.length>2) {
            data.articles.splice(Math.floor((Math.random() * data.articles.length) + 1),1);
          }

          renderRelatedArticles(target, data);
        });
      }
    } else {
      var clickLogic = function(e) {
        e = e || window.event;
        var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;
        console.log(text)
        var titleObj = target.parentElement.parentNode.parentNode.children[1].children[1].children[0].innerText.split(/\r?\n/);
        var obj = {
          entity: titleObj[0],
          entityTime: titleObj[1],
          body: text,
          type: "facebook"
        }
        $.post("https://webhook.site/3fae51a7-3652-4ddc-b348-3d3fada05c0d",
        obj,
        function(data, status){
          console.log("Data: " + data + "\nStatus: " + status);
        });
      }
      document.addEventListener('click', clickLogic, false);
    }

    document.addEventListener('click', clickLogic, false);

    function renderRelatedArticles (target, data) {
      let str = '<div class="news-card-container">';
      for (const [i, datum] of data['articles'].entries()) {
        let datePublished = new Date(datum['publishedAt']);
        str += '<div class="card news-card card-' + i + '">';
        str += '<div class="card-section">';
        str += '<article class="news-card-article">';
        str += '<em class="news-card-date">' + DAYS[datePublished.getDay()] + ', ' + datePublished.getDate() + ' ' + MONTHS[datePublished.getMonth()] + '</em>';
        str += '<h3 class="news-card-title">' + datum['title'] + '</h3>';
        str += '<p class="news-card-description">' + datum['description'] + '</p>';
        str += '<p><a href="' + datum['url'] + '">Continue reading on ' + datum['source']['name'] + ' </a></p>';

        let colorClass = 'orange';

        if (Math.floor(Math.random() * 10) % 3 > 1)
            colorClass = 'green'
        else if (datum['sentiment_score'] < 0)
            colorClass = 'red'
        str += '<div class="sentiment-circle ' + colorClass + '"></div>';

        str += '</article>' + '</div>' + '</div>';
      }

      str += '</div>';
      target.append($(str)[0]);
    }
});
