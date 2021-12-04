import './App.css';
import ChartComponent from './Components/ChartComponent';
import Header from './Components/Header';

function App() {
  return (
    <section>
      <header>
        <Header />
      </header>
      <article>
        <ChartComponent />
      </article>
      <footer>
        <div className="p-10">
          <h3 class="text-3xl mb-2 font-semibold leading-normal">
            Implementation Details
          </h3>
          <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
            I have implemented all the requirements as mentioned in Challenge. <b>[Minimum Requirement, Plus Point and Advanced requirements]</b>
          </p>
          <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
            ◉ Used Given API to Fetch Chart Data using axios and store it in a Centralized  State with the help of <b className="font-bold">Redux</b> and <b className="font-bold">Redux Saga</b> .
          </p>
          <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
            ◉ Displayed the chart data with respective Chart Types i.e Pie and Bar Chart with random colours.
          </p>
          <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
            ◉ Added a feature that changes values of individual charts and also changes the visulization of chart as soon as value is changed.
          </p>
          <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
            ◉ Implemented State persistence  with the help of <b className="font-bold">Redux Persist</b>, so that even on reload of page, state is preserved.
          </p>
          <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
            ◉ Hosted the project on Vercel and code store on Github.
          </p>
          <p class="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
            ◉ <b className="font-bold">Extras</b>:- Implemented a Reset Button to reset the values of all charts. and used Tailwind CSS to style the project.
          </p>
        </div>
      </footer>
    </section>
  );
}

export default App;
