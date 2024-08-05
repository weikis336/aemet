class ButtonData extends HTMLElement {
  constructor () {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  async connectedCallback () {
    await this.render()
  }

  async render () {
    this.shadow.innerHTML =
      /* html */`
      

      <style>
      .container{
        display: flex;
        justify-content: center;
        gap: 2rem;
        align-items: row;


      }
      .container, h1, h2, h3, p{
        padding: 0;
        margin: 0;
        color: #fff;
        font-size: 2rem;

      }
      .button_box{
        display: flex;
        justify-content: center;


      }
      .send-button {
        display: inline-block;
        padding: 15px 25px;
        font-size: 24px;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        outline: none;
        color: #fff;
        background-color: #04AA6D;
        border: none;
        border-radius: 15px;
        box-shadow: 0 9px #999;
      }

      .send-button:hover {background-color: #3e8e41}

      .send-button:active {
        background-color: #3e8e41;
        box-shadow: 0 5px #666;
        transform: translateY(4px);
      }

      </style>
        <div class="container">        
          <div class="button_box">
            <button class="send-button">Cargar Datos</button>
          </div>
          <div class="statusText_Box"> 
            <p class="statusText">Estado</p>
          </div>
      </div>
  
      `

    const button = this.shadow.querySelector('.send-button')

    button.addEventListener('click', async () => {
      try {
        let response = await fetch('https://opendata.aemet.es/opendata/api/valores/climatologicos/diarios/datos/fechaini/2024-02-01T00:00:00UTC/fechafin/2024-08-01T23:59:59UTC/estacion/B228/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ3ZWlraXMzMzZAcHJvdG9ubWFpbC5jb20iLCJqdGkiOiJhMGY4YjlhYS03MzJjLTQ1OWEtOWU5Yi1jZGUzZTEzZjM2OWUiLCJpc3MiOiJBRU1FVCIsImlhdCI6MTcyMjg0MjU3NSwidXNlcklkIjoiYTBmOGI5YWEtNzMyYy00NTlhLTllOWItY2RlM2UxM2YzNjllIiwicm9sZSI6IiJ9.H_Gd8el3r3dPqXDbRaiGIrV9MpB-5poIanKYbo7z1cg')

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        let responseData = await response.json()

        const datosUrl = responseData.datos

        response = await fetch(datosUrl)

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }

        responseData = await response.json()

        responseData = responseData.map(element => {

        })
      } catch (error) {
        console.error('Fetch error:', error)
      }
    })
  }
}
customElements.define('button-component', ButtonData)
