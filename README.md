

# Project Overview

# Videogame Characters From Around The World

## Project Description

Videogames Around The World is an Airtable and React build where users can explore where their favorite videogame characters are from. Besides seeing the origins of their favorite characters, they'll also be able to filter by videogames with female protagonists, POC protagonists, and genre. They will also see an option on the homepage to create a post if they don't see their favorite videogame character listed already. Users will have the ability to edit existing entries in order to improve the database.



## Wireframes

Below are the wireframes for this app. While most of the elements are self-explanatory, the biggest points to notice include the implementation of a search filter, the ability to edit entries, and the responsive design between mobile and desktop views.

Desktop:

![imageAlt](https://i.imgur.com/ereBpfE.png)
![imageAlt](https://i.imgur.com/enlsyrm.png)
![imageAlt](https://i.imgur.com/fagJLz2.png)


Mobile:


![imageAlt](https://i.imgur.com/4Oe5C6e.png?1)
![imageAlt](https://i.imgur.com/5eyYR9i.png?1)
![imageAlt](https://i.imgur.com/LApXr9O.png?1)


<!-- https://wireframe.cc/BkecE8
https://wireframe.cc/7yfW7p
https://wireframe.cc/85Huu8

Mobile:
https://wireframe.cc/akFnDW
https://wireframe.cc/cPIesw
https://wireframe.cc/7z7H7E -->


## Component Hierarchy
The structure of this component hierarchy focuses on a clear flow of data that keeps the main App file cleanly organized and compartmentalizing GET & POST calls into separate components.

![imageAlt](https://i.imgur.com/E8P8Oic.png?1)

## API and Data Sample

https://airtable.com/invite/l?inviteId=invW5sJYY8MONEcvx&inviteToken=d7c5580f0def72cb5e7b7373be7839bded320d6ca2376e0daa3cd4c022262cca

Airtable will be handling all GET and POST requests for this app. Below is an example request.

```json
{
    "records": [
        {
            "id": "recaC5isqs0IjWgee",
            "fields": {
                "Character name": "Mario",
                "Videogame": "Super Mario 64",
                "Character Image": "https://tinyurl.com/6d3k8q1c",
                "Videogame Image": "https://tinyurl.com/na2qmebz",
                "Character's Origin (Country)": "Brooklyn, New York",
                "Female Protagonist?": "No",
                "POC Protagonist?": "No",
                "LGBTQA Protagonist?": "No",
                "Genre": "Jump N' Run"
            },
            "createdTime": "2021-02-15T16:08:12.000Z"
        },
        {
            "id": "recQF8XuuxZSEeEda",
            "fields": {
                "Videogame": "Assassin's Creed Odyssey",
                "Character name": "Kassandra",
                "Female Protagonist?": "Yes",
                "POC Protagonist?": "No",
                "LGBTQA Protagonist?": "Yes",
                "Character's Origin (Country)": "Sparta, Greece",
                "Character Image": "https://tinyurl.com/x9uvo0sa",
                "Videogame Image": "https://tinyurl.com/1arlbcdx",
                "Genre": "Action Adventure"
            },
            "createdTime": "2021-02-15T16:08:12.000Z"
        },
        {
            "id": "rec5lKuh0JkbU0r2w",
            "fields": {
                "Videogame": "Assassin's Creed Origins",
                "Character name": "Bayek",
                "Genre": "Action Adventure",
                "Character's Origin (Country)": "Siwa, Egypt",
                "POC Protagonist?": "Yes",
                "Female Protagonist?": "No",
                "LGBTQA Protagonist?": "No",
                "Character Image": "https://tinyurl.com/4psvxlt2",
                "Videogame Image": "https://tinyurl.com/1qmdhppc"
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
| Building components with filter-able API data (GET request) | H | 7hrs| hrs | hrs |
| Building form to create API data (POST request) | H | 3.5hrs| hrs | hrs |
| Adding editable functionality (PUT request) | H | 3.5hrs| hrs | hrs |
| Basic CSS, responsive design, navigation | H | 6hrs| hrs | hrs |
| (POST MVP) Map API to pinpoint characters on map | H | 4hrs| hrs | hrs |
| (POST MVP) User-friendly error states | H | 6hrs| hrs | hrs |
| (POST MVP) Advanced CSS styling | H | 7hrs| hrs | hrs |
| Total | H | 40hrs| hrs | hrs |

## SWOT Analysis

### Strengths:

I have a clear breakdown of how to approach each segment of this project and believe that the time I've estimated will allow for unforeseen bugs. 

### Weaknesses:

I have never built an advanced search that offers filtered checkboxes. I'm mostly familiar with API calls that can be filtered by keyword. I think this aspect of the project might take me the longest to figure out since it is unfamiliar territory.

### Opportunities:

This project is an awesome opportunity to show what I've learned so far using React! The topic is also a personal interest of mine that I definitely will want to keep adding to and updating as time goes on.

### Threats:

The biggest threat I foresee is running out of time to really make this exactly (or at least similarly) to my earlier specifications before presentation. But I believe I've addressed this with a realistic approach to what I can accomplish in MVP vs. Post-MVP.