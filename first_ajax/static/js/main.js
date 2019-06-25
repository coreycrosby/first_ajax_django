document.addEventListener("DOMContentLoaded", () => {

    const requestButton = document.querySelector('button#run_request')

     requestButton.addEventListener('click', () => {
         axios.get('http://intro-ajax-api.herokuapp.com/')
         .then((response) => {
            console.log('RESPONSE', response);

        })
    })

    const pingPongButton = document.querySelector('button#retrieve_ping')
    const section3456 = document.querySelector('steps3456')

    pingPongButton.addEventListener('click', () => {
        axios.get('http://intro-ajax-api.herokuapp.com/ping')
        // axios.get('http://intro-ajax-api.herokuapp.com/pong')
        .then((response) => {
            console.log(response.data);
            console.log('Success!');
            const dataElem = document.createElement('p');
            dataElem.innerHTML = response.data;
            section3456.appendChild(dataElem);

        })
        .catch((error) => {
            console.log(error.response.data);
            console.log("We have an error...")
            const msg = document.createElement('p');
            msg.innerHTML = ("Try harder next time!");
            section3456.appendChild(msg);
        })
        .then((response) => {
            console.log("Hey the request finished!");
        })
    })

    const countButton = document.querySelector('button#retrieve_count')
    const section7 = document.querySelector('step7')

    countButton.addEventListener('click', () => {
        axios.get('http://intro-ajax-api.herokuapp.com/count')
        .then((response) => {
            console.log('Total Visitors:', response.data);
            const count = document.createElement('p');
            count.innerHTML = response.data;
            section7.appendChild(count);
        })
    })

    const timeButton = document.querySelector('button#retrieve_time')
    const section8 = document.querySelector('step8')

    timeButton.addEventListener('click', () => {
        axios.get('http://intro-ajax-api.herokuapp.com/time', {params: {timezone: 'Pacific/Honolulu'},})
        .then((response) => {
            console.log('Time now:', response.data);
            const time = document.createElement('p');
            time.innerHTML = response.data;
            section8.appendChild(time);

        })
    })

    const infoButton = document.querySelector('button#retrieve_info')
    const section9 = document.querySelector('step9')

    infoButton.addEventListener('click', () => {
        axios.get('http://intro-ajax-api.herokuapp.com/a_car')
        .then((response) => {
            console.log(response.data);
            const ul = document.createElement('ul');
            ul.innerHTML = response.data;
            section9.appendChild(ul);
        })
    })
  







});