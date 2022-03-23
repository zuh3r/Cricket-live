function renderTournamentsPage() {
  document.querySelector("#page").innerHTML = `
  <section class="tournaments-listing">
  <h1>Tournaments</h1>
  <div class="tournaments-container">
    <div class="tournament1">
      <img
        src="../../photos/305d3c73-b0e0-4dee-9b4d-57ab4b89da58.png"
        alt=""
      />
      <h2>ICC Women's Cricket World Cup 2022</h2>
    </div>

    <div class="tournament1">
      <img src="../../photos/Cricket_Australia.png" alt="" />
      <h2>Cricket Australia Cup 2022</h2>
    </div>
    <div class="tournament1">
      <img src="../../photos/Series-WNCL-new.png" alt="" />
      <h2>WNCL 2021-22</h2>
    </div>
    <div class="tournament1">
      <img src="../../photos/Series-Qantas-updated.png" alt="" />
      <h2>Pakistan V Australia - Men</h2>
    </div>
    <div class="tournament1">
      <img src="../../photos/ICCMT20WC2021_2020-symbol.png" alt="" />
      <h2>ICC Men's T20 World Cup</h2>
    </div>
    <div class="tournament1">
      <img src="../../photos/series-weber-wbbl.png" alt="" />
      <h2>Weber WBBL|07</h2>
    </div>
    <div class="tournament1">
      <img src="../../photos/Series-dettol-t20.png" alt="" />
      <h2>Dettol T20Is v Sri Lanka</h2>
    </div>
  </div>
</section>
      `;
}

module.exports = renderTournamentsPage;
