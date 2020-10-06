import React from "react";
import axios from "axios";

export default class Channels extends React.Component {
  constructor(props) {
    super();
    this.state = {
      articles: [],
      inputValue: "",
      placeholderColor: "suggestionboxblack",
      placeholderValue: "submit channel URLs here . . .",
      url: "http://localhost:8000/api/pipeline/",
      apiUrl: "",
      api_data: [],
      ticker: 'TSLA',
      thumbnail: '',
    };
  }
  async fetchArticles() {  
    await this.setState({
      url:
        "http://localhost:8000/api/pipeline/?ticker=" +
        this.state.ticker,
    });

    axios.get(this.state.url).then((res) => {
      var data = res.data;
        this.setState({
          articles: data,
        })
    });
  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchArticles();
    }
  }

thumbnailNeeded = (e) =>  {
   if (e === "+") {
     return true
   } else {
     return false
   }
}

  render() {

    const pipeline = this.state.articles;
    const listData = pipeline.map((pipelines) => (


      <div className='listboxtext listbox'>
        <a href='https://localhost:3000/' className='listboxevent'>{pipelines.event}</a>
        <a href={this.thumbnailNeeded(pipelines.source_youtube)? 'https://localhost:3000/' : pipelines.source_youtube} className={this.thumbnailNeeded(pipelines.source_youtube)? 'listboxgeneral' : 'listboxgeneral youtube'}>{pipelines.source_youtube === "+" && '+'}</a>
        <a href={this.thumbnailNeeded(pipelines.source_twitter)? 'https://localhost:3000/' : pipelines.source_twitter} className={this.thumbnailNeeded(pipelines.source_twitter)? 'listboxgeneral' : 'listboxgeneral twitter'}>{pipelines.source_twitter === "+" && '+'}</a>
        <a href={this.thumbnailNeeded(pipelines.source_other)? 'https://localhost:3000/' : pipelines.source_other} className={this.thumbnailNeeded(pipelines.source_other)? 'listboxgeneral' : 'listboxgeneral other'}>{pipelines.source_other === "+" && '+'}</a>
        <a href='https://localhost:3000/' className='listboxgeneral'>{pipelines.date_of_event}</a>
        <a href='https://localhost:3000/' className='listboxgeneral'>{pipelines.date_added}</a>
        <a href='https://localhost:3000/' className='listboxgeneral'>{pipelines.primary_category}</a>
        <a href='https://localhost:3000/' className='listboxgeneral'>{pipelines.secondary_category}</a>
        <a href='https://localhost:3000/' className='listboxgeneral'>{pipelines.significance}</a>
      </div>

      

    ));
    return (
      <div>
        <div className='gridcontainer'></div>
        <div className='gridcontainer'>
        <div className='headercontainer headertext'>
 
          <div className='headerfirstrow headersource'>source</div>
          <div className='headerfirstrow headercategory'>category</div>

          <div className='headersecondrow'>event</div>
          <div className='headersecondrow'>youtube</div>
          <div className='headersecondrow'>twitter</div>
          <div className='headersecondrow'>other</div>
          <div className='headersecondrow'>date of event</div>
          <div className='headersecondrow'>date added</div>
          <div className='headersecondrow'>primary</div>
          <div className='headersecondrow'>secondary</div>
          <div className='headersecondrow'>significance</div>


          

        </div>
        <div>{listData}</div>
        </div>
      </div>
    );
  }
}
