const fetchChannel = async function fetchChannelProgramming(page, url, channel) {
  try {
    console.log(`Iniciando a requisição para ${channel.nomeOfc || 'desconhecido'}...`);

    // Navegando até a URL fornecida com timeout aumentado
    await page.goto(url, { waitUntil: "networkidle2", timeout: 120000 });

    // Selecionando as informações da programação
    const programming = await page.evaluate(() => {
      const broadcasts = [];
      const items = document.querySelectorAll("ul.broadcasts.time24 li");

      items.forEach((item) => {
        const title = item.querySelector(".content h2")?.innerText || "";
        const time = item.querySelector(".time")?.innerText || "";
        const description = item.querySelector(".synopsis")?.innerText || "";
        const imageStyle =
          item.querySelector(".image")?.style.backgroundImage || "";
        const imageUrl = imageStyle
          .replace(/url\(['"]?/, "")
          .replace(/['"]?\)$/, "");
        broadcasts.push({ title, time, description, imageUrl });
      });

      return broadcasts; // Retorna o array de transmissões
    });

    return programming; // Retorna o array de transmissões
  } catch (error) {
    console.error(
      `Erro ao buscar programação para ${channel.nomeOfc || 'desconhecido'}: ${error.message}`
    );
    return []; // Retorna um array vazio em caso de erro
  }
};

export default fetchChannel;
