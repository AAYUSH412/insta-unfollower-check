export const steps = [
    { 
      id: 1,
      title: "Open Instagram Settings",
      description: "Navigate to your Instagram profile and tap on the menu icon in the top right corner. Select 'Settings and Privacy', then click on 'Account Center'.",
      image: "/1image.jpg",
      altText: "Screenshot showing Instagram app settings menu with Account Center option"
    },
    { 
      id: 2,
      title: "Your Information and Permissions",
      description: "In the Account Center, find and select the 'Your Information and Permissions' option from the available menu items.",
      image: "/2image.jpg",
      altText: "Screenshot showing Account Center with Your Information and Permissions option"
    },
    {
        id: 3,
        title: "Download Your Information",
        description: "Look for and select the 'Download Your Information' option to proceed to the data download section.",
        image: "/3image.jpg",
        altText: "Screenshot showing Download Your Information option in the menu"
    },
    {
        id: 4,
        title: "Select Download or Transfer Information",
        description: "On the next screen, tap on the 'Download or Transfer Information' option to begin the data request process.",
        image: "/4image.jpg",
        altText: "Screenshot showing the Download or Transfer Information option"
    },
    {
        id: 5,
        title: "Select Instagram Account",
        description: "Choose the Instagram account you want to download data for if you have multiple accounts linked in Account Center.",
        image: "/5image.png",
        altText: "Screenshot showing account selection screen with Instagram account options"
    },
    {
        id: 6,
        title: "Choose Some of Your Information",
        description: "Select the 'Some of Your Information' option to choose specific data categories instead of downloading everything.",
        image: "/6image.jpg",
        altText: "Screenshot showing Some of Your Information option highlighted"
    },
    {
        id: 7,
        title: "Select Followers and Following Data",
        description: "Scroll down through the categories and make sure to check both 'Followers' and 'Following' data to include them in your download.",
        image: "/7image.png",
        altText: "Screenshot showing selection of Followers and Following data categories"
    },
    {
        id: 8,
        title: "Download to Device",
        description: "Choose the 'Download to Device' option to have your data sent directly to your current device rather than via email.",
        image: "/8image.png",
        altText: "Screenshot showing Download to Device option selected"
    },
    {
        id: 9,
        title: "Select Format and Create File",
        description: "Choose JSON format (essential for our tool), select your preferred date range, and click 'Create File' to begin the download process. Instagram may take some time to prepare your data.",
        image: "/9image.png",
        altText: "Screenshot showing JSON format selection and Create File button"
    }
];

// Additional information about using downloaded files
export const downloadHelp = {
    title: "Working with Downloaded Files",
    steps: [
        "After receiving your download, extract the ZIP file to your computer",
        "Look for the 'followers_1.json' file in the extracted folder",
        "Also find the 'following.json' file in the same location",
        "Upload both files to our tool to analyze your followers"
    ]
};

// FAQ data 
export const faqData = [
    {
        question: "How long does it take to get Instagram data?",
        answer: "Instagram typically takes between a few hours and 48 hours to prepare your data for download, depending on the amount of data requested."
    },
    {
        question: "Is it safe to upload my Instagram data files?",
        answer: "Yes, all data processing happens 100% locally in your browser. Your Instagram data never leaves your device and isn't sent to any servers."
    },
    {
        question: "Why do I need to use JSON format?",
        answer: "Our tool is designed to work with JSON files because they provide structured data that's easier to analyze programmatically."
    }
];