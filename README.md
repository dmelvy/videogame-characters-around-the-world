

# Project Overview

# Videogame Characters From Around The World

## Project Description

Videogames Around The World is an Airtable and React build where users can explore where their favorite videogame characters are from. Besides seeing the origins of their favorite characters, they'll also be able to filter by videogames with female protagonists, POC protagonists, and genre. They will also see an option on the homepage to create a post if they don't see their favorite videogame character listed already. Users will have the ability to edit existing entries in order to improve the database.



## Wireframes

Below are the wireframes for this app. While most of the elements are self-explanatory, the biggest points to notice include the implementation of a search filter, the ability to edit entries, and the responsive design between mobile and desktop views.

Desktop:

![imageAlt](https://i.imgur.com/AP3eOpC.png)
![imageAlt](https://i.imgur.com/Y3ITta6.png)
![imageAlt](https://i.imgur.com/D1vL7K9.png)


Mobile:


![imageAlt](https://i.imgur.com/IbnZmwp.png?1)
![imageAlt](https://i.imgur.com/9uwtvMN.png?1)
![imageAlt](https://i.imgur.com/P2wAhow.png?1)


## Component Hierarchy
The structure of this component hierarchy focuses on a clear flow of data that keeps the main App file cleanly organized and compartmentalizing GET & POST calls into separate components.

![imageAlt](https://i.imgur.com/gAYJ7CE.png?1)

## API and Data Sample

Airtable will be handling all GET and POST requests for this app. Below is an example request.

```json
{
    "records": [
        {
            "id": "recaC5isqs0IjWgee",
            "fields": {
                "charName": "Mario",
                "origin": "Brooklyn, New York",
                "gameImage": "https://tinyurl.com/na2qmebz",
                "game": "Super Mario 64",
                "charImage": "https://tinyurl.com/6d3k8q1c",
                "genre": "Jump N' Run"
            },
            "createdTime": "2021-02-15T16:08:12.000Z"
        },
        {
            "id": "recQF8XuuxZSEeEda",
            "fields": {
                "charName": "Kassandra",
                "origin": "Sparta, Greece",
                "gameImage": "https://tinyurl.com/1arlbcdx",
                "game": "Assassin's Creed Odyssey",
                "lgbtqaLead": true,
                "charImage": "https://tinyurl.com/x9uvo0sa",
                "femaleLead": true,
                "genre": "Action Adventure"
            },
            "createdTime": "2021-02-15T16:08:12.000Z"
        },
        {
            "id": "rec5lKuh0JkbU0r2w",
            "fields": {
                "pocLead": true,
                "charName": "Bayek",
                "origin": "Siwa, Egypt",
                "gameImage": "https://tinyurl.com/1qmdhppc",
                "game": "Assassin's Creed Origins",
                "charImage": "https://tinyurl.com/4psvxlt2",
                "genre": "Action Adventure"
            },
            "createdTime": "2021-02-15T16:08:12.000Z"
        }
    ],
    "offset": "rec5lKuh0JkbU0r2w"
}
```

### MVP/PostMVP

#### MVP 

- Build API on Airtable and pull data through app
- Allow user to select filters for specific data sets
- Successfully filter and render user search results 
- Create user-friendly nav bar and clear CTAs for easy navigation around app
- Create responsive design for app and desktop

#### Post-MVP  

- Add map API to include character origins (long. & lat.) pinpointed on interactive map
- Create user-friendly error states for characters that have not yet been added to the database

## Project Schedule

Here is a rough estimation of the development timeline:

|  Day | Deliverable | Status
|---|---| ---|
|February 16| Project Pitch Approval / Finalize Airtable Data | Incomplete
|February 17| Create app structure: Components and Get Requests | Incomplete
|February 18| Components and Post/Put Requests | Incomplete
|February 19| Finalize MVP: Navigation, Basic CSS, Responsive Design  | Incomplete
|February 20-22| Post-MVP: Map, Error States, Advanced CSS | Incomplete
|February 23| Presentations | Incomplete

## Timeframes

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create Airtable data | H | 3hrs| hrs | hrs |
| Building app components & structure | H | 1hr| hrs | hrs |
| Developing code for API GET request | H | 1hr| hrs | hrs |
| Building search filter form & functionality | H | 2.5hrs| hrs | hrs |
| Rendering filtered data in results section | H | 2hrs| hrs | hrs |
| Styling the container for rendered data | H | 2.5hrs| hrs | hrs |
| Developing code for API POST request | H | 2hrs| hrs | hrs |
| Building form for users to create new data | H | 1.5hrs| hrs | hrs |
| Creating responsive design for mobile | H | 3hrs| hrs | hrs |
| Creating navigation elements (CTAs and sticky navbar) | H | 2hrs| hrs | hrs |
| Import fonts, add colors and borders, touch up spacing | H | 2.5hrs| hrs | hrs |
| Developing code for API PUT request | H | 2hrs| hrs | hrs |
| Building editable form with submit button | H | 2hrs| hrs | hrs |
| (POST MVP) Implement Map API code | H | 2hrs| hrs | hrs |
| (POST MVP) Pinpoint character geolocations | H | 2.5hrs| hrs | hrs |
| (POST MVP) User-friendly error states for no search results | H | 2.5hrs| hrs | hrs |
| (POST MVP) Updates or edits to CSS | H | 3hrs| hrs | hrs |
| Total | H | 37hrs| hrs | hrs |

## SWOT Analysis

### Strengths:

I have a clear breakdown of how to approach each segment of this project and believe that the time I've estimated will allow for unforeseen bugs. 

### Weaknesses:

I have never built an advanced search that offers filtered checkboxes. I'm mostly familiar with API calls that can be filtered by keyword. I think this aspect of the project might take me the longest to figure out since it is unfamiliar territory.

### Opportunities:

This project is an awesome opportunity to show what I've learned so far using React! The topic is also a personal interest of mine that I definitely will want to keep adding to and updating as time goes on.

### Threats:

The biggest threat I foresee is running out of time to really make this exactly (or at least similarly) to my earlier specifications before presentation. But I believe I've addressed this with a realistic approach to what I can accomplish in MVP vs. Post-MVP.