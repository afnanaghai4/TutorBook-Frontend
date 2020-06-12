import React, { Component } from "react"
import './searchbar.css'

class searchbar extends Component{
    render(){
        return(
            <div>
                <link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
                <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
                <script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>


                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:300,400,700" />

                <form class="search" style={{position:"absolute",bottom:10}}>
                    <div class="search__wrapper">
                        <input type="text" name="" placeholder="Search for..." class="search__field" />
                        <button type="submit" class="fa fa-search search__icon"></button>
                    </div>
                </form>
            </div>
        )
    }
}


export default searchbar