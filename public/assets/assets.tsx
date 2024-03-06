import {
    PROJECT_TODO_IMAGE_PATH,
    PROJECT_TODO_IMAGE_PATH_01,
    PROJECT_TODO_IMAGE_PATH_02,
    PROJECT_TODO_IMAGE_PATH_03,
    PROJECT_WEATHER_IMAGE_PATH,
    PROJECT_WEATHER_IMAGE_PATH_01,
    PROJECT_WEATHER_IMAGE_PATH_02,
    PROJECT_WEATHER_IMAGE_PATH_03,
    PROJECT_WEATHER_IMAGE_PATH_04,
    PROJECT_VIDEOS_STUDIO_IMAGE_PATH,
    PROJECT_VIDEOS_STUDIO_IMAGE_PATH_01,
    PROJECT_VIDEOS_STUDIO_IMAGE_PATH_02,
    PROJECT_VIDEOS_STUDIO_IMAGE_PATH_03,
} from "../constants/paths";
import {
    PROJECT_NAME_TODO,
    PROJECT_NAME_WEATHER,
    PROJECT_NAME_VIDEOS_STUDIO,
} from "../constants/text";

export const projectsData = [
    {
        name: PROJECT_NAME_TODO,
        id: "1",
        projectNumber: "0 1",
        description:
            "This application is a simple yet powerful To-Do list manager built with React. It allows users to add, delete, and mark tasks as completed. The interface is user-friendly, making it easy to manage your tasks efficiently.",
        imagesPath: [
            PROJECT_TODO_IMAGE_PATH,
            PROJECT_TODO_IMAGE_PATH_01,
            PROJECT_TODO_IMAGE_PATH_02,
            PROJECT_TODO_IMAGE_PATH_03,
        ],
        webSiteLink: "https://todo-app-mou.netlify.app/",
        creationDate: "8/23",
        feature: ["add task", "delete task", "mark task as complete"],
    },
    {
        name: PROJECT_NAME_WEATHER,
        id: "2",
        projectNumber: "0 2",
        description:
            "This application is a user-friendly Weather Forecast tool built with React. It allows users to search for the current weather conditions of any city around the world. The app leverages a reliable weather API to fetch real-time weather data, providing users with accurate and up-to-date information.",
        imagesPath: [
            PROJECT_WEATHER_IMAGE_PATH,
            PROJECT_WEATHER_IMAGE_PATH_01,
            PROJECT_WEATHER_IMAGE_PATH_02,
            PROJECT_WEATHER_IMAGE_PATH_03,
            PROJECT_WEATHER_IMAGE_PATH_04,
        ],
        webSiteLink: "https://weather-app-mou.netlify.app/",
        creationDate: "9/23",
        feature: ["search in any language", "unlimited search times"],
    },
    {
        name: PROJECT_NAME_VIDEOS_STUDIO,
        id: "3",
        projectNumber: "0 3",
        description:
            "Videos Studio is a frontend Project, was a collaborative effort, developed in partnership with Ameer Alaswad. We created a Interior Designer's Projects Gallery.",
        imagesPath: [
            PROJECT_VIDEOS_STUDIO_IMAGE_PATH,
            PROJECT_VIDEOS_STUDIO_IMAGE_PATH_01,
            PROJECT_VIDEOS_STUDIO_IMAGE_PATH_02,
            PROJECT_VIDEOS_STUDIO_IMAGE_PATH_03,
        ],
        webSiteLink: "https://videos-gallery.netlify.app/",
        creationDate: "1/24",
        feature: [
            "list of videos",
            "open single video",
            "send a message in the form",
        ],
    },
];
