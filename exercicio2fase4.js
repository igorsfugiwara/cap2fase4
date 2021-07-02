// O nome das cidades avaliadas.
// O conteúdo do roteiro A de cada cidade avaliada.
// Quantos locais são citados no roteiro A de cada cidade.
// O nome dos pontos turísticos localizados no bairro Centro da cidade de São Paulo.
// O nome dos pontos turísticos localizados no bairro Downtown na cidade de Los Angeles.

const texto = "<html><head><title>Gulliver Traveller - Roteiros</title></head><body><b>->1 - Roteiros para *São Paulo*</b><br>A Terra da Garoa!<br>Fundada em 25 de janeiro de 1554 a cidade tem hoje cerca de 12 milhões de habitantes e é considerada o centro financeiro do Brasil e aqui vão 3 dicas de roteiros obrigatórios para aqueles que passam pela capital paulista<br>#Roteiro A | Região: Avenida Paulista<br>MASP; Parque Trianon; Rua Augusta<br>#Roteiro B | Região: Centro<br>Catedral da Sé; Pátio do Colégio; Rua Augusta<br>#Roteiro C | Região: Vila Madalena<br>Beco do Batman; Feirinha da Benedito Calixto; Livraria da Vila<br> <b>->2 - Roteiros para *Las Vegas*</b><br>Viva Las Vegas!<br>       A cidade mais populosa e mais densamente povoada do estado de Nevada, Las Vegas foi fundada em 1905 e é considerada uma cidade, oficialmente, desde 1911 e conta com mais de meio milhão de habitantes. Venha conhecer a capital dos jogos de azar!<br>#Roteiro A | Região: Las Vegas Boulevard South<br>Fonte do Bellagio; Principais Cassinos; Madame Tussauds<br>#Roteiro B | Região: Downtown<br>; Fremont; Las Vegas Art Museum; Museu nacional do Crime Organizado; <br>#Roteiro C | Região: Las Vegas Boulevard North<br>Outlet Premium North; Stratosphere; Apple Fashion Show<br><b>->3 - Roteiros para *Moscou*</b><br>Privet!<br>A capital Russa fica situada às margens do Rio Moscou e apesar de ser a cidade mais cosmopolita da Rússia, conta com grande resguardo de sua história soviética<br>#Roteiro A | Região: Praça Vermelha<br>Museu Histórico do Estado; Catedral de São Basílico; Mausoléu de Lênin<br>#Roteiro B | Região: Centro<br>Teatro Bolshoi; Monumento a Karl Marx; Rio Moscou<br>#Roteiro C | Região: Obras pela cidade<br>Metrô de Moscou; As Sete Irmãs; Moscow Leningradsky Railway Station  <br></body></html>";

// nome das cidades
posicao1 = texto.indexOf("*",0)
posicao2 = texto.indexOf("*", posicao1+1)
cidade1 = texto.substring(posicao1+1, posicao2)
posicao3 = texto.indexOf("*",posicao2+1)
posicao4 = texto.indexOf("*", posicao3+1)
cidade2 = texto.substring(posicao3+1, posicao4)
posicao5 = texto.indexOf("*",posicao4+1)
posicao6 = texto.indexOf("*", posicao5+1)
cidade3 = texto.substring(posicao5+1, posicao6)
 let cidades = [cidade1, cidade2, cidade3]
 alert(" As cidades citadas são: " + cidades)

// conteudo do roteiro A de cada cidade 
posicao7 = texto.indexOf("Avenida Paulista",0)
posicao8 = texto.indexOf("#Roteiro B",0)
roteiroa1 = texto.substring(posicao7, posicao8).replaceAll("<br>", " - ");
posicao9 = texto.indexOf("Las Vegas Boulevard South",posicao8)
posicao10 = texto.indexOf("#Roteiro B",posicao9)
roteiroa2 = texto.substring(posicao9, posicao10).replaceAll("<br>", " - ");
posicao11 = texto.indexOf("Praça Vermelha",posicao10)
posicao12 = texto.indexOf("#Roteiro B",posicao11)
roteiroa3 = texto.substring(posicao11, posicao12).replaceAll("<br>", " - ");

listaLocais1 = roteiroa1.substring(roteiroa1.indexOf("-")+1).split(";")
listaLocais2 = roteiroa2.substring(roteiroa2.indexOf("-")+1).split(";")
listaLocais3 = roteiroa3.substring(roteiroa3.indexOf("-")+1).split(";")
 let listaLocais = [listaLocais1,listaLocais2, listaLocais3]
alert("Roteiro A de cada cidade: "+ listaLocais)
    
    
// quantos locais citados em roteiro A de cada cidade
alert(`A quantidade de locais citados em roteiros A de São Paulo é: `+ listaLocais1.length +`
       A quantidade de locais citados em roteiros A de Las Vegas é: `+ listaLocais2.length + `
       A quantidade de locais citados em roteiros A de Moscou é: `+ listaLocais3.length)


// nome dos pontos turisticos no centro de São Paulo
indexPontoB1 = texto.indexOf("Região: Centro")
indexPontoB2= texto.indexOf("<br>#Roteiro C |")
nomesPontos =texto.substring((indexPontoB1 + 18), indexPontoB2).split(";")
alert("Nome dos pontos turísticos no centro de São Paulo são: " + nomesPontos)

// nome dos pontos turisticos em LA Downtown
indexPontoB3 = texto.indexOf("Região: Downtown<br>;")
indexPontoB4 = texto.indexOf("<br>#Roteiro C | Região: Las Vegas Boulevard North")
nomesPontos2 = texto.substring((indexPontoB3+22), indexPontoB4).split(";")
alert("Nome dos pontos turísticos em LA Downtown são: " + nomesPontos2)