<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script type="text/javascript">
  $(document).ready(function() {
    $("ul.sf-menu.sf-navbar li").has("li.current").css('background-color','#6c578c');
    /*
    it seems like the best way to do this at the moment is minify the html and inject it into the top.
    Issue: doesn't load in quite fast enough.
    Possible solution: find a way to fade it in quickly so it is less jarring
    */
    document.getElementsByClassName('top')[0].innerHTML +=/*html*/`
    <style type='text/css'>
      div.header {
        margin-top:  250px;
      }

      .custom-reg {
        position: absolute;
        bottom: 1.8vw;

        background-image: none;
        color: white;
        border: 3px solid black;
        background-color: #301854;
        text-decoration: none;
        font-family: Arial, Helvetica, sans-serif;
        border-radius: 5px;
        padding: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        font-weight: bold;
        font-size: 1.6em;
        transition: ease .5s;
      }

      a.custom-reg:hover {
        background-color: #452477;
        color: #f5cd75;
        border-color: #f5cd75;
        font-size: 1.7em;
      }

      div.tinject-img-container {

        display: flex;
        align-items: center;
        background-image: url('https://custom.cvent.com/C3999E5286104F469BCA4EFE0240F281/pix/86d5d5836f2342c6ad3139d2df7cb123.jpg');
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        position: absolute;
        top: 0px;
        width: 100%;
        background-repeat: no-repeat;
      }

      div.tinject-container {
        height: 280px;
        border-bottom: 5px solid #bdbdbda6;
        width: 100%;
        background-color: #3018547d;
        background: -moz-linear-gradient(-45deg, rgba(64,28,96,0.5) 0%, rgba(31,55,107,0.5) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(-45deg, rgba(64,28,96,0.5) 0%,rgba(31,55,107,0.5) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(135deg, rgba(64,28,96,0.5) 0%,rgba(31,55,107,0.5) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        display: flex;
        justify-content: center;
        position: relative;
      }

      .tinject-container>.tinject-text {
        position: relative;
        line-height: 1em;
        font-size: 2.4em;
        color: #ecca7e;
        text-align: center;
        padding-top: 0px;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-style: normal;
        font-variant: normal;
        font-weight: 700;
        margin-top: 40px;
        text-shadow: 2px 2px 2px rgb(56, 54, 54);
      }

      .tinject-container>.tinject-text>sup {
        font-size: .5em;
        margin-top: 35px;
      }

      .title-sponsor{
        display: block;
        position: absolute;
        bottom: 1.8vw;
        right: 0;
      }

      .title-sponsor img{
        max-height: 105px;
        max-width: 105px;
      }
      @media (min-width: 1200px) {
        .custom-reg, .title-sponsor {
          bottom: 25px;
        }
      }
      @media (max-width: 800px) {
        .tinject-container>.tinject-text {
          font-size: 2em;
        }
      }

    </style>
    <div class='tinject-img-container'>
      <div class='tinject-container'>
        <div class='tinject-text'> COMMERCIAL SPORT <sup>AND</sup> ENTERTAINMENT FACILITIES <br /><span style="font-size:.7em;">SAFETY <sup style="font-size:.5em">AND</sup> SECURITY SUMMIT</span>
          <div style='color: white; font-size: 0.7em; text-shadow:2px 2px 21px rgba(255, 255, 255, 0.24);'>
            FEBRUARY 19-21, 2019</div>
          <div style="line-height: .5em;">&nbsp;</div>
          <div class="title-sponsor">
            <div style="font-size: .45em;">Title Sponsor</div>
            <a href="https://www.s2eventsecurity.com/" target="_blank" rel="noopener noreferrer"><img src="https://custom.cvent.com/C3999E5286104F469BCA4EFE0240F281/pix/52528ec77b324dc0bf63facaffdd1600.jpg" alt="logoS2" /></a>
          </div>
          <div style='font-size: 0.56em;'>
            <em>DUKE UNIVERSITY</em> <br>
            DURHAM, NORTH CAROLINA
          </div>
        </div><a class='custom-reg' href='/events/2019-commercial-sport-and-entertainment-facilities-summit/registration-62e9759c85124db5924f8927d43ba05c.aspx'>REGISTER NOW!</a>
      </div>
    </div>
    `;
  });
</script>
