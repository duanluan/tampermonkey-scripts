import {Injectable} from '@nestjs/common';

const puppeteer = require('puppeteer-core'),
  cheerio = require('cheerio');

@Injectable()
export class DoubanService {

  private BASE_URL = 'https://book.douban.com';

  async subjectSearch(query: { author: string; name: any }): Promise<any[]> {
    const browser = await puppeteer.launch({
      // https://stackoverflow.com/questions/53039551/selenium-webdriver-modifying-navigator-webdriver-flag-to-prevent-selenium-detec
      args: ['--disable-blink-features=AutomationControlled'],
      // 临时指定浏览器执行文件，可以试试这个解决方案：https://stackoverflow.com/a/68154113
      executablePath: 'E:\\duanluan\\WorkSpaces\\My\\tampermonkey-scripts\\amazon-kindle-douban-score-server\\node_modules\\puppeteer\\.local-chromium\\win64-991974\\chrome-win\\chrome.exe',
    }), page = await browser.newPage();
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'userAgent', {get: () => "Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1;SV1)"});
    });
    await page.goto(this.BASE_URL + '/subject_search?search_text=' + query.name + '+' + query.author, {waitUntil: 'networkidle0'});

    // const $books = await page.$$('#root .item-root .detail');
    // const books = await Promise.all($books.map(async $book => {
    //   return {
    //     name: await $book.$eval('.title-text', e => e.innerText),
    //     score: await $book.$eval('.rating_nums', e => e.innerText),
    //     // evaluationNum: await $book.$eval('.rating .pl', e => e.innerText),
    //     authors: await $book.$eval('.meta.abstract', e => e.innerText)
    //   }
    // }))

    const books = cheerio.load(await page.content())('#root .item-root .detail').map((i, el) => {
      const $this = cheerio.load(el);
      const evaluationNum = $this('.rating .pl').text().replace(/\D*/i, '');
      return {
        name: $this('.title-text').text(),
        score: $this('.rating_nums').text(),
        evaluationNum: evaluationNum ? 0 : evaluationNum,
        authors: $this('.meta.abstract').text()
      }
    }).get();

    await page.close();
    await browser.close();
    return books;
  }
}
