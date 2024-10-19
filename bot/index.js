
import puppeteer from "puppeteer";

async function initBrowser() {
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    return browser;
  }

  
const botInit = async (channels,fetchChannelProgramming) => {

    const allChannels = [];
  
    const browser = await initBrowser();
    const page = await browser.newPage();
  
    await page.setRequestInterception(true);
    page.on("request", (request) => {
      if (
        request.resourceType() === "image" ||
        request.resourceType() === "stylesheet"
      ) {
        request.abort(); // Bloqueia requisições de imagens e estilos
      } else {
        request.continue();
      }
    });
  
    // Fazendo a requisição para cada canal na lista
    for (const channel of channels) {
      const programming = await fetchChannelProgramming(
        page,
        `https://mi.tv/br/canais/${channel.nome}`,
        channel
      );
  

      if (channel.nome && programming) {
        allChannels.push({
          nome: channel.nomeOfc,
          logo: channel.logo,
          streamingUrl: channel.streamingUrl,
          programas: programming,
          tipo: channel.type,
        });
      }
    }
  
    // Fechando o navegadorm3u8
    await browser.close();
  
    // Escrevendo as informações da programação em um único arquivo JSON
    // fs.writeFileSync(
    //   "programacao_tv.json",
    //   JSON.stringify({ canais: allChannels }, null, 2)
    // );
    
    console.log("Arquivo JSON criado: programacao_tv.json");
    return { canais: allChannels }
  };

  export default botInit;