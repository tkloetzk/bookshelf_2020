const express = require('express');
const router = express.Router();
const get = require('lodash/get')

router.get('/v1/availability/:isbn', (req, res) => {
  const availibity =  [{
      "id": "S109C4523543",
      "sourceLibId": 109,
      "briefInfo": {
        "metadataId": "S109C4523543",
        "title": "Raw Dog Food",
        "subtitle": "Make It Easy for You and your Dog",
        "format": "BK",
        "superFormats": [
          "BOOKS",
          "MODERN_FORMATS"
        ],
        "consumptionFormat": "READ",
        "callNumber": "Adult Nonfiction Book",
        "description": null,
        "genreForm": [],
        "subjectHeadings": [
          "Dogs Food",
          "Raw food diet"
        ],
        "authors": [
          "MacDonald, Carina Beth, 1958-"
        ],
        "publicationDate": "2004",
        "jacket": {
          "type": "SYNDETICS",
          "small": "https://secure.syndetics.com/index.aspx?isbn=9781929242092/SC.GIF&client=hennp&type=xw12&oclc=",
          "medium": "https://secure.syndetics.com/index.aspx?isbn=9781929242092/MC.GIF&client=hennp&type=xw12&oclc=",
          "large": "https://secure.syndetics.com/index.aspx?isbn=9781929242092/LC.JPG&client=hennp&type=xw12&oclc=",
          "local_url": null
        },
        "isbns": [
          "9781929242092",
          "1929242093"
        ],
        "primaryLanguage": "eng",
        "series": [],
        "edition": null,
        "multiscriptTitle": null,
        "multiscriptAuthor": null,
        "contentType": "NONFICTION",
        "audiences": [
          "ADULT"
        ],
        "compositeSubjectHeadings": [
          "Dogs -- Food",
          "Raw Food Diet"
        ],
        "id": "S109C4523543",
        "rating": {}
      },
      "policy": {
        "materialType": "PHYSICAL",
        "provider": "ILS",
        "holdable": true,
        "itemLevelHoldableItems": false,
        "materialPolicy": {
          "supportsBatchVolumeHolds": true,
          "itemLevelHoldsPredetermined": true,
          "requiresDuration": false,
          "requiresEmailDuringHold": false,
          "requiresFormatDuringHold": false,
          "requiresFormatDuringCheckout": false,
          "supportsDownload": false,
          "supportsFastAvailability": false,
          "supportsReadNow": false,
          "showFormatDuringHold": false,
          "showFormatDuringCheckout": false,
          "supportsSuspendHold": false,
          "supportsSuspendHoldStartDateEdit": false,
          "supportsSuspendHoldEndDateEdit": true,
          "supportAutoCheckout": false,
          "showQuickstartLink": false,
          "supportsBorrowingHistory": false,
          "borrowingHistorySupportsReturnedDates": true,
          "maintainsBorrowingHistoryOnDisable": false,
          "supportsCancelledExpiredHolds": true,
          "helpUrl": null,
          "quickStartUrl": null,
          "externalAPI": false,
          "healthy": true
        }
      },
      "availability": {
        "metadataId": "S109C4523543",
        "bibType": "PHYSICAL",
        "availabilityLocationType": "OTHER",
        "status": "AVAILABLE",
        "circulationType": "REQUEST",
        "libraryUseOnly": false,
        "heldCopies": 0,
        "availableCopies": 2,
        "totalCopies": 2,
        "onOrderCopies": 0,
        "volumesCount": 0,
        "localisedStatus": "AVAILABLE_IN_BRANCH",
        "eresourceDescription": null,
        "eresourceUrl": null,
        "singleBranch": false,
        "statusType": "AVAILABLE"
      }
    }]

  res.send({ availibity });
});

router.post('/v1/search/:query', async (req, res) => {
  const response = {
    "catalogSearch": {
      "suppress": false,
      "custom_edit": false,
      "locked": false,
      "groupedSearchEnabled": true,
      "searchType": "keyword",
      "query": "Parenting",
      "pagination": {
        "count": 12327,
        "limit": 25,
        "page": 1,
        "pages": 494,
        "pageForSolr": 0
      },
      "broadenedSearchType": "bkw",
      "broadened": false,
      "broadenedSearchCount": 2147483647,
      "didYouMeanResultCount": 0,
      "didYouMeanQuerySuggestion": null,
      "sortBys": [
        {
          "id": "relevancy",
          "applied": true
        },
        {
          "id": "newly_acquired",
          "applied": false
        },
        {
          "id": "title",
          "applied": false
        },
        {
          "id": "author",
          "applied": false
        },
        {
          "id": "published_date",
          "applied": false
        },
        {
          "id": "ugc_rating",
          "applied": false
        }
      ],
      "fields": [
        {
          "id": "FORMAT",
          "hasMore": true,
          "fieldFilters": [
            {
              "value": "BK",
              "groupIds": [
                "BOOKS"
              ],
              "label": "",
              "count": 8488,
              "applied": false
            },
            {
              "value": "EBOOK",
              "groupIds": [
                "BOOKS"
              ],
              "label": "",
              "count": 1974,
              "applied": false
            },
            {
              "value": "AB",
              "groupIds": [
                "AUDIOBOOKS_SPOKEN_WORD"
              ],
              "label": "",
              "count": 492,
              "applied": false
            },
            {
              "value": "WEBSITE",
              "groupIds": [
                "OTHER"
              ],
              "label": "",
              "count": 376,
              "applied": false
            },
            {
              "value": "DVD",
              "groupIds": [
                "MOVIES_TV_VIDEO"
              ],
              "label": "",
              "count": 267,
              "applied": false
            },
            {
              "value": "BOOK_CD",
              "groupIds": [
                "AUDIOBOOKS_SPOKEN_WORD"
              ],
              "label": "",
              "count": 232,
              "applied": false
            },
            {
              "value": "GRAPHIC_NOVEL",
              "groupIds": [
                "BOOKS"
              ],
              "label": "",
              "count": 133,
              "applied": false
            },
            {
              "value": "LPRINT",
              "groupIds": [
                "BOOKS",
                "ACCESSIBLE_FORMATS"
              ],
              "label": "",
              "count": 123,
              "applied": false
            },
            {
              "value": "MF",
              "groupIds": [
                "OTHER"
              ],
              "label": "",
              "count": 78,
              "applied": false
            },
            {
              "value": "EJ",
              "groupIds": [
                "JOURNALS_MAGAZINES"
              ],
              "label": "",
              "count": 58,
              "applied": false
            },
            {
              "value": "MAG",
              "groupIds": [
                "JOURNALS_MAGAZINES"
              ],
              "label": "",
              "count": 39,
              "applied": false
            },
            {
              "value": "MUSIC_CD",
              "groupIds": [
                "MUSIC_SOUND"
              ],
              "label": "",
              "count": 37,
              "applied": false
            },
            {
              "value": "MN",
              "groupIds": [
                "MUSIC_SOUND"
              ],
              "label": "",
              "count": 9,
              "applied": false
            },
            {
              "value": "UK",
              "groupIds": [
                "OTHER"
              ],
              "label": "",
              "count": 5,
              "applied": false
            },
            {
              "value": "VIDEO_ONLINE",
              "groupIds": [
                "MOVIES_TV_VIDEO"
              ],
              "label": "",
              "count": 5,
              "applied": false
            },
            {
              "value": "BOOK_CLUB_KIT",
              "groupIds": [
                "BOOKS"
              ],
              "label": "",
              "count": 4,
              "applied": false
            },
            {
              "value": "MIXED_MATERIAL",
              "groupIds": [
                "OTHER"
              ],
              "label": "",
              "count": 3,
              "applied": false
            },
            {
              "value": "BR",
              "groupIds": [
                "ACCESSIBLE_FORMATS"
              ],
              "label": "",
              "count": 2,
              "applied": false
            },
            {
              "value": "CDROM",
              "groupIds": [
                "GAMES_INTERACTIVE_MEDIA"
              ],
              "label": "",
              "count": 2,
              "applied": false
            }
          ]
        },
        {
          "id": "TOPIC_HEADINGS",
          "hasMore": true,
          "fieldFilters": [
            {
              "value": "Parent and child",
              "groupIds": [],
              "label": "",
              "count": 2655,
              "applied": false
            },
            {
              "value": "Parenting",
              "groupIds": [],
              "label": "",
              "count": 2409,
              "applied": false
            },
            {
              "value": "Child rearing",
              "groupIds": [],
              "label": "",
              "count": 1435,
              "applied": false
            },
            {
              "value": "Families",
              "groupIds": [],
              "label": "",
              "count": 1038,
              "applied": false
            },
            {
              "value": "Single-parent families",
              "groupIds": [],
              "label": "",
              "count": 948,
              "applied": false
            },
            {
              "value": "Parent participation",
              "groupIds": [],
              "label": "",
              "count": 749,
              "applied": false
            },
            {
              "value": "Family relationships",
              "groupIds": [],
              "label": "",
              "count": 661,
              "applied": false
            },
            {
              "value": "Parents",
              "groupIds": [],
              "label": "",
              "count": 646,
              "applied": false
            },
            {
              "value": "Children",
              "groupIds": [],
              "label": "",
              "count": 588,
              "applied": false
            },
            {
              "value": "Education",
              "groupIds": [],
              "label": "",
              "count": 554,
              "applied": false
            },
            {
              "value": "Children of divorced parents",
              "groupIds": [],
              "label": "",
              "count": 509,
              "applied": false
            },
            {
              "value": "Death",
              "groupIds": [],
              "label": "",
              "count": 466,
              "applied": false
            },
            {
              "value": "Parent and adult child",
              "groupIds": [],
              "label": "",
              "count": 458,
              "applied": false
            },
            {
              "value": "Religious aspects",
              "groupIds": [],
              "label": "",
              "count": 448,
              "applied": false
            },
            {
              "value": "Mothers and daughters",
              "groupIds": [],
              "label": "",
              "count": 437,
              "applied": false
            }
          ]
        },
        {
          "id": "GENRE_HEADINGS",
          "hasMore": true,
          "fieldFilters": [
            {
              "value": "Fiction",
              "groupIds": [],
              "label": "",
              "count": 2462,
              "applied": false
            },
            {
              "value": "Downloadable Books",
              "groupIds": [],
              "label": "",
              "count": 1963,
              "applied": false
            },
            {
              "value": "Juvenile Fiction",
              "groupIds": [],
              "label": "",
              "count": 1522,
              "applied": false
            },
            {
              "value": "Downloadable Audiobooks",
              "groupIds": [],
              "label": "",
              "count": 489,
              "applied": false
            },
            {
              "value": "Biography",
              "groupIds": [],
              "label": "",
              "count": 479,
              "applied": false
            },
            {
              "value": "Domestic Fiction",
              "groupIds": [],
              "label": "",
              "count": 396,
              "applied": false
            },
            {
              "value": "Romance Fiction",
              "groupIds": [],
              "label": "",
              "count": 367,
              "applied": false
            },
            {
              "value": "Psychological Fiction",
              "groupIds": [],
              "label": "",
              "count": 292,
              "applied": false
            },
            {
              "value": "Juvenile Literature",
              "groupIds": [],
              "label": "",
              "count": 241,
              "applied": false
            },
            {
              "value": "Drama",
              "groupIds": [],
              "label": "",
              "count": 227,
              "applied": false
            },
            {
              "value": "Handbooks, Manuals, Etc",
              "groupIds": [],
              "label": "",
              "count": 214,
              "applied": false
            },
            {
              "value": "Comic Books, Strips, Etc",
              "groupIds": [],
              "label": "",
              "count": 213,
              "applied": false
            },
            {
              "value": "Detective and Mystery Fiction",
              "groupIds": [],
              "label": "",
              "count": 183,
              "applied": false
            },
            {
              "value": "Thrillers (Fiction)",
              "groupIds": [],
              "label": "",
              "count": 180,
              "applied": false
            },
            {
              "value": "Humor",
              "groupIds": [],
              "label": "",
              "count": 179,
              "applied": false
            }
          ]
        },
        {
          "id": "GEO_HEADINGS",
          "hasMore": true,
          "fieldFilters": [
            {
              "value": "United States",
              "groupIds": [],
              "label": "",
              "count": 2381,
              "applied": false
            },
            {
              "value": "England",
              "groupIds": [],
              "label": "",
              "count": 142,
              "applied": false
            },
            {
              "value": "Massachusetts",
              "groupIds": [],
              "label": "",
              "count": 100,
              "applied": false
            },
            {
              "value": "New York (State)",
              "groupIds": [],
              "label": "",
              "count": 94,
              "applied": false
            },
            {
              "value": "California",
              "groupIds": [],
              "label": "",
              "count": 89,
              "applied": false
            },
            {
              "value": "Minnesota",
              "groupIds": [],
              "label": "",
              "count": 88,
              "applied": false
            },
            {
              "value": "New York (N.Y.)",
              "groupIds": [],
              "label": "",
              "count": 88,
              "applied": false
            },
            {
              "value": "Canada",
              "groupIds": [],
              "label": "",
              "count": 82,
              "applied": false
            },
            {
              "value": "Japan",
              "groupIds": [],
              "label": "",
              "count": 77,
              "applied": false
            },
            {
              "value": "Great Britain",
              "groupIds": [],
              "label": "",
              "count": 68,
              "applied": false
            },
            {
              "value": "London (England)",
              "groupIds": [],
              "label": "",
              "count": 68,
              "applied": false
            },
            {
              "value": "New York",
              "groupIds": [],
              "label": "",
              "count": 67,
              "applied": false
            },
            {
              "value": "Boston (Mass.)",
              "groupIds": [],
              "label": "",
              "count": 58,
              "applied": false
            },
            {
              "value": "Texas",
              "groupIds": [],
              "label": "",
              "count": 53,
              "applied": false
            },
            {
              "value": "France",
              "groupIds": [],
              "label": "",
              "count": 45,
              "applied": false
            }
          ]
        },
        {
          "id": "PUBLISHED_DATE",
          "hasMore": true,
          "fieldFilters": [
            {
              "value": "2020",
              "groupIds": [],
              "label": "",
              "count": 86,
              "applied": false
            },
            {
              "value": "2019",
              "groupIds": [],
              "label": "",
              "count": 618,
              "applied": false
            },
            {
              "value": "2018",
              "groupIds": [],
              "label": "",
              "count": 684,
              "applied": false
            },
            {
              "value": "2017",
              "groupIds": [],
              "label": "",
              "count": 554,
              "applied": false
            },
            {
              "value": "2016",
              "groupIds": [],
              "label": "",
              "count": 563,
              "applied": false
            },
            {
              "value": "2015",
              "groupIds": [],
              "label": "",
              "count": 628,
              "applied": false
            },
            {
              "value": "2014",
              "groupIds": [],
              "label": "",
              "count": 622,
              "applied": false
            },
            {
              "value": "2013",
              "groupIds": [],
              "label": "",
              "count": 693,
              "applied": false
            },
            {
              "value": "2012",
              "groupIds": [],
              "label": "",
              "count": 648,
              "applied": false
            },
            {
              "value": "2011",
              "groupIds": [],
              "label": "",
              "count": 574,
              "applied": false
            },
            {
              "value": "2010",
              "groupIds": [],
              "label": "",
              "count": 474,
              "applied": false
            },
            {
              "value": "2009",
              "groupIds": [],
              "label": "",
              "count": 457,
              "applied": false
            },
            {
              "value": "2008",
              "groupIds": [],
              "label": "",
              "count": 419,
              "applied": false
            },
            {
              "value": "2007",
              "groupIds": [],
              "label": "",
              "count": 315,
              "applied": false
            },
            {
              "value": "2006",
              "groupIds": [],
              "label": "",
              "count": 291,
              "applied": false
            }
          ]
        },
        {
          "id": "TAG_GENRE",
          "hasMore": true,
          "fieldFilters": [
            {
              "value": "mp3",
              "groupIds": [],
              "label": "",
              "count": 129,
              "applied": false
            },
            {
              "value": "realistic fiction",
              "groupIds": [],
              "label": "",
              "count": 103,
              "applied": false
            },
            {
              "value": "fiction",
              "groupIds": [],
              "label": "",
              "count": 75,
              "applied": false
            },
            {
              "value": "fantasy",
              "groupIds": [],
              "label": "",
              "count": 64,
              "applied": false
            },
            {
              "value": "learning differences",
              "groupIds": [],
              "label": "",
              "count": 56,
              "applied": false
            },
            {
              "value": "mystery",
              "groupIds": [],
              "label": "",
              "count": 47,
              "applied": false
            },
            {
              "value": "parenting",
              "groupIds": [],
              "label": "",
              "count": 45,
              "applied": false
            },
            {
              "value": "drama",
              "groupIds": [],
              "label": "",
              "count": 42,
              "applied": false
            },
            {
              "value": "tragedy",
              "groupIds": [],
              "label": "",
              "count": 42,
              "applied": false
            },
            {
              "value": "nypl staff pick",
              "groupIds": [],
              "label": "",
              "count": 41,
              "applied": false
            },
            {
              "value": "glbtq",
              "groupIds": [],
              "label": "",
              "count": 39,
              "applied": false
            },
            {
              "value": "picture book",
              "groupIds": [],
              "label": "",
              "count": 39,
              "applied": false
            },
            {
              "value": "romance",
              "groupIds": [],
              "label": "",
              "count": 38,
              "applied": false
            },
            {
              "value": "non-fiction",
              "groupIds": [],
              "label": "",
              "count": 37,
              "applied": false
            },
            {
              "value": "press book review",
              "groupIds": [],
              "label": "",
              "count": 37,
              "applied": false
            }
          ]
        },
        {
          "id": "TAG_ABOUT",
          "hasMore": true,
          "fieldFilters": [
            {
              "value": "family",
              "groupIds": [],
              "label": "",
              "count": 156,
              "applied": false
            },
            {
              "value": "parenting",
              "groupIds": [],
              "label": "",
              "count": 111,
              "applied": false
            },
            {
              "value": "guys read recommended",
              "groupIds": [],
              "label": "",
              "count": 43,
              "applied": false
            },
            {
              "value": "realisticchapterbook",
              "groupIds": [],
              "label": "",
              "count": 42,
              "applied": false
            },
            {
              "value": "friendship",
              "groupIds": [],
              "label": "",
              "count": 41,
              "applied": false
            },
            {
              "value": "love",
              "groupIds": [],
              "label": "",
              "count": 41,
              "applied": false
            },
            {
              "value": "orangereadinglevel",
              "groupIds": [],
              "label": "",
              "count": 36,
              "applied": false
            },
            {
              "value": "fifthgrade",
              "groupIds": [],
              "label": "",
              "count": 35,
              "applied": false
            },
            {
              "value": "lgbtq+",
              "groupIds": [],
              "label": "",
              "count": 33,
              "applied": false
            },
            {
              "value": "families",
              "groupIds": [],
              "label": "",
              "count": 32,
              "applied": false
            },
            {
              "value": "grief",
              "groupIds": [],
              "label": "",
              "count": 31,
              "applied": false
            },
            {
              "value": "growing up",
              "groupIds": [],
              "label": "",
              "count": 31,
              "applied": false
            },
            {
              "value": "planetree health info center @ cupertino",
              "groupIds": [],
              "label": "",
              "count": 31,
              "applied": false
            },
            {
              "value": "relationships",
              "groupIds": [],
              "label": "",
              "count": 30,
              "applied": false
            },
            {
              "value": "children",
              "groupIds": [],
              "label": "",
              "count": 28,
              "applied": false
            }
          ]
        },
        {
          "id": "TAG_TONE",
          "hasMore": true,
          "fieldFilters": [
            {
              "value": "funny",
              "groupIds": [],
              "label": "",
              "count": 92,
              "applied": false
            },
            {
              "value": "dark",
              "groupIds": [],
              "label": "",
              "count": 80,
              "applied": false
            },
            {
              "value": "moody",
              "groupIds": [],
              "label": "",
              "count": 63,
              "applied": false
            },
            {
              "value": "hilarious",
              "groupIds": [],
              "label": "",
              "count": 40,
              "applied": false
            },
            {
              "value": "sad",
              "groupIds": [],
              "label": "",
              "count": 36,
              "applied": false
            },
            {
              "value": "4th grade",
              "groupIds": [],
              "label": "",
              "count": 30,
              "applied": false
            },
            {
              "value": "5th grade",
              "groupIds": [],
              "label": "",
              "count": 30,
              "applied": false
            },
            {
              "value": "6th grade",
              "groupIds": [],
              "label": "",
              "count": 30,
              "applied": false
            },
            {
              "value": "atmospheric",
              "groupIds": [],
              "label": "",
              "count": 28,
              "applied": false
            },
            {
              "value": "mind care",
              "groupIds": [],
              "label": "",
              "count": 25,
              "applied": false
            },
            {
              "value": "mindcare",
              "groupIds": [],
              "label": "",
              "count": 25,
              "applied": false
            },
            {
              "value": "soins d'esprit",
              "groupIds": [],
              "label": "",
              "count": 25,
              "applied": false
            },
            {
              "value": "descriptive",
              "groupIds": [],
              "label": "",
              "count": 24,
              "applied": false
            },
            {
              "value": "light",
              "groupIds": [],
              "label": "",
              "count": 24,
              "applied": false
            },
            {
              "value": "fast-paced",
              "groupIds": [],
              "label": "",
              "count": 22,
              "applied": false
            }
          ]
        },
        {
          "id": "LANGUAGE",
          "hasMore": true,
          "fieldFilters": [
            {
              "value": "eng",
              "groupIds": [],
              "label": "",
              "count": 11940,
              "applied": false
            },
            {
              "value": "spa",
              "groupIds": [],
              "label": "",
              "count": 334,
              "applied": false
            },
            {
              "value": "fre",
              "groupIds": [],
              "label": "",
              "count": 97,
              "applied": false
            },
            {
              "value": "chi",
              "groupIds": [],
              "label": "",
              "count": 68,
              "applied": false
            },
            {
              "value": "und",
              "groupIds": [],
              "label": "",
              "count": 32,
              "applied": false
            },
            {
              "value": "jpn",
              "groupIds": [],
              "label": "",
              "count": 24,
              "applied": false
            },
            {
              "value": "vie",
              "groupIds": [],
              "label": "",
              "count": 23,
              "applied": false
            },
            {
              "value": "ger",
              "groupIds": [],
              "label": "",
              "count": 21,
              "applied": false
            },
            {
              "value": "ara",
              "groupIds": [],
              "label": "",
              "count": 14,
              "applied": false
            },
            {
              "value": "rus",
              "groupIds": [],
              "label": "",
              "count": 13,
              "applied": false
            },
            {
              "value": "hin",
              "groupIds": [],
              "label": "",
              "count": 11,
              "applied": false
            },
            {
              "value": "kor",
              "groupIds": [],
              "label": "",
              "count": 9,
              "applied": false
            },
            {
              "value": "por",
              "groupIds": [],
              "label": "",
              "count": 5,
              "applied": false
            },
            {
              "value": "zxx",
              "groupIds": [],
              "label": "",
              "count": 4,
              "applied": false
            },
            {
              "value": "som",
              "groupIds": [],
              "label": "",
              "count": 3,
              "applied": false
            }
          ]
        },
        {
          "id": "AUTHOR",
          "hasMore": true,
          "fieldFilters": [
            {
              "value": "United States",
              "groupIds": [],
              "label": "",
              "count": 181,
              "applied": false
            },
            {
              "value": "Hawthorne, Nathaniel, 1804-1864",
              "groupIds": [],
              "label": "",
              "count": 38,
              "applied": false
            },
            {
              "value": "Naylor, Phyllis Reynolds",
              "groupIds": [],
              "label": "",
              "count": 35,
              "applied": false
            },
            {
              "value": "Cleary, Beverly",
              "groupIds": [],
              "label": "",
              "count": 22,
              "applied": false
            },
            {
              "value": "Kirkman, Rick",
              "groupIds": [],
              "label": "",
              "count": 22,
              "applied": false
            },
            {
              "value": "Paulsen, Gary",
              "groupIds": [],
              "label": "",
              "count": 22,
              "applied": false
            },
            {
              "value": "Steel, Danielle",
              "groupIds": [],
              "label": "",
              "count": 22,
              "applied": false
            },
            {
              "value": "Phelan, Thomas W., 1943-",
              "groupIds": [],
              "label": "",
              "count": 21,
              "applied": false
            },
            {
              "value": "Vaughan, Brian K.",
              "groupIds": [],
              "label": "",
              "count": 21,
              "applied": false
            },
            {
              "value": "Birdsall, Jeanne",
              "groupIds": [],
              "label": "",
              "count": 19,
              "applied": false
            },
            {
              "value": "Danziger, Paula, 1944-2004",
              "groupIds": [],
              "label": "",
              "count": 19,
              "applied": false
            },
            {
              "value": "Leman, Kevin",
              "groupIds": [],
              "label": "",
              "count": 18,
              "applied": false
            },
            {
              "value": "Picoult, Jodi, 1966-",
              "groupIds": [],
              "label": "",
              "count": 17,
              "applied": false
            },
            {
              "value": "Nelsen, Jane",
              "groupIds": [],
              "label": "",
              "count": 16,
              "applied": false
            },
            {
              "value": "Rice, Luanne",
              "groupIds": [],
              "label": "",
              "count": 16,
              "applied": false
            }
          ]
        },
        {
          "id": "AUDIENCE",
          "hasMore": false,
          "fieldFilters": [
            {
              "value": "adult",
              "groupIds": [],
              "label": "",
              "count": 10051,
              "applied": false
            },
            {
              "value": "juvenile",
              "groupIds": [],
              "label": "",
              "count": 1694,
              "applied": false
            },
            {
              "value": "teen",
              "groupIds": [],
              "label": "",
              "count": 646,
              "applied": false
            }
          ]
        },
        {
          "id": "PRIMARY_LANGUAGE",
          "hasMore": true,
          "fieldFilters": [
            {
              "value": "eng",
              "groupIds": [],
              "label": "",
              "count": 11876,
              "applied": false
            },
            {
              "value": "spa",
              "groupIds": [],
              "label": "",
              "count": 221,
              "applied": false
            },
            {
              "value": "chi",
              "groupIds": [],
              "label": "",
              "count": 63,
              "applied": false
            },
            {
              "value": "und",
              "groupIds": [],
              "label": "",
              "count": 30,
              "applied": false
            },
            {
              "value": "fre",
              "groupIds": [],
              "label": "",
              "count": 27,
              "applied": false
            },
            {
              "value": "vie",
              "groupIds": [],
              "label": "",
              "count": 23,
              "applied": false
            },
            {
              "value": "jpn",
              "groupIds": [],
              "label": "",
              "count": 16,
              "applied": false
            },
            {
              "value": "ara",
              "groupIds": [],
              "label": "",
              "count": 13,
              "applied": false
            },
            {
              "value": "rus",
              "groupIds": [],
              "label": "",
              "count": 13,
              "applied": false
            },
            {
              "value": "ger",
              "groupIds": [],
              "label": "",
              "count": 12,
              "applied": false
            },
            {
              "value": "hin",
              "groupIds": [],
              "label": "",
              "count": 11,
              "applied": false
            },
            {
              "value": "kor",
              "groupIds": [],
              "label": "",
              "count": 6,
              "applied": false
            },
            {
              "value": "zxx",
              "groupIds": [],
              "label": "",
              "count": 4,
              "applied": false
            },
            {
              "value": "som",
              "groupIds": [],
              "label": "",
              "count": 3,
              "applied": false
            },
            {
              "value": "hmn",
              "groupIds": [],
              "label": "",
              "count": 2,
              "applied": false
            }
          ]
        },
        {
          "id": "FICTION_TYPE",
          "hasMore": false,
          "fieldFilters": [
            {
              "value": "NONFICTION",
              "groupIds": [],
              "label": "",
              "count": 6679,
              "applied": false
            },
            {
              "value": "FICTION",
              "groupIds": [],
              "label": "",
              "count": 4282,
              "applied": false
            },
            {
              "value": "GOVERNMENT_DOCUMENTS",
              "groupIds": [],
              "label": "",
              "count": 999,
              "applied": false
            },
            {
              "value": "UNDETERMINED",
              "groupIds": [],
              "label": "",
              "count": 367,
              "applied": false
            }
          ]
        },
        {
          "id": "CIRC",
          "hasMore": false,
          "fieldFilters": [
            {
              "value": "CIRC",
              "groupIds": [],
              "label": "",
              "count": 8578,
              "applied": false
            },
            {
              "value": "ONLINE",
              "groupIds": [],
              "label": "",
              "count": 2981,
              "applied": false
            },
            {
              "value": "NON_CIRC",
              "groupIds": [],
              "label": "",
              "count": 914,
              "applied": false
            }
          ]
        },
        {
          "id": "TECHNICAL_DIFFICULTY",
          "hasMore": false,
          "fieldFilters": [
            {
              "value": "BR",
              "groupIds": [],
              "label": "",
              "count": 26,
              "applied": false
            },
            {
              "value": "L100_TO_L190",
              "groupIds": [],
              "label": "",
              "count": 3,
              "applied": false
            },
            {
              "value": "L200_TO_L290",
              "groupIds": [],
              "label": "",
              "count": 28,
              "applied": false
            },
            {
              "value": "L300_TO_L390",
              "groupIds": [],
              "label": "",
              "count": 28,
              "applied": false
            },
            {
              "value": "L400_TO_L490",
              "groupIds": [],
              "label": "",
              "count": 60,
              "applied": false
            },
            {
              "value": "L500_TO_L590",
              "groupIds": [],
              "label": "",
              "count": 128,
              "applied": false
            },
            {
              "value": "L600_TO_L690",
              "groupIds": [],
              "label": "",
              "count": 197,
              "applied": false
            },
            {
              "value": "L700_TO_L790",
              "groupIds": [],
              "label": "",
              "count": 205,
              "applied": false
            },
            {
              "value": "L800_TO_L890",
              "groupIds": [],
              "label": "",
              "count": 120,
              "applied": false
            },
            {
              "value": "L900_TO_L990",
              "groupIds": [],
              "label": "",
              "count": 48,
              "applied": false
            },
            {
              "value": "L1000_TO_L1090",
              "groupIds": [],
              "label": "",
              "count": 31,
              "applied": false
            },
            {
              "value": "L1100_TO_L1190",
              "groupIds": [],
              "label": "",
              "count": 13,
              "applied": false
            },
            {
              "value": "L1200_AND_UP",
              "groupIds": [],
              "label": "",
              "count": 27,
              "applied": false
            }
          ]
        },
        {
          "id": "UGC_RATING",
          "hasMore": false,
          "fieldFilters": [
            {
              "value": "FOUR_PLUS_STARS",
              "groupIds": [],
              "label": "",
              "count": 2357,
              "applied": false
            },
            {
              "value": "THREE_PLUS_STARS",
              "groupIds": [],
              "label": "",
              "count": 2407,
              "applied": false
            },
            {
              "value": "TWO_PLUS_STARS",
              "groupIds": [],
              "label": "",
              "count": 360,
              "applied": false
            },
            {
              "value": "ONE_PLUS_STARS",
              "groupIds": [],
              "label": "",
              "count": 67,
              "applied": false
            }
          ]
        },
        {
          "id": "STATUS",
          "hasMore": true,
          "fieldFilters": [
            {
              "value": "_anywhere_",
              "groupIds": [],
              "label": "_anywhere_",
              "count": 10592,
              "applied": false
            },
            {
              "value": "AF",
              "groupIds": [],
              "label": "Arvonne Fraser",
              "count": 2358,
              "applied": false
            },
            {
              "value": "AP",
              "groupIds": [],
              "label": "Augsburg Park",
              "count": 2649,
              "applied": false
            },
            {
              "value": "BD",
              "groupIds": [],
              "label": "Brookdale",
              "count": 3286,
              "applied": false
            },
            {
              "value": "BP",
              "groupIds": [],
              "label": "Brooklyn Park",
              "count": 2682,
              "applied": false
            },
            {
              "value": "CH",
              "groupIds": [],
              "label": "Champlin",
              "count": 2457,
              "applied": false
            },
            {
              "value": "CM",
              "groupIds": [],
              "label": "Collection Management",
              "count": 2232,
              "applied": false
            },
            {
              "value": "EL",
              "groupIds": [],
              "label": "East Lake",
              "count": 2604,
              "applied": false
            },
            {
              "value": "EP",
              "groupIds": [],
              "label": "Eden Prairie",
              "count": 3122,
              "applied": false
            },
            {
              "value": "ED",
              "groupIds": [],
              "label": "Edina",
              "count": 2749,
              "applied": false
            },
            {
              "value": "EX",
              "groupIds": [],
              "label": "Excelsior",
              "count": 2386,
              "applied": false
            },
            {
              "value": "GV",
              "groupIds": [],
              "label": "Golden Valley",
              "count": 2604,
              "applied": false
            },
            {
              "value": "HO",
              "groupIds": [],
              "label": "Hopkins",
              "count": 2636,
              "applied": false
            },
            {
              "value": "HS",
              "groupIds": [],
              "label": "Hosmer",
              "count": 2495,
              "applied": false
            },
            {
              "value": "LH",
              "groupIds": [],
              "label": "Linden Hills",
              "count": 2416,
              "applied": false
            },
            {
              "value": "LL",
              "groupIds": [],
              "label": "Long Lake",
              "count": 2295,
              "applied": false
            },
            {
              "value": "MG",
              "groupIds": [],
              "label": "Maple Grove",
              "count": 3065,
              "applied": false
            },
            {
              "value": "MP",
              "groupIds": [],
              "label": "Maple Plain",
              "count": 2316,
              "applied": false
            },
            {
              "value": "MC",
              "groupIds": [],
              "label": "Minneapolis Central",
              "count": 2234,
              "applied": false
            },
            {
              "value": "MC1",
              "groupIds": [],
              "label": "Minneapolis Central (1st floor General)",
              "count": 3987,
              "applied": false
            },
            {
              "value": "MCBS",
              "groupIds": [],
              "label": "Minneapolis Central (2nd floor Business and Science)",
              "count": 2683,
              "applied": false
            },
            {
              "value": "MCGD",
              "groupIds": [],
              "label": "Minneapolis Central (2nd floor Government Documents)",
              "count": 2805,
              "applied": false
            },
            {
              "value": "MC2",
              "groupIds": [],
              "label": "Minneapolis Central (2nd floor Teen Central)",
              "count": 2298,
              "applied": false
            },
            {
              "value": "MCAL",
              "groupIds": [],
              "label": "Minneapolis Central (3rd floor Arts and Literature)",
              "count": 2435,
              "applied": false
            },
            {
              "value": "MC3",
              "groupIds": [],
              "label": "Minneapolis Central (3rd floor General)",
              "count": 2243,
              "applied": false
            },
            {
              "value": "MC4",
              "groupIds": [],
              "label": "Minneapolis Central (4th floor General)",
              "count": 2402,
              "applied": false
            },
            {
              "value": "MCHS",
              "groupIds": [],
              "label": "Minneapolis Central (4th floor History and Social Science)",
              "count": 4452,
              "applied": false
            },
            {
              "value": "MCNA",
              "groupIds": [],
              "label": "Minneapolis Central (4th floor New Americans Center)",
              "count": 2232,
              "applied": false
            },
            {
              "value": "MCSC",
              "groupIds": [],
              "label": "Minneapolis Central (4th floor Special Collections)",
              "count": 2269,
              "applied": false
            },
            {
              "value": "MI",
              "groupIds": [],
              "label": "Minnetonka",
              "count": 2483,
              "applied": false
            },
            {
              "value": "MLAC",
              "groupIds": [],
              "label": "MN Library Access Center",
              "count": 2728,
              "applied": false
            },
            {
              "value": "NK",
              "groupIds": [],
              "label": "Nokomis",
              "count": 2630,
              "applied": false
            },
            {
              "value": "NR",
              "groupIds": [],
              "label": "North Regional",
              "count": 2510,
              "applied": false
            },
            {
              "value": "NE",
              "groupIds": [],
              "label": "Northeast",
              "count": 2616,
              "applied": false
            },
            {
              "value": "OS",
              "groupIds": [],
              "label": "Osseo",
              "count": 2271,
              "applied": false
            },
            {
              "value": "OX",
              "groupIds": [],
              "label": "Oxboro",
              "count": 2532,
              "applied": false
            },
            {
              "value": "PL",
              "groupIds": [],
              "label": "Penn Lake",
              "count": 2660,
              "applied": false
            },
            {
              "value": "PB",
              "groupIds": [],
              "label": "Pierre Bottineau",
              "count": 2446,
              "applied": false
            },
            {
              "value": "PY",
              "groupIds": [],
              "label": "Plymouth",
              "count": 2818,
              "applied": false
            },
            {
              "value": "RD",
              "groupIds": [],
              "label": "Ridgedale",
              "count": 3731,
              "applied": false
            },
            {
              "value": "RR",
              "groupIds": [],
              "label": "Rockford Road",
              "count": 2624,
              "applied": false
            },
            {
              "value": "RG",
              "groupIds": [],
              "label": "Rogers",
              "count": 2329,
              "applied": false
            },
            {
              "value": "RO",
              "groupIds": [],
              "label": "Roosevelt",
              "count": 2399,
              "applied": false
            },
            {
              "value": "SD",
              "groupIds": [],
              "label": "Southdale",
              "count": 3647,
              "applied": false
            },
            {
              "value": "SA",
              "groupIds": [],
              "label": "St. Anthony",
              "count": 2462,
              "applied": false
            },
            {
              "value": "SB",
              "groupIds": [],
              "label": "St. Bonifacius",
              "count": 2272,
              "applied": false
            },
            {
              "value": "SL",
              "groupIds": [],
              "label": "St. Louis Park",
              "count": 2688,
              "applied": false
            },
            {
              "value": "SU",
              "groupIds": [],
              "label": "Sumner",
              "count": 2400,
              "applied": false
            },
            {
              "value": "SUSU",
              "groupIds": [],
              "label": "Sumner Sudduth African American",
              "count": 2309,
              "applied": false
            },
            {
              "value": "WK",
              "groupIds": [],
              "label": "Walker",
              "count": 2621,
              "applied": false
            },
            {
              "value": "WN",
              "groupIds": [],
              "label": "Washburn",
              "count": 2742,
              "applied": false
            },
            {
              "value": "WA",
              "groupIds": [],
              "label": "Wayzata",
              "count": 2463,
              "applied": false
            },
            {
              "value": "WP",
              "groupIds": [],
              "label": "Webber Park",
              "count": 2390,
              "applied": false
            },
            {
              "value": "WT",
              "groupIds": [],
              "label": "Westonka",
              "count": 2417,
              "applied": false
            }
          ]
        },
        {
          "id": "NEWLY_ACQUIRED",
          "hasMore": false,
          "fieldFilters": [
            {
              "value": "PAST_7_DAYS",
              "groupIds": [],
              "label": "",
              "count": 17,
              "applied": false
            },
            {
              "value": "PAST_30_DAYS",
              "groupIds": [],
              "label": "",
              "count": 68,
              "applied": false
            },
            {
              "value": "PAST_60_DAYS",
              "groupIds": [],
              "label": "",
              "count": 139,
              "applied": false
            },
            {
              "value": "PAST_90_DAYS",
              "groupIds": [],
              "label": "",
              "count": 183,
              "applied": false
            },
            {
              "value": "PAST_180_DAYS",
              "groupIds": [],
              "label": "",
              "count": 322,
              "applied": false
            },
            {
              "value": "OLDER_THAN_180_DAYS",
              "groupIds": [],
              "label": "",
              "count": 12005,
              "applied": false
            }
          ]
        }
      ],
      "results": [
        {
          "representative": "S109C5699816",
          "manifestations": [
            "S109C5699816"
          ]
        },
        {
          "representative": "S109C5612737",
          "manifestations": [
            "S109C5612737"
          ]
        },
        {
          "representative": "S109C3092482",
          "manifestations": [
            "S109C3092482"
          ]
        },
        {
          "representative": "S109C4734069",
          "manifestations": [
            "S109C4734069"
          ]
        },
        {
          "representative": "S109C226772",
          "manifestations": [
            "S109C226772"
          ]
        },
        {
          "representative": "S109C4655300",
          "manifestations": [
            "S109C4655300"
          ]
        },
        {
          "representative": "S109C3291185",
          "manifestations": [
            "S109C3291185"
          ]
        },
        {
          "representative": "S109C3478728",
          "manifestations": [
            "S109C3478728"
          ]
        },
        {
          "representative": "S109C5790667",
          "manifestations": [
            "S109C5790667"
          ]
        },
        {
          "representative": "S109C5509210",
          "manifestations": [
            "S109C5509210"
          ]
        },
        {
          "representative": "S109C4738340",
          "manifestations": [
            "S109C4738340"
          ]
        },
        {
          "representative": "S109C4181790",
          "manifestations": [
            "S109C4181790"
          ]
        },
        {
          "representative": "S109C4059677",
          "manifestations": [
            "S109C4059677"
          ]
        },
        {
          "representative": "S109C4694588",
          "manifestations": [
            "S109C4694588"
          ]
        },
        {
          "representative": "S109C5509209",
          "manifestations": [
            "S109C5509209"
          ]
        },
        {
          "representative": "S109C4938734",
          "manifestations": [
            "S109C4938734"
          ]
        },
        {
          "representative": "S109C4839085",
          "manifestations": [
            "S109C4839085"
          ]
        },
        {
          "representative": "S109C4694589",
          "manifestations": [
            "S109C4694589"
          ]
        },
        {
          "representative": "S109C4694591",
          "manifestations": [
            "S109C4694591"
          ]
        },
        {
          "representative": "S109C986254",
          "manifestations": [
            "S109C986254"
          ]
        },
        {
          "representative": "S109C5526295",
          "manifestations": [
            "S109C5526295"
          ]
        },
        {
          "representative": "S109C3813940",
          "manifestations": [
            "S109C3813940"
          ]
        },
        {
          "representative": "S109C4360566",
          "manifestations": [
            "S109C4360566"
          ]
        },
        {
          "representative": "S109C4360889",
          "manifestations": [
            "S109C4360889"
          ]
        },
        {
          "representative": "S109C5831250",
          "manifestations": [
            "S109C5831250"
          ]
        }
      ],
      "scope": "MN-HENNEPIN"
    },
    "entities": {
      "bibs": {
        "S109C5699816": {
          "id": "S109C5699816",
          "sourceLibId": 109,
          "briefInfo": {
            "metadataId": "S109C5699816",
            "title": "Parenting",
            "subtitle": "The 14 Gospel Principles That Can Radically Change your Family",
            "format": "BK",
            "superFormats": [
              "BOOKS",
              "MODERN_FORMATS"
            ],
            "consumptionFormat": "READ",
            "callNumber": "Adult Nonfiction Book",
            "description": "What is your calling as a parent? In the midst of folding laundry, coordinating carpool schedules, and breaking up fights, many parents get lost. Feeling pressure to do everything \"right\" and raise up \"good\" children, it's easy to lose sight of our ultimate purpose as parents in the quest for practical tips and guaranteed formulas. In this book, Paul Tripp offers parents much more than a to-do list. Instead, he presents us with a big-picture view of God's plan for us as parents. Outlining fourteen foundational principles centered on the gospel, he shows that we need more than the latest parenting strategy or list of techniques. Rather, we need the rescuing grace of God -- grace that has the power to shape how we view everything we do as parents. Freed from the burden of trying to manufacture life-change in our children's hearts, we can embrace a grand perspective of parenting overflowing with vision, purpose, and joy.",
            "genreForm": [],
            "subjectHeadings": [
              "Parents Religious life",
              "Parenting Religious aspects Christianity",
              "Child rearing Religious aspects Christianity"
            ],
            "authors": [
              "Tripp, Paul David, 1950-"
            ],
            "publicationDate": "2016",
            "jacket": {
              "type": "SYNDETICS",
              "small": "https://secure.syndetics.com/index.aspx?isbn=9781433551932/SC.GIF&client=hennp&type=xw12&oclc=",
              "medium": "https://secure.syndetics.com/index.aspx?isbn=9781433551932/MC.GIF&client=hennp&type=xw12&oclc=",
              "large": "https://secure.syndetics.com/index.aspx?isbn=9781433551932/LC.JPG&client=hennp&type=xw12&oclc=",
              "local_url": null
            },
            "isbns": [
              "9781433551932",
              "1433551934"
            ],
            "primaryLanguage": "eng",
            "series": [],
            "edition": null,
            "multiscriptTitle": null,
            "multiscriptAuthor": null,
            "contentType": "NONFICTION",
            "audiences": [
              "ADULT"
            ],
            "compositeSubjectHeadings": [
              "Parents -- Religious Life",
              "Parenting -- Religious Aspects -- Christianity",
              "Child Rearing -- Religious Aspects -- Christianity"
            ],
            "id": "S109C5699816",
            "rating": {}
          },
          "policy": {
            "materialType": "PHYSICAL",
            "provider": "ILS",
            "holdable": true,
            "itemLevelHoldableItems": false,
            "materialPolicy": {
              "supportsBatchVolumeHolds": true,
              "itemLevelHoldsPredetermined": true,
              "requiresDuration": false,
              "requiresEmailDuringHold": false,
              "requiresFormatDuringHold": false,
              "requiresFormatDuringCheckout": false,
              "supportsDownload": false,
              "supportsFastAvailability": false,
              "supportsReadNow": false,
              "showFormatDuringHold": false,
              "showFormatDuringCheckout": false,
              "supportsSuspendHold": false,
              "supportsSuspendHoldStartDateEdit": false,
              "supportsSuspendHoldEndDateEdit": true,
              "supportAutoCheckout": false,
              "showQuickstartLink": false,
              "supportsBorrowingHistory": false,
              "borrowingHistorySupportsReturnedDates": true,
              "maintainsBorrowingHistoryOnDisable": false,
              "supportsCancelledExpiredHolds": true,
              "helpUrl": null,
              "quickStartUrl": null,
              "externalAPI": false,
              "healthy": true
            }
          },
          "availability": {
            "metadataId": "S109C5699816",
            "bibType": "PHYSICAL",
            "availabilityLocationType": "NA",
            "status": "UNAVAILABLE",
            "circulationType": "REQUEST",
            "libraryUseOnly": false,
            "heldCopies": 24,
            "availableCopies": 0,
            "totalCopies": 3,
            "onOrderCopies": 0,
            "volumesCount": 0,
            "localisedStatus": "UNAVAILABLE",
            "eresourceDescription": null,
            "eresourceUrl": null,
            "singleBranch": false,
            "statusType": "UNAVAILABLE"
          }
        },
        "S109C5612737": {
          "id": "S109C5612737",
          "sourceLibId": 109,
          "briefInfo": {
            "metadataId": "S109C5612737",
            "title": "Parenting",
            "subtitle": "50 One-minute Dos and Don'ts for Moms and Dads",
            "format": "BK",
            "superFormats": [
              "BOOKS",
              "MODERN_FORMATS"
            ],
            "consumptionFormat": "READ",
            "callNumber": "Adult Nonfiction Book",
            "description": "\"Fifty concise and practical parenting tips, each only one to three pages in length, with an accompanying photograph\"-- Provided by publisher.",
            "genreForm": [],
            "subjectHeadings": [
              "Parenting",
              "Parent and child"
            ],
            "authors": [
              "Hicks, Randall, 1956-"
            ],
            "publicationDate": "2017",
            "jacket": {
              "type": "SYNDETICS",
              "small": "https://secure.syndetics.com/index.aspx?isbn=9780979443053/SC.GIF&client=hennp&type=xw12&oclc=",
              "medium": "https://secure.syndetics.com/index.aspx?isbn=9780979443053/MC.GIF&client=hennp&type=xw12&oclc=",
              "large": "https://secure.syndetics.com/index.aspx?isbn=9780979443053/LC.JPG&client=hennp&type=xw12&oclc=",
              "local_url": null
            },
            "isbns": [
              "9780979443053",
              "0979443059"
            ],
            "primaryLanguage": "eng",
            "series": [],
            "edition": null,
            "multiscriptTitle": null,
            "multiscriptAuthor": null,
            "contentType": "NONFICTION",
            "audiences": [
              "ADULT"
            ],
            "compositeSubjectHeadings": [
              "Parenting",
              "Parent and Child"
            ],
            "id": "S109C5612737",
            "rating": {}
          },
          "policy": {
            "materialType": "PHYSICAL",
            "provider": "ILS",
            "holdable": true,
            "itemLevelHoldableItems": false,
            "materialPolicy": {
              "supportsBatchVolumeHolds": true,
              "itemLevelHoldsPredetermined": true,
              "requiresDuration": false,
              "requiresEmailDuringHold": false,
              "requiresFormatDuringHold": false,
              "requiresFormatDuringCheckout": false,
              "supportsDownload": false,
              "supportsFastAvailability": false,
              "supportsReadNow": false,
              "showFormatDuringHold": false,
              "showFormatDuringCheckout": false,
              "supportsSuspendHold": false,
              "supportsSuspendHoldStartDateEdit": false,
              "supportsSuspendHoldEndDateEdit": true,
              "supportAutoCheckout": false,
              "showQuickstartLink": false,
              "supportsBorrowingHistory": false,
              "borrowingHistorySupportsReturnedDates": true,
              "maintainsBorrowingHistoryOnDisable": false,
              "supportsCancelledExpiredHolds": true,
              "helpUrl": null,
              "quickStartUrl": null,
              "externalAPI": false,
              "healthy": true
            }
          },
          "availability": {
            "metadataId": "S109C5612737",
            "bibType": "PHYSICAL",
            "availabilityLocationType": "OTHER",
            "status": "AVAILABLE",
            "circulationType": "REQUEST",
            "libraryUseOnly": false,
            "heldCopies": 1,
            "availableCopies": 1,
            "totalCopies": 2,
            "onOrderCopies": 0,
            "volumesCount": 0,
            "localisedStatus": "AVAILABLE_IN_BRANCH",
            "eresourceDescription": null,
            "eresourceUrl": null,
            "singleBranch": false,
            "statusType": "AVAILABLE"
          }
        },
        "S109C3092482": {
          "id": "S109C3092482",
          "sourceLibId": 109,
          "briefInfo": {
            "metadataId": "S109C3092482",
            "title": "Parenting",
            "subtitle": "From Surviving to Thriving : Building Healthy Families in A Changing World",
            "format": "BK",
            "superFormats": [
              "BOOKS",
              "MODERN_FORMATS"
            ],
            "consumptionFormat": "READ",
            "callNumber": "Adult Nonfiction Book",
            "description": "\"Practical and inspiring ways to parenting that not only thrives but survives the tests of time\"--Provided by publisher.",
            "genreForm": [],
            "subjectHeadings": [
              "Parenting Religious aspects Christianity",
              "Parents Religious life",
              "Christian life"
            ],
            "authors": [
              "Swindoll, Charles R."
            ],
            "publicationDate": "2006",
            "jacket": {
              "type": "SYNDETICS",
              "small": "https://secure.syndetics.com/index.aspx?isbn=9780849900242/SC.GIF&client=hennp&type=xw12&oclc=",
              "medium": "https://secure.syndetics.com/index.aspx?isbn=9780849900242/MC.GIF&client=hennp&type=xw12&oclc=",
              "large": "https://secure.syndetics.com/index.aspx?isbn=9780849900242/LC.JPG&client=hennp&type=xw12&oclc=",
              "local_url": null
            },
            "isbns": [
              "9780849900242",
              "0849900247"
            ],
            "primaryLanguage": "eng",
            "series": [],
            "edition": null,
            "multiscriptTitle": null,
            "multiscriptAuthor": null,
            "contentType": "NONFICTION",
            "audiences": [
              "ADULT"
            ],
            "compositeSubjectHeadings": [
              "Parenting -- Religious Aspects -- Christianity",
              "Parents -- Religious Life",
              "Christian Life"
            ],
            "id": "S109C3092482",
            "rating": {
              "averageRating": 90,
              "totalCount": 3
            }
          },
          "policy": {
            "materialType": "PHYSICAL",
            "provider": "ILS",
            "holdable": true,
            "itemLevelHoldableItems": false,
            "materialPolicy": {
              "supportsBatchVolumeHolds": true,
              "itemLevelHoldsPredetermined": true,
              "requiresDuration": false,
              "requiresEmailDuringHold": false,
              "requiresFormatDuringHold": false,
              "requiresFormatDuringCheckout": false,
              "supportsDownload": false,
              "supportsFastAvailability": false,
              "supportsReadNow": false,
              "showFormatDuringHold": false,
              "showFormatDuringCheckout": false,
              "supportsSuspendHold": false,
              "supportsSuspendHoldStartDateEdit": false,
              "supportsSuspendHoldEndDateEdit": true,
              "supportAutoCheckout": false,
              "showQuickstartLink": false,
              "supportsBorrowingHistory": false,
              "borrowingHistorySupportsReturnedDates": true,
              "maintainsBorrowingHistoryOnDisable": false,
              "supportsCancelledExpiredHolds": true,
              "helpUrl": null,
              "quickStartUrl": null,
              "externalAPI": false,
              "healthy": true
            }
          },
          "availability": {
            "metadataId": "S109C3092482",
            "bibType": "PHYSICAL",
            "availabilityLocationType": "NA",
            "status": "UNAVAILABLE",
            "circulationType": "REQUEST",
            "libraryUseOnly": false,
            "heldCopies": 0,
            "availableCopies": 0,
            "totalCopies": 1,
            "onOrderCopies": 0,
            "volumesCount": 0,
            "localisedStatus": "UNAVAILABLE",
            "eresourceDescription": null,
            "eresourceUrl": null,
            "singleBranch": false,
            "statusType": "UNAVAILABLE"
          }
        },
        "S109C4734069": {
          "id": "S109C4734069",
          "sourceLibId": 109,
          "briefInfo": {
            "metadataId": "S109C4734069",
            "title": "Parenting",
            "subtitle": "From Surviving to Thriving : Building Healthy Families in A Changing World",
            "format": "EBOOK",
            "superFormats": [
              "BOOKS",
              "ELECTRONIC_FORMATS"
            ],
            "consumptionFormat": "READ",
            "callNumber": "Adult Nonfiction eBook",
            "description": "\"Practical and inspiring ways to parenting that not only thrives but survives the tests of time\"--Provided by publisher.",
            "genreForm": [
              "Downloadable Books",
              "Downloadable books"
            ],
            "subjectHeadings": [
              "Parenting Religious aspects Christianity",
              "Parents Religious life"
            ],
            "authors": [
              "Swindoll, Charles R."
            ],
            "publicationDate": "2006",
            "jacket": {
              "type": "SYNDETICS",
              "small": "https://secure.syndetics.com/index.aspx?isbn=9781418573744/SC.GIF&client=hennp&type=xw12&oclc=",
              "medium": "https://secure.syndetics.com/index.aspx?isbn=9781418573744/MC.GIF&client=hennp&type=xw12&oclc=",
              "large": "https://secure.syndetics.com/index.aspx?isbn=9781418573744/LC.JPG&client=hennp&type=xw12&oclc=",
              "local_url": null
            },
            "isbns": [
              "9781418573744",
              "1418573744"
            ],
            "primaryLanguage": "eng",
            "series": [],
            "edition": null,
            "multiscriptTitle": null,
            "multiscriptAuthor": null,
            "contentType": "NONFICTION",
            "audiences": [
              "ADULT"
            ],
            "compositeSubjectHeadings": [
              "Parenting -- Religious Aspects -- Christianity",
              "Parents -- Religious Life",
              "Downloadable Books"
            ],
            "id": "S109C4734069",
            "rating": {
              "averageRating": 90,
              "totalCount": 3
            }
          },
          "policy": {
            "materialType": "DIGITAL",
            "provider": "OverDriveAPI",
            "holdable": true,
            "itemLevelHoldableItems": false,
            "materialPolicy": {
              "supportsBatchVolumeHolds": false,
              "itemLevelHoldsPredetermined": false,
              "requiresDuration": false,
              "requiresEmailDuringHold": true,
              "requiresFormatDuringHold": false,
              "requiresFormatDuringCheckout": false,
              "supportsDownload": true,
              "supportsFastAvailability": false,
              "supportsReadNow": true,
              "showFormatDuringHold": true,
              "showFormatDuringCheckout": true,
              "supportsSuspendHold": true,
              "supportsSuspendHoldStartDateEdit": false,
              "supportsSuspendHoldEndDateEdit": true,
              "supportAutoCheckout": false,
              "showQuickstartLink": true,
              "supportsBorrowingHistory": false,
              "borrowingHistorySupportsReturnedDates": false,
              "maintainsBorrowingHistoryOnDisable": false,
              "supportsCancelledExpiredHolds": false,
              "helpUrl": "http://www.overdrive.com/resources/drc/Default.aspx?type=ebook",
              "quickStartUrl": "http://help.overdrive.com/",
              "externalAPI": true,
              "healthy": true
            }
          },
          "availability": {
            "metadataId": "S109C4734069",
            "bibType": "DIGITAL",
            "availabilityLocationType": "OTHER",
            "status": "AVAILABLE",
            "circulationType": "REQUEST",
            "libraryUseOnly": false,
            "heldCopies": 0,
            "availableCopies": 1,
            "totalCopies": 1,
            "onOrderCopies": null,
            "volumesCount": null,
            "localisedStatus": "AVAILABLE",
            "eresourceDescription": null,
            "eresourceUrl": null,
            "singleBranch": false,
            "statusType": "AVAILABLE"
          }
        },
        "S109C226772": {
          "id": "S109C226772",
          "sourceLibId": 109,
          "briefInfo": {
            "metadataId": "S109C226772",
            "title": "Parenting",
            "subtitle": "",
            "format": "MAG",
            "superFormats": [
              "JOURNALS_MAGAZINES",
              "SERIALS",
              "MODERN_FORMATS"
            ],
            "consumptionFormat": "READ",
            "callNumber": "Adult Reference Periodical",
            "description": null,
            "genreForm": [
              "Periodicals"
            ],
            "subjectHeadings": [
              "Child rearing Periodicals",
              "Parenting Periodicals",
              "Child development Periodicals"
            ],
            "authors": [],
            "publicationDate": "2011-2013",
            "jacket": {
              "type": "SYNDETICS",
              "small": null,
              "medium": null,
              "large": null,
              "local_url": null
            },
            "isbns": [],
            "primaryLanguage": "eng",
            "series": [],
            "edition": null,
            "multiscriptTitle": null,
            "multiscriptAuthor": null,
            "contentType": "UNDETERMINED",
            "audiences": [
              "ADULT"
            ],
            "compositeSubjectHeadings": [
              "Child Rearing -- Periodicals",
              "Parenting -- Periodicals",
              "Child Development -- Periodicals"
            ],
            "id": "S109C226772",
            "rating": {}
          },
          "policy": {
            "materialType": "PHYSICAL",
            "provider": "ILS",
            "holdable": false,
            "itemLevelHoldableItems": false,
            "materialPolicy": {
              "supportsBatchVolumeHolds": true,
              "itemLevelHoldsPredetermined": true,
              "requiresDuration": false,
              "requiresEmailDuringHold": false,
              "requiresFormatDuringHold": false,
              "requiresFormatDuringCheckout": false,
              "supportsDownload": false,
              "supportsFastAvailability": false,
              "supportsReadNow": false,
              "showFormatDuringHold": false,
              "showFormatDuringCheckout": false,
              "supportsSuspendHold": false,
              "supportsSuspendHoldStartDateEdit": false,
              "supportsSuspendHoldEndDateEdit": true,
              "supportAutoCheckout": false,
              "showQuickstartLink": false,
              "supportsBorrowingHistory": false,
              "borrowingHistorySupportsReturnedDates": true,
              "maintainsBorrowingHistoryOnDisable": false,
              "supportsCancelledExpiredHolds": true,
              "helpUrl": null,
              "quickStartUrl": null,
              "externalAPI": false,
              "healthy": true
            }
          },
          "availability": {
            "metadataId": "S109C226772",
            "bibType": "PHYSICAL",
            "availabilityLocationType": "OTHER",
            "status": "AVAILABLE",
            "circulationType": "NON_CIRCULATING",
            "libraryUseOnly": true,
            "heldCopies": 0,
            "availableCopies": 20,
            "totalCopies": 20,
            "onOrderCopies": 0,
            "volumesCount": 3,
            "localisedStatus": "LIBRARY_USE_ONLY",
            "eresourceDescription": null,
            "eresourceUrl": null,
            "singleBranch": false,
            "statusType": "AVAILABLE"
          }
        },
        "S109C4655300": {
          "id": "S109C4655300",
          "sourceLibId": 109,
          "briefInfo": {
            "metadataId": "S109C4655300",
            "title": "Parenting",
            "subtitle": "Early Years",
            "format": "MAG",
            "superFormats": [
              "JOURNALS_MAGAZINES",
              "SERIALS",
              "MODERN_FORMATS"
            ],
            "consumptionFormat": "READ",
            "callNumber": "Adult Reference Periodical",
            "description": null,
            "genreForm": [
              "Periodicals"
            ],
            "subjectHeadings": [
              "Child rearing Periodicals",
              "Parenting Periodicals",
              "Child development Periodicals"
            ],
            "authors": [],
            "publicationDate": "2009-2011",
            "jacket": {
              "type": "SYNDETICS",
              "small": "https://secure.syndetics.com/index.aspx?isbn=&issn=19479883/SC.GIF&client=hennp&type=xw12&oclc=&upc=",
              "medium": "https://secure.syndetics.com/index.aspx?isbn=&issn=19479883/MC.GIF&client=hennp&type=xw12&oclc=&upc=",
              "large": "https://secure.syndetics.com/index.aspx?isbn=&issn=19479883/LC.JPG&client=hennp&type=xw12&oclc=&upc=",
              "local_url": null
            },
            "isbns": [],
            "primaryLanguage": "eng",
            "series": [],
            "edition": null,
            "multiscriptTitle": null,
            "multiscriptAuthor": null,
            "contentType": "UNDETERMINED",
            "audiences": [
              "ADULT"
            ],
            "compositeSubjectHeadings": [
              "Child Rearing -- Periodicals",
              "Parenting -- Periodicals",
              "Child Development -- Periodicals"
            ],
            "id": "S109C4655300",
            "rating": {}
          },
          "policy": {
            "materialType": "PHYSICAL",
            "provider": "ILS",
            "holdable": false,
            "itemLevelHoldableItems": false,
            "materialPolicy": {
              "supportsBatchVolumeHolds": true,
              "itemLevelHoldsPredetermined": true,
              "requiresDuration": false,
              "requiresEmailDuringHold": false,
              "requiresFormatDuringHold": false,
              "requiresFormatDuringCheckout": false,
              "supportsDownload": false,
              "supportsFastAvailability": false,
              "supportsReadNow": false,
              "showFormatDuringHold": false,
              "showFormatDuringCheckout": false,
              "supportsSuspendHold": false,
              "supportsSuspendHoldStartDateEdit": false,
              "supportsSuspendHoldEndDateEdit": true,
              "supportAutoCheckout": false,
              "showQuickstartLink": false,
              "supportsBorrowingHistory": false,
              "borrowingHistorySupportsReturnedDates": true,
              "maintainsBorrowingHistoryOnDisable": false,
              "supportsCancelledExpiredHolds": true,
              "helpUrl": null,
              "quickStartUrl": null,
              "externalAPI": false,
              "healthy": true
            }
          },
          "availability": {
            "metadataId": "S109C4655300",
            "bibType": "PHYSICAL",
            "availabilityLocationType": "OTHER",
            "status": "AVAILABLE",
            "circulationType": "NON_CIRCULATING",
            "libraryUseOnly": true,
            "heldCopies": 0,
            "availableCopies": 23,
            "totalCopies": 23,
            "onOrderCopies": 0,
            "volumesCount": 3,
            "localisedStatus": "LIBRARY_USE_ONLY",
            "eresourceDescription": null,
            "eresourceUrl": null,
            "singleBranch": false,
            "statusType": "AVAILABLE"
          }
        },
        "S109C3291185": {
          "id": "S109C3291185",
          "sourceLibId": 109,
          "briefInfo": {
            "metadataId": "S109C3291185",
            "title": "Parenting",
            "subtitle": "",
            "format": "MAG",
            "superFormats": [
              "JOURNALS_MAGAZINES",
              "SERIALS",
              "MODERN_FORMATS"
            ],
            "consumptionFormat": "READ",
            "callNumber": "Adult Bound Periodical Reference (Stacks)",
            "description": null,
            "genreForm": [
              "Periodicals"
            ],
            "subjectHeadings": [
              "Child rearing Periodicals",
              "Parenting Periodicals",
              "Child development Periodicals"
            ],
            "authors": [],
            "publicationDate": "1987-2008",
            "jacket": {
              "type": "SYNDETICS",
              "small": "https://secure.syndetics.com/index.aspx?isbn=&issn=0890247X/SC.GIF&client=hennp&type=xw12&oclc=&upc=",
              "medium": "https://secure.syndetics.com/index.aspx?isbn=&issn=0890247X/MC.GIF&client=hennp&type=xw12&oclc=&upc=",
              "large": "https://secure.syndetics.com/index.aspx?isbn=&issn=0890247X/LC.JPG&client=hennp&type=xw12&oclc=&upc=",
              "local_url": null
            },
            "isbns": [],
            "primaryLanguage": "eng",
            "series": [],
            "edition": null,
            "multiscriptTitle": null,
            "multiscriptAuthor": null,
            "contentType": "UNDETERMINED",
            "audiences": [
              "ADULT"
            ],
            "compositeSubjectHeadings": [
              "Child Rearing -- Periodicals",
              "Parenting -- Periodicals",
              "Child Development -- Periodicals",
              "Periodicals"
            ],
            "id": "S109C3291185",
            "rating": {}
          },
          "policy": {
            "materialType": "PHYSICAL",
            "provider": "ILS",
            "holdable": false,
            "itemLevelHoldableItems": false,
            "materialPolicy": {
              "supportsBatchVolumeHolds": true,
              "itemLevelHoldsPredetermined": true,
              "requiresDuration": false,
              "requiresEmailDuringHold": false,
              "requiresFormatDuringHold": false,
              "requiresFormatDuringCheckout": false,
              "supportsDownload": false,
              "supportsFastAvailability": false,
              "supportsReadNow": false,
              "showFormatDuringHold": false,
              "showFormatDuringCheckout": false,
              "supportsSuspendHold": false,
              "supportsSuspendHoldStartDateEdit": false,
              "supportsSuspendHoldEndDateEdit": true,
              "supportAutoCheckout": false,
              "showQuickstartLink": false,
              "supportsBorrowingHistory": false,
              "borrowingHistorySupportsReturnedDates": true,
              "maintainsBorrowingHistoryOnDisable": false,
              "supportsCancelledExpiredHolds": true,
              "helpUrl": null,
              "quickStartUrl": null,
              "externalAPI": false,
              "healthy": true
            }
          },
          "availability": {
            "metadataId": "S109C3291185",
            "bibType": "PHYSICAL",
            "availabilityLocationType": "OTHER",
            "status": "AVAILABLE",
            "circulationType": "NON_CIRCULATING",
            "libraryUseOnly": true,
            "heldCopies": 0,
            "availableCopies": 17,
            "totalCopies": 17,
            "onOrderCopies": 0,
            "volumesCount": 0,
            "localisedStatus": "LIBRARY_USE_ONLY",
            "eresourceDescription": null,
            "eresourceUrl": null,
            "singleBranch": false,
            "statusType": "AVAILABLE"
          }
        },
        "S109C3478728": {
          "id": "S109C3478728",
          "sourceLibId": 109,
          "briefInfo": {
            "metadataId": "S109C3478728",
            "title": "Parenting",
            "subtitle": "",
            "format": "BK",
            "superFormats": [
              "BOOKS",
              "MODERN_FORMATS"
            ],
            "consumptionFormat": "READ",
            "callNumber": "Adult Nonfiction Book",
            "description": null,
            "genreForm": [],
            "subjectHeadings": [
              "Pediatric nursing Psychological aspects",
              "Parent and child"
            ],
            "authors": [],
            "publicationDate": "1977",
            "jacket": {
              "type": "SYNDETICS",
              "small": "https://secure.syndetics.com/index.aspx?isbn=9780070555242/SC.GIF&client=hennp&type=xw12&oclc=",
              "medium": "https://secure.syndetics.com/index.aspx?isbn=9780070555242/MC.GIF&client=hennp&type=xw12&oclc=",
              "large": "https://secure.syndetics.com/index.aspx?isbn=9780070555242/LC.JPG&client=hennp&type=xw12&oclc=",
              "local_url": null
            },
            "isbns": [
              "9780070555242",
              "0070555249"
            ],
            "primaryLanguage": "eng",
            "series": [
              {
                "name": "Issues in comprehensive pediatric nursing",
                "volume": null,
                "sortName": "issues in comprehensive pediatric nursing",
                "volumeNumber": null
              }
            ],
            "edition": null,
            "multiscriptTitle": null,
            "multiscriptAuthor": null,
            "contentType": "NONFICTION",
            "audiences": [
              "ADULT"
            ],
            "compositeSubjectHeadings": [
              "Pediatric Nursing -- Psychological Aspects",
              "Parent and Child"
            ],
            "id": "S109C3478728",
            "rating": {}
          },
          "policy": {
            "materialType": "PHYSICAL",
            "provider": "ILS",
            "holdable": true,
            "itemLevelHoldableItems": false,
            "materialPolicy": {
              "supportsBatchVolumeHolds": true,
              "itemLevelHoldsPredetermined": true,
              "requiresDuration": false,
              "requiresEmailDuringHold": false,
              "requiresFormatDuringHold": false,
              "requiresFormatDuringCheckout": false,
              "supportsDownload": false,
              "supportsFastAvailability": false,
              "supportsReadNow": false,
              "showFormatDuringHold": false,
              "showFormatDuringCheckout": false,
              "supportsSuspendHold": false,
              "supportsSuspendHoldStartDateEdit": false,
              "supportsSuspendHoldEndDateEdit": true,
              "supportAutoCheckout": false,
              "showQuickstartLink": false,
              "supportsBorrowingHistory": false,
              "borrowingHistorySupportsReturnedDates": true,
              "maintainsBorrowingHistoryOnDisable": false,
              "supportsCancelledExpiredHolds": true,
              "helpUrl": null,
              "quickStartUrl": null,
              "externalAPI": false,
              "healthy": true
            }
          },
          "availability": {
            "metadataId": "S109C3478728",
            "bibType": "PHYSICAL",
            "availabilityLocationType": "OTHER",
            "status": "AVAILABLE",
            "circulationType": "REQUEST",
            "libraryUseOnly": false,
            "heldCopies": 0,
            "availableCopies": 1,
            "totalCopies": 1,
            "onOrderCopies": 0,
            "volumesCount": 0,
            "localisedStatus": "AVAILABLE_IN_BRANCH",
            "eresourceDescription": null,
            "eresourceUrl": null,
            "singleBranch": false,
            "statusType": "AVAILABLE"
          }
        },
        "S109C5790667": {
          "id": "S109C5790667",
          "sourceLibId": 109,
          "briefInfo": {
            "metadataId": "S109C5790667",
            "title": "Parenting",
            "subtitle": "The 14 Gospel Principles That Can Radically Change your Family",
            "format": "EBOOK",
            "superFormats": [
              "BOOKS",
              "ELECTRONIC_FORMATS"
            ],
            "consumptionFormat": "READ",
            "callNumber": "Adult Nonfiction eBook",
            "description": null,
            "genreForm": [
              "Downloadable Books",
              "Downloadable books"
            ],
            "subjectHeadings": [
              "Parents Religious life",
              "Parenting Religious aspects Christianity",
              "Child rearing Religious aspects Christianity"
            ],
            "authors": [
              "Tripp, Paul David, 1950-"
            ],
            "publicationDate": "2016",
            "jacket": {
              "type": "SYNDETICS",
              "small": "https://secure.syndetics.com/index.aspx?isbn=9781433551963/SC.GIF&client=hennp&type=xw12&oclc=",
              "medium": "https://secure.syndetics.com/index.aspx?isbn=9781433551963/MC.GIF&client=hennp&type=xw12&oclc=",
              "large": "https://secure.syndetics.com/index.aspx?isbn=9781433551963/LC.JPG&client=hennp&type=xw12&oclc=",
              "local_url": "http://images.contentreserve.com/ImageType-100/1797-1/%7BB6A29B90-FA4F-4A5F-B630-FD533E2566B3%7DImg100.jpg"
            },
            "isbns": [
              "9781433551963",
              "1433551969",
              "9781433551949",
              "1433551942",
              "9781433551956",
              "1433551950",
              "9781433551932"
            ],
            "primaryLanguage": "eng",
            "series": [],
            "edition": null,
            "multiscriptTitle": null,
            "multiscriptAuthor": null,
            "contentType": "NONFICTION",
            "audiences": [
              "ADULT"
            ],
            "compositeSubjectHeadings": [
              "Parents -- Religious Life",
              "Parenting -- Religious Aspects -- Christianity",
              "Child Rearing -- Religious Aspects -- Christianity",
              "Downloadable Books"
            ],
            "id": "S109C5790667",
            "rating": {
              "averageRating": 100,
              "totalCount": 1
            }
          },
          "policy": {
            "materialType": "DIGITAL",
            "provider": "OverDriveAPI",
            "holdable": true,
            "itemLevelHoldableItems": false,
            "materialPolicy": {
              "supportsBatchVolumeHolds": false,
              "itemLevelHoldsPredetermined": false,
              "requiresDuration": false,
              "requiresEmailDuringHold": true,
              "requiresFormatDuringHold": false,
              "requiresFormatDuringCheckout": false,
              "supportsDownload": true,
              "supportsFastAvailability": false,
              "supportsReadNow": true,
              "showFormatDuringHold": true,
              "showFormatDuringCheckout": true,
              "supportsSuspendHold": true,
              "supportsSuspendHoldStartDateEdit": false,
              "supportsSuspendHoldEndDateEdit": true,
              "supportAutoCheckout": false,
              "showQuickstartLink": true,
              "supportsBorrowingHistory": false,
              "borrowingHistorySupportsReturnedDates": false,
              "maintainsBorrowingHistoryOnDisable": false,
              "supportsCancelledExpiredHolds": false,
              "helpUrl": "http://www.overdrive.com/resources/drc/Default.aspx?type=ebook",
              "quickStartUrl": "http://help.overdrive.com/",
              "externalAPI": true,
              "healthy": true
            }
          },
          "availability": {
            "metadataId": "S109C5790667",
            "bibType": "DIGITAL",
            "availabilityLocationType": "OTHER",
            "status": "UNAVAILABLE",
            "circulationType": "REQUEST",
            "libraryUseOnly": false,
            "heldCopies": 10,
            "availableCopies": 0,
            "totalCopies": 4,
            "onOrderCopies": null,
            "volumesCount": null,
            "localisedStatus": "UNAVAILABLE",
            "eresourceDescription": null,
            "eresourceUrl": null,
            "singleBranch": false,
            "statusType": "UNAVAILABLE"
          }
        },
        "S109C5509210": {
          "id": "S109C5509210",
          "sourceLibId": 109,
          "briefInfo": {
            "metadataId": "S109C5509210",
            "title": "Parenting",
            "subtitle": "School Years",
            "format": "EJ",
            "superFormats": [
              "JOURNALS_MAGAZINES",
              "ELECTRONIC_FORMATS"
            ],
            "consumptionFormat": "READ",
            "callNumber": null,
            "description": "Back issues only. On the day a mom puts her child onto the kindergarten bus, her life -- and her child's -- will be forever changed. School alters everything in a kid's world. The new edition of Parenting magazine captures the joys and explores the questions and unique challenges that moms face with their school-age children.",
            "genreForm": [
              "Downloadable magazines",
              "Periodicals",
              "Downloadable Magazines"
            ],
            "subjectHeadings": [
              "Child rearing Periodicals",
              "Parenting Periodicals",
              "Child development Periodicals"
            ],
            "authors": [],
            "publicationDate": "2009-2013",
            "jacket": {
              "type": "SYNDETICS",
              "small": null,
              "medium": null,
              "large": null,
              "local_url": null
            },
            "isbns": [],
            "primaryLanguage": "eng",
            "series": [],
            "edition": null,
            "multiscriptTitle": null,
            "multiscriptAuthor": null,
            "contentType": "UNDETERMINED",
            "audiences": [
              "ADULT"
            ],
            "compositeSubjectHeadings": [
              "Child Rearing -- Periodicals",
              "Parenting -- Periodicals",
              "Child Development -- Periodicals",
              "Periodicals",
              "Downloadable Magazines"
            ],
            "id": "S109C5509210",
            "rating": {}
          },
          "policy": {
            "materialType": "PHYSICAL",
            "provider": "ILS",
            "holdable": false,
            "itemLevelHoldableItems": false,
            "materialPolicy": {
              "supportsBatchVolumeHolds": true,
              "itemLevelHoldsPredetermined": true,
              "requiresDuration": false,
              "requiresEmailDuringHold": false,
              "requiresFormatDuringHold": false,
              "requiresFormatDuringCheckout": false,
              "supportsDownload": false,
              "supportsFastAvailability": false,
              "supportsReadNow": false,
              "showFormatDuringHold": false,
              "showFormatDuringCheckout": false,
              "supportsSuspendHold": false,
              "supportsSuspendHoldStartDateEdit": false,
              "supportsSuspendHoldEndDateEdit": true,
              "supportAutoCheckout": false,
              "showQuickstartLink": false,
              "supportsBorrowingHistory": false,
              "borrowingHistorySupportsReturnedDates": true,
              "maintainsBorrowingHistoryOnDisable": false,
              "supportsCancelledExpiredHolds": true,
              "helpUrl": null,
              "quickStartUrl": null,
              "externalAPI": false,
              "healthy": true
            }
          },
          "availability": {
            "metadataId": "S109C5509210",
            "bibType": "DIGITAL_RESOURCE",
            "availabilityLocationType": "OTHER",
            "status": "AVAILABLE",
            "circulationType": "NON_CIRCULATING",
            "libraryUseOnly": false,
            "heldCopies": 0,
            "availableCopies": 0,
            "totalCopies": 0,
            "onOrderCopies": 0,
            "volumesCount": 0,
            "localisedStatus": "DIGITAL_ALWAYS_AVAILABLE",
            "eresourceDescription": "",
            "eresourceUrl": "https://apps2.hclib.org/auth/RBDMag?url=https://www.rbdigital.com/hennepinmn/zinio/landing?mag_id=968",
            "singleBranch": false,
            "statusType": "AVAILABLE"
          }
        },
        "S109C4738340": {
          "id": "S109C4738340",
          "sourceLibId": 109,
          "briefInfo": {
            "metadataId": "S109C4738340",
            "title": "Parenting",
            "subtitle": "Roadside Assistance for the Spiritual Traveler",
            "format": "BK",
            "superFormats": [
              "BOOKS",
              "MODERN_FORMATS"
            ],
            "consumptionFormat": "READ",
            "callNumber": "Adult Nonfiction Book",
            "description": null,
            "genreForm": [],
            "subjectHeadings": [
              "Parenting Religious aspects Judaism",
              "Child rearing Religious aspects Judaism",
              "Jewish religious education of children"
            ],
            "authors": [
              "Shapiro, Rami M."
            ],
            "publicationDate": "2011",
            "jacket": {
              "type": "SYNDETICS",
              "small": "https://secure.syndetics.com/index.aspx?isbn=9780983727019/SC.GIF&client=hennp&type=xw12&oclc=",
              "medium": "https://secure.syndetics.com/index.aspx?isbn=9780983727019/MC.GIF&client=hennp&type=xw12&oclc=",
              "large": "https://secure.syndetics.com/index.aspx?isbn=9780983727019/LC.JPG&client=hennp&type=xw12&oclc=",
              "local_url": null
            },
            "isbns": [
              "9780983727019",
              "0983727015"
            ],
            "primaryLanguage": "eng",
            "series": [],
            "edition": null,
            "multiscriptTitle": null,
            "multiscriptAuthor": null,
            "contentType": "NONFICTION",
            "audiences": [
              "ADULT"
            ],
            "compositeSubjectHeadings": [
              "Parenting -- Religious Aspects -- Judaism",
              "Child Rearing -- Religious Aspects -- Judaism",
              "Jewish Religious Education of Children"
            ],
            "id": "S109C4738340",
            "rating": {}
          },
          "policy": {
            "materialType": "PHYSICAL",
            "provider": "ILS",
            "holdable": true,
            "itemLevelHoldableItems": false,
            "materialPolicy": {
              "supportsBatchVolumeHolds": true,
              "itemLevelHoldsPredetermined": true,
              "requiresDuration": false,
              "requiresEmailDuringHold": false,
              "requiresFormatDuringHold": false,
              "requiresFormatDuringCheckout": false,
              "supportsDownload": false,
              "supportsFastAvailability": false,
              "supportsReadNow": false,
              "showFormatDuringHold": false,
              "showFormatDuringCheckout": false,
              "supportsSuspendHold": false,
              "supportsSuspendHoldStartDateEdit": false,
              "supportsSuspendHoldEndDateEdit": true,
              "supportAutoCheckout": false,
              "showQuickstartLink": false,
              "supportsBorrowingHistory": false,
              "borrowingHistorySupportsReturnedDates": true,
              "maintainsBorrowingHistoryOnDisable": false,
              "supportsCancelledExpiredHolds": true,
              "helpUrl": null,
              "quickStartUrl": null,
              "externalAPI": false,
              "healthy": true
            }
          },
          "availability": {
            "metadataId": "S109C4738340",
            "bibType": "PHYSICAL",
            "availabilityLocationType": "OTHER",
            "status": "AVAILABLE",
            "circulationType": "REQUEST",
            "libraryUseOnly": false,
            "heldCopies": 1,
            "availableCopies": 2,
            "totalCopies": 2,
            "onOrderCopies": 0,
            "volumesCount": 0,
            "localisedStatus": "AVAILABLE_IN_BRANCH",
            "eresourceDescription": null,
            "eresourceUrl": null,
            "singleBranch": false,
            "statusType": "AVAILABLE"
          }
        },
        "S109C4181790": {
          "id": "S109C4181790",
          "sourceLibId": 109,
          "briefInfo": {
            "metadataId": "S109C4181790",
            "title": "Parenting",
            "subtitle": "Roles, Styles, and Outcomes",
            "format": "BK",
            "superFormats": [
              "BOOKS",
              "MODERN_FORMATS"
            ],
            "consumptionFormat": "READ",
            "callNumber": "Adult Nonfiction Book",
            "description": null,
            "genreForm": [],
            "subjectHeadings": [
              "Parenting Social aspects United States",
              "African American parents",
              "Families United States",
              "Fatherless families United States",
              "Deviant behavior United States",
              "Nature and nurture United States"
            ],
            "authors": [
              "Barber, Nigel, 1955-"
            ],
            "publicationDate": "1998",
            "jacket": {
              "type": "SYNDETICS",
              "small": "https://secure.syndetics.com/index.aspx?isbn=9781560725732/SC.GIF&client=hennp&type=xw12&oclc=",
              "medium": "https://secure.syndetics.com/index.aspx?isbn=9781560725732/MC.GIF&client=hennp&type=xw12&oclc=",
              "large": "https://secure.syndetics.com/index.aspx?isbn=9781560725732/LC.JPG&client=hennp&type=xw12&oclc=",
              "local_url": null
            },
            "isbns": [
              "9781560725732",
              "1560725737"
            ],
            "primaryLanguage": "eng",
            "series": [],
            "edition": null,
            "multiscriptTitle": null,
            "multiscriptAuthor": null,
            "contentType": "NONFICTION",
            "audiences": [
              "ADULT"
            ],
            "compositeSubjectHeadings": [
              "Parenting -- Social Aspects -- United States",
              "African American Parents",
              "Families -- United States",
              "Fatherless Families -- United States",
              "Deviant Behavior -- United States",
              "Nature and Nurture -- United States"
            ],
            "id": "S109C4181790",
            "rating": {}
          },
          "policy": {
            "materialType": "PHYSICAL",
            "provider": "ILS",
            "holdable": true,
            "itemLevelHoldableItems": false,
            "materialPolicy": {
              "supportsBatchVolumeHolds": true,
              "itemLevelHoldsPredetermined": true,
              "requiresDuration": false,
              "requiresEmailDuringHold": false,
              "requiresFormatDuringHold": false,
              "requiresFormatDuringCheckout": false,
              "supportsDownload": false,
              "supportsFastAvailability": false,
              "supportsReadNow": false,
              "showFormatDuringHold": false,
              "showFormatDuringCheckout": false,
              "supportsSuspendHold": false,
              "supportsSuspendHoldStartDateEdit": false,
              "supportsSuspendHoldEndDateEdit": true,
              "supportAutoCheckout": false,
              "showQuickstartLink": false,
              "supportsBorrowingHistory": false,
              "borrowingHistorySupportsReturnedDates": true,
              "maintainsBorrowingHistoryOnDisable": false,
              "supportsCancelledExpiredHolds": true,
              "helpUrl": null,
              "quickStartUrl": null,
              "externalAPI": false,
              "healthy": true
            }
          },
          "availability": {
            "metadataId": "S109C4181790",
            "bibType": "PHYSICAL",
            "availabilityLocationType": "OTHER",
            "status": "AVAILABLE",
            "circulationType": "REQUEST",
            "libraryUseOnly": false,
            "heldCopies": 0,
            "availableCopies": 1,
            "totalCopies": 1,
            "onOrderCopies": 0,
            "volumesCount": 0,
            "localisedStatus": "AVAILABLE_IN_BRANCH",
            "eresourceDescription": null,
            "eresourceUrl": null,
            "singleBranch": false,
            "statusType": "AVAILABLE"
          }
        },
        "S109C4059677": {
          "id": "S109C4059677",
          "sourceLibId": 109,
          "briefInfo": {
            "metadataId": "S109C4059677",
            "title": "Parenting",
            "subtitle": "An Annotated Bibliography, 1965-1987",
            "format": "BK",
            "superFormats": [
              "BOOKS",
              "MODERN_FORMATS"
            ],
            "consumptionFormat": "READ",
            "callNumber": "Adult Nonfiction Book",
            "description": null,
            "genreForm": [
              "Bibliography"
            ],
            "subjectHeadings": [
              "Parenting Bibliography",
              "Child rearing Bibliography",
              "Families Bibliography"
            ],
            "authors": [
              "Feinberg, Sandra, 1946-"
            ],
            "publicationDate": "1995",
            "jacket": {
              "type": "SYNDETICS",
              "small": "https://secure.syndetics.com/index.aspx?isbn=9780810826649/SC.GIF&client=hennp&type=xw12&oclc=",
              "medium": "https://secure.syndetics.com/index.aspx?isbn=9780810826649/MC.GIF&client=hennp&type=xw12&oclc=",
              "large": "https://secure.syndetics.com/index.aspx?isbn=9780810826649/LC.JPG&client=hennp&type=xw12&oclc=",
              "local_url": null
            },
            "isbns": [
              "9780810826649",
              "081082664X"
            ],
            "primaryLanguage": "eng",
            "series": [],
            "edition": null,
            "multiscriptTitle": null,
            "multiscriptAuthor": null,
            "contentType": "NONFICTION",
            "audiences": [
              "ADULT"
            ],
            "compositeSubjectHeadings": [
              "Parenting -- Bibliography",
              "Child Rearing -- Bibliography",
              "Families -- Bibliography"
            ],
            "id": "S109C4059677",
            "rating": {}
          },
          "policy": {
            "materialType": "PHYSICAL",
            "provider": "ILS",
            "holdable": true,
            "itemLevelHoldableItems": false,
            "materialPolicy": {
              "supportsBatchVolumeHolds": true,
              "itemLevelHoldsPredetermined": true,
              "requiresDuration": false,
              "requiresEmailDuringHold": false,
              "requiresFormatDuringHold": false,
              "requiresFormatDuringCheckout": false,
              "supportsDownload": false,
              "supportsFastAvailability": false,
              "supportsReadNow": false,
              "showFormatDuringHold": false,
              "showFormatDuringCheckout": false,
              "supportsSuspendHold": false,
              "supportsSuspendHoldStartDateEdit": false,
              "supportsSuspendHoldEndDateEdit": true,
              "supportAutoCheckout": false,
              "showQuickstartLink": false,
              "supportsBorrowingHistory": false,
              "borrowingHistorySupportsReturnedDates": true,
              "maintainsBorrowingHistoryOnDisable": false,
              "supportsCancelledExpiredHolds": true,
              "helpUrl": null,
              "quickStartUrl": null,
              "externalAPI": false,
              "healthy": true
            }
          },
          "availability": {
            "metadataId": "S109C4059677",
            "bibType": "PHYSICAL",
            "availabilityLocationType": "OTHER",
            "status": "AVAILABLE",
            "circulationType": "REQUEST",
            "libraryUseOnly": false,
            "heldCopies": 0,
            "availableCopies": 1,
            "totalCopies": 1,
            "onOrderCopies": 0,
            "volumesCount": 0,
            "localisedStatus": "AVAILABLE_IN_BRANCH",
            "eresourceDescription": null,
            "eresourceUrl": null,
            "singleBranch": false,
            "statusType": "AVAILABLE"
          }
        },
        "S109C4694588": {
          "id": "S109C4694588",
          "sourceLibId": 109,
          "briefInfo": {
            "metadataId": "S109C4694588",
            "title": "Parenting",
            "subtitle": "",
            "format": "EJ",
            "superFormats": [
              "JOURNALS_MAGAZINES",
              "ELECTRONIC_FORMATS"
            ],
            "consumptionFormat": "READ",
            "callNumber": "eJournal",
            "description": null,
            "genreForm": [
              "Electronic Journals",
              "Periodicals",
              "Electronic journals"
            ],
            "subjectHeadings": [
              "Child rearing Periodicals"
            ],
            "authors": [],
            "publicationDate": "1987-",
            "jacket": {
              "type": "SYNDETICS",
              "small": null,
              "medium": null,
              "large": null,
              "local_url": null
            },
            "isbns": [],
            "primaryLanguage": "eng",
            "series": [],
            "edition": null,
            "multiscriptTitle": null,
            "multiscriptAuthor": null,
            "contentType": "UNDETERMINED",
            "audiences": [
              "ADULT"
            ],
            "compositeSubjectHeadings": [
              "Child Rearing -- Periodicals",
              "Electronic Journals"
            ],
            "id": "S109C4694588",
            "rating": {}
          },
          "policy": {
            "materialType": "PHYSICAL",
            "provider": "ILS",
            "holdable": false,
            "itemLevelHoldableItems": false,
            "materialPolicy": {
              "supportsBatchVolumeHolds": true,
              "itemLevelHoldsPredetermined": true,
              "requiresDuration": false,
              "requiresEmailDuringHold": false,
              "requiresFormatDuringHold": false,
              "requiresFormatDuringCheckout": false,
              "supportsDownload": false,
              "supportsFastAvailability": false,
              "supportsReadNow": false,
              "showFormatDuringHold": false,
              "showFormatDuringCheckout": false,
              "supportsSuspendHold": false,
              "supportsSuspendHoldStartDateEdit": false,
              "supportsSuspendHoldEndDateEdit": true,
              "supportAutoCheckout": false,
              "showQuickstartLink": false,
              "supportsBorrowingHistory": false,
              "borrowingHistorySupportsReturnedDates": true,
              "maintainsBorrowingHistoryOnDisable": false,
              "supportsCancelledExpiredHolds": true,
              "helpUrl": null,
              "quickStartUrl": null,
              "externalAPI": false,
              "healthy": true
            }
          },
          "availability": {
            "metadataId": "S109C4694588",
            "bibType": "DIGITAL_RESOURCE",
            "availabilityLocationType": "OTHER",
            "status": "AVAILABLE",
            "circulationType": "NON_CIRCULATING",
            "libraryUseOnly": false,
            "heldCopies": 0,
            "availableCopies": 0,
            "totalCopies": 0,
            "onOrderCopies": 0,
            "volumesCount": 0,
            "localisedStatus": "DIGITAL_ALWAYS_AVAILABLE",
            "eresourceDescription": "Full text available from Access World News Research Collection: 09/01/1999 to 07/31/2013",
            "eresourceUrl": "https://apps2.hclib.org/auth/ejournal?url=http://infoweb.newsbank.com/%3Fdb%3DPARB",
            "singleBranch": false,
            "statusType": "AVAILABLE"
          }
        },
        "S109C5509209": {
          "id": "S109C5509209",
          "sourceLibId": 109,
          "briefInfo": {
            "metadataId": "S109C5509209",
            "title": "Parenting",
            "subtitle": "",
            "format": "EJ",
            "superFormats": [
              "JOURNALS_MAGAZINES",
              "ELECTRONIC_FORMATS"
            ],
            "consumptionFormat": "READ",
            "callNumber": null,
            "description": "Back issues only. Parenting magazine is the nation's premier magazine for moms. Each issue contains age-specific child development guidance, information and tips on health and safety, and the best proven ways to stimulate your child's learning. Parenting is a great source of knowledge for new, expectant, and experienced moms everywhere.",
            "genreForm": [
              "Downloadable magazines",
              "Periodicals",
              "Downloadable Magazines"
            ],
            "subjectHeadings": [
              "Child rearing Periodicals",
              "Infants Care Periodicals",
              "Toddlers Care Periodicals",
              "Preschool children Care Periodicals"
            ],
            "authors": [],
            "publicationDate": null,
            "jacket": {
              "type": "SYNDETICS",
              "small": null,
              "medium": null,
              "large": null,
              "local_url": null
            },
            "isbns": [],
            "primaryLanguage": "eng",
            "series": [],
            "edition": null,
            "multiscriptTitle": null,
            "multiscriptAuthor": null,
            "contentType": "UNDETERMINED",
            "audiences": [
              "ADULT"
            ],
            "compositeSubjectHeadings": [
              "Child Rearing -- Periodicals",
              "Infants -- Care -- Periodicals",
              "Toddlers -- Care -- Periodicals",
              "Preschool Children -- Care -- Periodicals",
              "Periodicals",
              "Downloadable Magazines"
            ],
            "id": "S109C5509209",
            "rating": {}
          },
          "policy": {
            "materialType": "PHYSICAL",
            "provider": "ILS",
            "holdable": false,
            "itemLevelHoldableItems": false,
            "materialPolicy": {
              "supportsBatchVolumeHolds": true,
              "itemLevelHoldsPredetermined": true,
              "requiresDuration": false,
              "requiresEmailDuringHold": false,
              "requiresFormatDuringHold": false,
              "requiresFormatDuringCheckout": false,
              "supportsDownload": false,
              "supportsFastAvailability": false,
              "supportsReadNow": false,
              "showFormatDuringHold": false,
              "showFormatDuringCheckout": false,
              "supportsSuspendHold": false,
              "supportsSuspendHoldStartDateEdit": false,
              "supportsSuspendHoldEndDateEdit": true,
              "supportAutoCheckout": false,
              "showQuickstartLink": false,
              "supportsBorrowingHistory": false,
              "borrowingHistorySupportsReturnedDates": true,
              "maintainsBorrowingHistoryOnDisable": false,
              "supportsCancelledExpiredHolds": true,
              "helpUrl": null,
              "quickStartUrl": null,
              "externalAPI": false,
              "healthy": true
            }
          },
          "availability": {
            "metadataId": "S109C5509209",
            "bibType": "DIGITAL_RESOURCE",
            "availabilityLocationType": "OTHER",
            "status": "AVAILABLE",
            "circulationType": "NON_CIRCULATING",
            "libraryUseOnly": false,
            "heldCopies": 0,
            "availableCopies": 0,
            "totalCopies": 0,
            "onOrderCopies": 0,
            "volumesCount": 0,
            "localisedStatus": "DIGITAL_ALWAYS_AVAILABLE",
            "eresourceDescription": "",
            "eresourceUrl": "https://apps2.hclib.org/auth/RBDMag?url=https://www.rbdigital.com/hennepinmn/zinio/landing?mag_id=967",
            "singleBranch": false,
            "statusType": "AVAILABLE"
          }
        },
        "S109C4938734": {
          "id": "S109C4938734",
          "sourceLibId": 109,
          "briefInfo": {
            "metadataId": "S109C4938734",
            "title": "Parenting",
            "subtitle": "Illustrated With Crappy Pictures",
            "format": "EBOOK",
            "superFormats": [
              "BOOKS",
              "ELECTRONIC_FORMATS"
            ],
            "consumptionFormat": "READ",
            "callNumber": "Adult Nonfiction eBook",
            "description": "Dusick's stories about her Crappy Baby, Crappy Boy and her husband, Crappy Papa, will make everyone laugh over those frustrating moments of parenting.",
            "genreForm": [
              "Downloadable Books",
              "Humor",
              "Downloadable books"
            ],
            "subjectHeadings": [
              "Parenthood Humor",
              "Child rearing Humor"
            ],
            "authors": [
              "Dusick, Amber"
            ],
            "publicationDate": "2013",
            "jacket": {
              "type": "SYNDETICS",
              "small": "https://secure.syndetics.com/index.aspx?isbn=9781460309865/SC.GIF&client=hennp&type=xw12&oclc=",
              "medium": "https://secure.syndetics.com/index.aspx?isbn=9781460309865/MC.GIF&client=hennp&type=xw12&oclc=",
              "large": "https://secure.syndetics.com/index.aspx?isbn=9781460309865/LC.JPG&client=hennp&type=xw12&oclc=",
              "local_url": null
            },
            "isbns": [
              "9781460309865",
              "1460309863"
            ],
            "primaryLanguage": "eng",
            "series": [],
            "edition": null,
            "multiscriptTitle": null,
            "multiscriptAuthor": null,
            "contentType": "NONFICTION",
            "audiences": [
              "ADULT"
            ],
            "compositeSubjectHeadings": [
              "Parenthood -- Humor",
              "Child Rearing -- Humor",
              "Downloadable Books"
            ],
            "id": "S109C4938734",
            "rating": {
              "averageRating": 86,
              "totalCount": 50
            }
          },
          "policy": {
            "materialType": "DIGITAL",
            "provider": "OverDriveAPI",
            "holdable": true,
            "itemLevelHoldableItems": false,
            "materialPolicy": {
              "supportsBatchVolumeHolds": false,
              "itemLevelHoldsPredetermined": false,
              "requiresDuration": false,
              "requiresEmailDuringHold": true,
              "requiresFormatDuringHold": false,
              "requiresFormatDuringCheckout": false,
              "supportsDownload": true,
              "supportsFastAvailability": false,
              "supportsReadNow": true,
              "showFormatDuringHold": true,
              "showFormatDuringCheckout": true,
              "supportsSuspendHold": true,
              "supportsSuspendHoldStartDateEdit": false,
              "supportsSuspendHoldEndDateEdit": true,
              "supportAutoCheckout": false,
              "showQuickstartLink": true,
              "supportsBorrowingHistory": false,
              "borrowingHistorySupportsReturnedDates": false,
              "maintainsBorrowingHistoryOnDisable": false,
              "supportsCancelledExpiredHolds": false,
              "helpUrl": "http://www.overdrive.com/resources/drc/Default.aspx?type=ebook",
              "quickStartUrl": "http://help.overdrive.com/",
              "externalAPI": true,
              "healthy": true
            }
          },
          "availability": {
            "metadataId": "S109C4938734",
            "bibType": "DIGITAL",
            "availabilityLocationType": "OTHER",
            "status": "AVAILABLE",
            "circulationType": "REQUEST",
            "libraryUseOnly": false,
            "heldCopies": 0,
            "availableCopies": 1,
            "totalCopies": 1,
            "onOrderCopies": null,
            "volumesCount": null,
            "localisedStatus": "AVAILABLE",
            "eresourceDescription": null,
            "eresourceUrl": null,
            "singleBranch": false,
            "statusType": "AVAILABLE"
          }
        },
        "S109C4839085": {
          "id": "S109C4839085",
          "sourceLibId": 109,
          "briefInfo": {
            "metadataId": "S109C4839085",
            "title": "Parenting",
            "subtitle": "Illustrated With Crappy Pictures",
            "format": "BK",
            "superFormats": [
              "BOOKS",
              "MODERN_FORMATS"
            ],
            "consumptionFormat": "READ",
            "callNumber": "Adult Nonfiction Book",
            "description": "Dusick's stories about her Crappy Baby, Crappy Boy and her husband, Crappy Papa, will make everyone laugh over those frustrating moments of parenting.",
            "genreForm": [
              "Humor"
            ],
            "subjectHeadings": [
              "Parenthood Humor",
              "Child rearing Humor"
            ],
            "authors": [
              "Dusick, Amber"
            ],
            "publicationDate": "2013",
            "jacket": {
              "type": "SYNDETICS",
              "small": "https://secure.syndetics.com/index.aspx?isbn=9780373892747/SC.GIF&client=hennp&type=xw12&oclc=",
              "medium": "https://secure.syndetics.com/index.aspx?isbn=9780373892747/MC.GIF&client=hennp&type=xw12&oclc=",
              "large": "https://secure.syndetics.com/index.aspx?isbn=9780373892747/LC.JPG&client=hennp&type=xw12&oclc=",
              "local_url": null
            },
            "isbns": [
              "9780373892747",
              "0373892748"
            ],
            "primaryLanguage": "eng",
            "series": [],
            "edition": null,
            "multiscriptTitle": null,
            "multiscriptAuthor": null,
            "contentType": "NONFICTION",
            "audiences": [
              "ADULT"
            ],
            "compositeSubjectHeadings": [
              "Parenthood -- Humor",
              "Child Rearing -- Humor"
            ],
            "id": "S109C4839085",
            "rating": {
              "averageRating": 86,
              "totalCount": 50
            }
          },
          "policy": {
            "materialType": "PHYSICAL",
            "provider": "ILS",
            "holdable": true,
            "itemLevelHoldableItems": false,
            "materialPolicy": {
              "supportsBatchVolumeHolds": true,
              "itemLevelHoldsPredetermined": true,
              "requiresDuration": false,
              "requiresEmailDuringHold": false,
              "requiresFormatDuringHold": false,
              "requiresFormatDuringCheckout": false,
              "supportsDownload": false,
              "supportsFastAvailability": false,
              "supportsReadNow": false,
              "showFormatDuringHold": false,
              "showFormatDuringCheckout": false,
              "supportsSuspendHold": false,
              "supportsSuspendHoldStartDateEdit": false,
              "supportsSuspendHoldEndDateEdit": true,
              "supportAutoCheckout": false,
              "showQuickstartLink": false,
              "supportsBorrowingHistory": false,
              "borrowingHistorySupportsReturnedDates": true,
              "maintainsBorrowingHistoryOnDisable": false,
              "supportsCancelledExpiredHolds": true,
              "helpUrl": null,
              "quickStartUrl": null,
              "externalAPI": false,
              "healthy": true
            }
          },
          "availability": {
            "metadataId": "S109C4839085",
            "bibType": "PHYSICAL",
            "availabilityLocationType": "OTHER",
            "status": "AVAILABLE",
            "circulationType": "REQUEST",
            "libraryUseOnly": false,
            "heldCopies": 1,
            "availableCopies": 3,
            "totalCopies": 3,
            "onOrderCopies": 0,
            "volumesCount": 0,
            "localisedStatus": "AVAILABLE_IN_BRANCH",
            "eresourceDescription": null,
            "eresourceUrl": null,
            "singleBranch": false,
            "statusType": "AVAILABLE"
          }
        },
        "S109C4694589": {
          "id": "S109C4694589",
          "sourceLibId": 109,
          "briefInfo": {
            "metadataId": "S109C4694589",
            "title": "Parenting",
            "subtitle": "Early Years",
            "format": "EJ",
            "superFormats": [
              "JOURNALS_MAGAZINES",
              "ELECTRONIC_FORMATS"
            ],
            "consumptionFormat": "READ",
            "callNumber": "eJournal",
            "description": null,
            "genreForm": [
              "Electronic Journals",
              "Periodicals",
              "Electronic journals"
            ],
            "subjectHeadings": [
              "Child rearing Periodicals",
              "Infants Care Periodicals",
              "Toddlers Care Periodicals",
              "Preschool children Care Periodicals"
            ],
            "authors": [],
            "publicationDate": "2009-",
            "jacket": {
              "type": "SYNDETICS",
              "small": null,
              "medium": null,
              "large": null,
              "local_url": null
            },
            "isbns": [],
            "primaryLanguage": "eng",
            "series": [],
            "edition": null,
            "multiscriptTitle": null,
            "multiscriptAuthor": null,
            "contentType": "UNDETERMINED",
            "audiences": [
              "ADULT"
            ],
            "compositeSubjectHeadings": [
              "Child Rearing -- Periodicals",
              "Infants -- Care -- Periodicals",
              "Toddlers -- Care -- Periodicals",
              "Preschool Children -- Care -- Periodicals",
              "Electronic Journals"
            ],
            "id": "S109C4694589",
            "rating": {}
          },
          "policy": {
            "materialType": "PHYSICAL",
            "provider": "ILS",
            "holdable": false,
            "itemLevelHoldableItems": false,
            "materialPolicy": {
              "supportsBatchVolumeHolds": true,
              "itemLevelHoldsPredetermined": true,
              "requiresDuration": false,
              "requiresEmailDuringHold": false,
              "requiresFormatDuringHold": false,
              "requiresFormatDuringCheckout": false,
              "supportsDownload": false,
              "supportsFastAvailability": false,
              "supportsReadNow": false,
              "showFormatDuringHold": false,
              "showFormatDuringCheckout": false,
              "supportsSuspendHold": false,
              "supportsSuspendHoldStartDateEdit": false,
              "supportsSuspendHoldEndDateEdit": true,
              "supportAutoCheckout": false,
              "showQuickstartLink": false,
              "supportsBorrowingHistory": false,
              "borrowingHistorySupportsReturnedDates": true,
              "maintainsBorrowingHistoryOnDisable": false,
              "supportsCancelledExpiredHolds": true,
              "helpUrl": null,
              "quickStartUrl": null,
              "externalAPI": false,
              "healthy": true
            }
          },
          "availability": {
            "metadataId": "S109C4694589",
            "bibType": "DIGITAL_RESOURCE",
            "availabilityLocationType": "OTHER",
            "status": "AVAILABLE",
            "circulationType": "NON_CIRCULATING",
            "libraryUseOnly": false,
            "heldCopies": 0,
            "availableCopies": 0,
            "totalCopies": 0,
            "onOrderCopies": 0,
            "volumesCount": 0,
            "localisedStatus": "DIGITAL_ALWAYS_AVAILABLE",
            "eresourceDescription": "Full text available from Consumer Health Complete: 02/01/2009 to 05/31/2013",
            "eresourceUrl": "https://apps2.hclib.org/auth/ejournal?url=https://search.ebscohost.com/direct.asp%3Fdb%3Dcmh%26jid%3D8AYO%26scope%3Dsite",
            "singleBranch": false,
            "statusType": "AVAILABLE"
          }
        },
        "S109C4694591": {
          "id": "S109C4694591",
          "sourceLibId": 109,
          "briefInfo": {
            "metadataId": "S109C4694591",
            "title": "Parenting",
            "subtitle": "School Years",
            "format": "EJ",
            "superFormats": [
              "JOURNALS_MAGAZINES",
              "ELECTRONIC_FORMATS"
            ],
            "consumptionFormat": "READ",
            "callNumber": "eJournal",
            "description": null,
            "genreForm": [
              "Electronic Journals",
              "Periodicals",
              "Electronic journals"
            ],
            "subjectHeadings": [
              "Child rearing Periodicals"
            ],
            "authors": [],
            "publicationDate": "2009-",
            "jacket": {
              "type": "SYNDETICS",
              "small": null,
              "medium": null,
              "large": null,
              "local_url": null
            },
            "isbns": [],
            "primaryLanguage": "eng",
            "series": [],
            "edition": null,
            "multiscriptTitle": null,
            "multiscriptAuthor": null,
            "contentType": "UNDETERMINED",
            "audiences": [
              "ADULT"
            ],
            "compositeSubjectHeadings": [
              "Child Rearing -- Periodicals",
              "Electronic Journals"
            ],
            "id": "S109C4694591",
            "rating": {}
          },
          "policy": {
            "materialType": "PHYSICAL",
            "provider": "ILS",
            "holdable": false,
            "itemLevelHoldableItems": false,
            "materialPolicy": {
              "supportsBatchVolumeHolds": true,
              "itemLevelHoldsPredetermined": true,
              "requiresDuration": false,
              "requiresEmailDuringHold": false,
              "requiresFormatDuringHold": false,
              "requiresFormatDuringCheckout": false,
              "supportsDownload": false,
              "supportsFastAvailability": false,
              "supportsReadNow": false,
              "showFormatDuringHold": false,
              "showFormatDuringCheckout": false,
              "supportsSuspendHold": false,
              "supportsSuspendHoldStartDateEdit": false,
              "supportsSuspendHoldEndDateEdit": true,
              "supportAutoCheckout": false,
              "showQuickstartLink": false,
              "supportsBorrowingHistory": false,
              "borrowingHistorySupportsReturnedDates": true,
              "maintainsBorrowingHistoryOnDisable": false,
              "supportsCancelledExpiredHolds": true,
              "helpUrl": null,
              "quickStartUrl": null,
              "externalAPI": false,
              "healthy": true
            }
          },
          "availability": {
            "metadataId": "S109C4694591",
            "bibType": "DIGITAL_RESOURCE",
            "availabilityLocationType": "OTHER",
            "status": "AVAILABLE",
            "circulationType": "NON_CIRCULATING",
            "libraryUseOnly": false,
            "heldCopies": 0,
            "availableCopies": 0,
            "totalCopies": 0,
            "onOrderCopies": 0,
            "volumesCount": 0,
            "localisedStatus": "DIGITAL_ALWAYS_AVAILABLE",
            "eresourceDescription": "Full text available from Access World News Research Collection: 10/01/2010 to 07/31/2013",
            "eresourceUrl": "https://apps2.hclib.org/auth/ejournal?url=http://infoweb.newsbank.com/%3Fdb%3DPSYY",
            "singleBranch": false,
            "statusType": "AVAILABLE"
          }
        },
        "S109C986254": {
          "id": "S109C986254",
          "sourceLibId": 109,
          "briefInfo": {
            "metadataId": "S109C986254",
            "title": "Parents",
            "subtitle": "",
            "format": "MAG",
            "superFormats": [
              "JOURNALS_MAGAZINES",
              "SERIALS",
              "MODERN_FORMATS"
            ],
            "consumptionFormat": "READ",
            "callNumber": "Adult Periodical",
            "description": null,
            "genreForm": [
              "Periodicals"
            ],
            "subjectHeadings": [
              "Child rearing Periodicals",
              "Parenting Periodicals",
              "Children Health and hygiene Periodicals",
              "Families United States Periodicals"
            ],
            "authors": [],
            "publicationDate": "1993-",
            "jacket": {
              "type": "SYNDETICS",
              "small": "https://secure.syndetics.com/index.aspx?isbn=&issn=10836373/SC.GIF&client=hennp&type=xw12&oclc=&upc=",
              "medium": "https://secure.syndetics.com/index.aspx?isbn=&issn=10836373/MC.GIF&client=hennp&type=xw12&oclc=&upc=",
              "large": "https://secure.syndetics.com/index.aspx?isbn=&issn=10836373/LC.JPG&client=hennp&type=xw12&oclc=&upc=",
              "local_url": null
            },
            "isbns": [],
            "primaryLanguage": "eng",
            "series": [],
            "edition": null,
            "multiscriptTitle": null,
            "multiscriptAuthor": null,
            "contentType": "UNDETERMINED",
            "audiences": [
              "ADULT"
            ],
            "compositeSubjectHeadings": [
              "Child Rearing -- Periodicals",
              "Parenting -- Periodicals",
              "Children -- Health and Hygiene -- Periodicals",
              "Families -- United States -- Periodicals",
              "Periodicals"
            ],
            "id": "S109C986254",
            "rating": {}
          },
          "policy": {
            "materialType": "PHYSICAL",
            "provider": "ILS",
            "holdable": true,
            "itemLevelHoldableItems": true,
            "materialPolicy": {
              "supportsBatchVolumeHolds": true,
              "itemLevelHoldsPredetermined": true,
              "requiresDuration": false,
              "requiresEmailDuringHold": false,
              "requiresFormatDuringHold": false,
              "requiresFormatDuringCheckout": false,
              "supportsDownload": false,
              "supportsFastAvailability": false,
              "supportsReadNow": false,
              "showFormatDuringHold": false,
              "showFormatDuringCheckout": false,
              "supportsSuspendHold": false,
              "supportsSuspendHoldStartDateEdit": false,
              "supportsSuspendHoldEndDateEdit": true,
              "supportAutoCheckout": false,
              "showQuickstartLink": false,
              "supportsBorrowingHistory": false,
              "borrowingHistorySupportsReturnedDates": true,
              "maintainsBorrowingHistoryOnDisable": false,
              "supportsCancelledExpiredHolds": true,
              "helpUrl": null,
              "quickStartUrl": null,
              "externalAPI": false,
              "healthy": true
            }
          },
          "availability": {
            "metadataId": "S109C986254",
            "bibType": "PHYSICAL",
            "availabilityLocationType": "OTHER",
            "status": "AVAILABLE",
            "circulationType": "REQUEST",
            "libraryUseOnly": false,
            "heldCopies": 0,
            "availableCopies": 234,
            "totalCopies": 281,
            "onOrderCopies": 12,
            "volumesCount": 12,
            "localisedStatus": "AVAILABLE_IN_BRANCH",
            "eresourceDescription": null,
            "eresourceUrl": null,
            "singleBranch": false,
            "statusType": "AVAILABLE"
          }
        },
        "S109C5526295": {
          "id": "S109C5526295",
          "sourceLibId": 109,
          "briefInfo": {
            "metadataId": "S109C5526295",
            "title": "Parents",
            "subtitle": "",
            "format": "EJ",
            "superFormats": [
              "JOURNALS_MAGAZINES",
              "ELECTRONIC_FORMATS"
            ],
            "consumptionFormat": "READ",
            "callNumber": null,
            "description": "Parents brings you expert advice you can trust to help you raise happy, healthy kids at every age, every stage! Celebrate the joys of parenthood! Say yes to Parents now and get all the family-focused fun, down-to-earth tips, and advice from the heart you need to be the best mom you can be!",
            "genreForm": [
              "Downloadable magazines",
              "Periodicals",
              "Downloadable Magazines"
            ],
            "subjectHeadings": [
              "Child rearing Periodicals",
              "Parenting Periodicals",
              "Children Health and hygiene Periodicals",
              "Families United States Periodicals"
            ],
            "authors": [],
            "publicationDate": null,
            "jacket": {
              "type": "SYNDETICS",
              "small": null,
              "medium": null,
              "large": null,
              "local_url": null
            },
            "isbns": [],
            "primaryLanguage": "eng",
            "series": [],
            "edition": null,
            "multiscriptTitle": null,
            "multiscriptAuthor": null,
            "contentType": "UNDETERMINED",
            "audiences": [
              "ADULT"
            ],
            "compositeSubjectHeadings": [
              "Child Rearing -- Periodicals",
              "Parenting -- Periodicals",
              "Children -- Health and Hygiene -- Periodicals",
              "Families -- United States -- Periodicals",
              "Periodicals",
              "Downloadable Magazines"
            ],
            "id": "S109C5526295",
            "rating": {}
          },
          "policy": {
            "materialType": "PHYSICAL",
            "provider": "ILS",
            "holdable": false,
            "itemLevelHoldableItems": false,
            "materialPolicy": {
              "supportsBatchVolumeHolds": true,
              "itemLevelHoldsPredetermined": true,
              "requiresDuration": false,
              "requiresEmailDuringHold": false,
              "requiresFormatDuringHold": false,
              "requiresFormatDuringCheckout": false,
              "supportsDownload": false,
              "supportsFastAvailability": false,
              "supportsReadNow": false,
              "showFormatDuringHold": false,
              "showFormatDuringCheckout": false,
              "supportsSuspendHold": false,
              "supportsSuspendHoldStartDateEdit": false,
              "supportsSuspendHoldEndDateEdit": true,
              "supportAutoCheckout": false,
              "showQuickstartLink": false,
              "supportsBorrowingHistory": false,
              "borrowingHistorySupportsReturnedDates": true,
              "maintainsBorrowingHistoryOnDisable": false,
              "supportsCancelledExpiredHolds": true,
              "helpUrl": null,
              "quickStartUrl": null,
              "externalAPI": false,
              "healthy": true
            }
          },
          "availability": {
            "metadataId": "S109C5526295",
            "bibType": "DIGITAL_RESOURCE",
            "availabilityLocationType": "OTHER",
            "status": "AVAILABLE",
            "circulationType": "NON_CIRCULATING",
            "libraryUseOnly": false,
            "heldCopies": 0,
            "availableCopies": 0,
            "totalCopies": 0,
            "onOrderCopies": 0,
            "volumesCount": 0,
            "localisedStatus": "DIGITAL_ALWAYS_AVAILABLE",
            "eresourceDescription": "",
            "eresourceUrl": "https://apps2.hclib.org/auth/RBDMag?url=https://www.rbdigital.com/hennepinmn/service/zinio/landing?mag_id=6433",
            "singleBranch": false,
            "statusType": "AVAILABLE"
          }
        },
        "S109C3813940": {
          "id": "S109C3813940",
          "sourceLibId": 109,
          "briefInfo": {
            "metadataId": "S109C3813940",
            "title": "Parents",
            "subtitle": "",
            "format": "BK",
            "superFormats": [
              "BOOKS",
              "MODERN_FORMATS"
            ],
            "consumptionFormat": "READ",
            "callNumber": "Easy Nonfiction Book (Stacks)",
            "description": null,
            "genreForm": [
              "Juvenile Literature"
            ],
            "subjectHeadings": [
              "Parents Juvenile literature",
              "Parent and child Juvenile literature",
              "Child rearing Juvenile literature"
            ],
            "authors": [
              "Solé Vendrell, Carme, 1944-"
            ],
            "publicationDate": "1987",
            "jacket": {
              "type": "SYNDETICS",
              "small": "https://secure.syndetics.com/index.aspx?isbn=9780516086613/SC.GIF&client=hennp&type=xw12&oclc=",
              "medium": "https://secure.syndetics.com/index.aspx?isbn=9780516086613/MC.GIF&client=hennp&type=xw12&oclc=",
              "large": "https://secure.syndetics.com/index.aspx?isbn=9780516086613/LC.JPG&client=hennp&type=xw12&oclc=",
              "local_url": null
            },
            "isbns": [
              "9780516086613",
              "0516086618"
            ],
            "primaryLanguage": "eng",
            "series": [
              {
                "name": "Cuatro edades",
                "volume": null,
                "sortName": "cuatro edades",
                "volumeNumber": null
              },
              {
                "name": "Family",
                "volume": null,
                "sortName": "family",
                "volumeNumber": null
              }
            ],
            "edition": null,
            "multiscriptTitle": null,
            "multiscriptAuthor": null,
            "contentType": "NONFICTION",
            "audiences": [
              "JUVENILE"
            ],
            "compositeSubjectHeadings": [
              "Parents -- Juvenile Literature",
              "Parent and Child -- Juvenile Literature",
              "Child Rearing -- Juvenile Literature"
            ],
            "id": "S109C3813940",
            "rating": {}
          },
          "policy": {
            "materialType": "PHYSICAL",
            "provider": "ILS",
            "holdable": true,
            "itemLevelHoldableItems": false,
            "materialPolicy": {
              "supportsBatchVolumeHolds": true,
              "itemLevelHoldsPredetermined": true,
              "requiresDuration": false,
              "requiresEmailDuringHold": false,
              "requiresFormatDuringHold": false,
              "requiresFormatDuringCheckout": false,
              "supportsDownload": false,
              "supportsFastAvailability": false,
              "supportsReadNow": false,
              "showFormatDuringHold": false,
              "showFormatDuringCheckout": false,
              "supportsSuspendHold": false,
              "supportsSuspendHoldStartDateEdit": false,
              "supportsSuspendHoldEndDateEdit": true,
              "supportAutoCheckout": false,
              "showQuickstartLink": false,
              "supportsBorrowingHistory": false,
              "borrowingHistorySupportsReturnedDates": true,
              "maintainsBorrowingHistoryOnDisable": false,
              "supportsCancelledExpiredHolds": true,
              "helpUrl": null,
              "quickStartUrl": null,
              "externalAPI": false,
              "healthy": true
            }
          },
          "availability": {
            "metadataId": "S109C3813940",
            "bibType": "PHYSICAL",
            "availabilityLocationType": "OTHER",
            "status": "AVAILABLE",
            "circulationType": "REQUEST",
            "libraryUseOnly": false,
            "heldCopies": 0,
            "availableCopies": 1,
            "totalCopies": 1,
            "onOrderCopies": 0,
            "volumesCount": 0,
            "localisedStatus": "AVAILABLE_IN_BRANCH",
            "eresourceDescription": null,
            "eresourceUrl": null,
            "singleBranch": false,
            "statusType": "AVAILABLE"
          }
        },
        "S109C4360566": {
          "id": "S109C4360566",
          "sourceLibId": 109,
          "briefInfo": {
            "metadataId": "S109C4360566",
            "title": "Parents",
            "subtitle": "",
            "format": "MAG",
            "superFormats": [
              "JOURNALS_MAGAZINES",
              "SERIALS",
              "MODERN_FORMATS"
            ],
            "consumptionFormat": "READ",
            "callNumber": "Adult Reference Periodical",
            "description": null,
            "genreForm": [
              "Periodicals"
            ],
            "subjectHeadings": [
              "Child rearing Periodicals",
              "Children Health and hygiene Periodicals"
            ],
            "authors": [],
            "publicationDate": "1978-1985",
            "jacket": {
              "type": "SYNDETICS",
              "small": "https://secure.syndetics.com/index.aspx?isbn=&issn=01950967/SC.GIF&client=hennp&type=xw12&oclc=&upc=",
              "medium": "https://secure.syndetics.com/index.aspx?isbn=&issn=01950967/MC.GIF&client=hennp&type=xw12&oclc=&upc=",
              "large": "https://secure.syndetics.com/index.aspx?isbn=&issn=01950967/LC.JPG&client=hennp&type=xw12&oclc=&upc=",
              "local_url": null
            },
            "isbns": [],
            "primaryLanguage": "eng",
            "series": [],
            "edition": null,
            "multiscriptTitle": null,
            "multiscriptAuthor": null,
            "contentType": "UNDETERMINED",
            "audiences": [
              "ADULT"
            ],
            "compositeSubjectHeadings": [
              "Child Rearing -- Periodicals",
              "Children -- Health and Hygiene -- Periodicals"
            ],
            "id": "S109C4360566",
            "rating": {}
          },
          "policy": {
            "materialType": "PHYSICAL",
            "provider": "ILS",
            "holdable": false,
            "itemLevelHoldableItems": false,
            "materialPolicy": {
              "supportsBatchVolumeHolds": true,
              "itemLevelHoldsPredetermined": true,
              "requiresDuration": false,
              "requiresEmailDuringHold": false,
              "requiresFormatDuringHold": false,
              "requiresFormatDuringCheckout": false,
              "supportsDownload": false,
              "supportsFastAvailability": false,
              "supportsReadNow": false,
              "showFormatDuringHold": false,
              "showFormatDuringCheckout": false,
              "supportsSuspendHold": false,
              "supportsSuspendHoldStartDateEdit": false,
              "supportsSuspendHoldEndDateEdit": true,
              "supportAutoCheckout": false,
              "showQuickstartLink": false,
              "supportsBorrowingHistory": false,
              "borrowingHistorySupportsReturnedDates": true,
              "maintainsBorrowingHistoryOnDisable": false,
              "supportsCancelledExpiredHolds": true,
              "helpUrl": null,
              "quickStartUrl": null,
              "externalAPI": false,
              "healthy": true
            }
          },
          "availability": {
            "metadataId": "S109C4360566",
            "bibType": "PHYSICAL",
            "availabilityLocationType": "OTHER",
            "status": "AVAILABLE",
            "circulationType": "NON_CIRCULATING",
            "libraryUseOnly": true,
            "heldCopies": 0,
            "availableCopies": 0,
            "totalCopies": 0,
            "onOrderCopies": 0,
            "volumesCount": 0,
            "localisedStatus": "LIBRARY_USE_ONLY",
            "eresourceDescription": null,
            "eresourceUrl": null,
            "singleBranch": false,
            "statusType": "AVAILABLE"
          }
        },
        "S109C4360889": {
          "id": "S109C4360889",
          "sourceLibId": 109,
          "briefInfo": {
            "metadataId": "S109C4360889",
            "title": "Parents",
            "subtitle": "",
            "format": "MF",
            "superFormats": [
              "OTHER",
              "ARCHIVAL_FORMATS"
            ],
            "consumptionFormat": "READ",
            "callNumber": "Adult Reference Microfilm",
            "description": null,
            "genreForm": [],
            "subjectHeadings": [],
            "authors": [],
            "publicationDate": null,
            "jacket": {
              "type": "SYNDETICS",
              "small": null,
              "medium": null,
              "large": null,
              "local_url": null
            },
            "isbns": [],
            "primaryLanguage": "eng",
            "series": [],
            "edition": null,
            "multiscriptTitle": null,
            "multiscriptAuthor": null,
            "contentType": "UNDETERMINED",
            "audiences": [
              "ADULT"
            ],
            "compositeSubjectHeadings": [],
            "id": "S109C4360889",
            "rating": {}
          },
          "policy": {
            "materialType": "PHYSICAL",
            "provider": "ILS",
            "holdable": false,
            "itemLevelHoldableItems": false,
            "materialPolicy": {
              "supportsBatchVolumeHolds": true,
              "itemLevelHoldsPredetermined": true,
              "requiresDuration": false,
              "requiresEmailDuringHold": false,
              "requiresFormatDuringHold": false,
              "requiresFormatDuringCheckout": false,
              "supportsDownload": false,
              "supportsFastAvailability": false,
              "supportsReadNow": false,
              "showFormatDuringHold": false,
              "showFormatDuringCheckout": false,
              "supportsSuspendHold": false,
              "supportsSuspendHoldStartDateEdit": false,
              "supportsSuspendHoldEndDateEdit": true,
              "supportAutoCheckout": false,
              "showQuickstartLink": false,
              "supportsBorrowingHistory": false,
              "borrowingHistorySupportsReturnedDates": true,
              "maintainsBorrowingHistoryOnDisable": false,
              "supportsCancelledExpiredHolds": true,
              "helpUrl": null,
              "quickStartUrl": null,
              "externalAPI": false,
              "healthy": true
            }
          },
          "availability": {
            "metadataId": "S109C4360889",
            "bibType": "PHYSICAL",
            "availabilityLocationType": "OTHER",
            "status": "AVAILABLE",
            "circulationType": "NON_CIRCULATING",
            "libraryUseOnly": true,
            "heldCopies": 0,
            "availableCopies": 0,
            "totalCopies": 0,
            "onOrderCopies": 0,
            "volumesCount": 0,
            "localisedStatus": "LIBRARY_USE_ONLY",
            "eresourceDescription": null,
            "eresourceUrl": null,
            "singleBranch": false,
            "statusType": "AVAILABLE"
          }
        },
        "S109C5831250": {
          "id": "S109C5831250",
          "sourceLibId": 109,
          "briefInfo": {
            "metadataId": "S109C5831250",
            "title": "Parents",
            "subtitle": "",
            "format": "EJ",
            "superFormats": [
              "JOURNALS_MAGAZINES",
              "ELECTRONIC_FORMATS"
            ],
            "consumptionFormat": "READ",
            "callNumber": "eJournal",
            "description": null,
            "genreForm": [
              "Electronic Journals",
              "Electronic journals"
            ],
            "subjectHeadings": [],
            "authors": [],
            "publicationDate": null,
            "jacket": {
              "type": "SYNDETICS",
              "small": null,
              "medium": null,
              "large": null,
              "local_url": null
            },
            "isbns": [],
            "primaryLanguage": "und",
            "series": [],
            "edition": null,
            "multiscriptTitle": null,
            "multiscriptAuthor": null,
            "contentType": "UNDETERMINED",
            "audiences": [
              "ADULT"
            ],
            "compositeSubjectHeadings": [
              "Electronic Journals"
            ],
            "id": "S109C5831250",
            "rating": {}
          },
          "policy": {
            "materialType": "PHYSICAL",
            "provider": "ILS",
            "holdable": false,
            "itemLevelHoldableItems": false,
            "materialPolicy": {
              "supportsBatchVolumeHolds": true,
              "itemLevelHoldsPredetermined": true,
              "requiresDuration": false,
              "requiresEmailDuringHold": false,
              "requiresFormatDuringHold": false,
              "requiresFormatDuringCheckout": false,
              "supportsDownload": false,
              "supportsFastAvailability": false,
              "supportsReadNow": false,
              "showFormatDuringHold": false,
              "showFormatDuringCheckout": false,
              "supportsSuspendHold": false,
              "supportsSuspendHoldStartDateEdit": false,
              "supportsSuspendHoldEndDateEdit": true,
              "supportAutoCheckout": false,
              "showQuickstartLink": false,
              "supportsBorrowingHistory": false,
              "borrowingHistorySupportsReturnedDates": true,
              "maintainsBorrowingHistoryOnDisable": false,
              "supportsCancelledExpiredHolds": true,
              "helpUrl": null,
              "quickStartUrl": null,
              "externalAPI": false,
              "healthy": true
            }
          },
          "availability": {
            "metadataId": "S109C5831250",
            "bibType": "DIGITAL_RESOURCE",
            "availabilityLocationType": "OTHER",
            "status": "AVAILABLE",
            "circulationType": "NON_CIRCULATING",
            "libraryUseOnly": false,
            "heldCopies": 0,
            "availableCopies": 0,
            "totalCopies": 0,
            "onOrderCopies": 0,
            "volumesCount": 0,
            "localisedStatus": "DIGITAL_ALWAYS_AVAILABLE",
            "eresourceDescription": "Full text available from PressReader: 90 days ago to present",
            "eresourceUrl": "https://apps2.hclib.org/auth/ejournal?url=http://www.pressreader.com/france/parents",
            "singleBranch": false,
            "statusType": "AVAILABLE"
          }
        }
      },
      "sites": {
        "MN-HENNEPIN": {
          "siteId": "MN-HENNEPIN",
          "type": "CORE",
          "libraryId": 109,
          "shortName": "HCL",
          "longName": "Hennepin County Library",
          "logo": "/images/MN-HENNEPIN/logo.png",
          "domain": "hclib",
          "subdomain": "hclib",
          "defaultScopeId": "MN-HENNEPIN",
          "scopes": [
            {
              "scopeName": "Hennepin County Library",
              "scopeId": "MN-HENNEPIN",
              "parentScopeId": null
            }
          ]
        }
      },
      "shelves": {}
    },
    "analytics": {
      "events": [
        {
          "event": "bc.searchResults",
          "payload": {
            "gtmCategory": "v2-search",
            "gtmAction": "v2-result",
            "gtmValue": 1,
            "gtmLabel": "Parenting",
            "searchType": "keyword"
          }
        }
      ]
    },
    "rssURL": "https://gateway.bibliocommons.com/v2/libraries/hclib/rss/search?query=Parenting&searchType=smart"
  }

  res.send({ data: response })
})

module.exports = router;
