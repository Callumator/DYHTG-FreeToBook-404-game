/**
 * Big countries array, used to find the longitude and latitude,
 * fetched from https://github.com/eesur/country-codes-lat-long/blob/master/country-codes-lat-long-alpha3.json,
 * fixed Taiwan though.
  */
const COUNTRIES = [
  {
    'country': 'Albania',
    'latitude': 41,
    'longitude': 20
  },
  {
    'country': 'Algeria',
    'latitude': 28,
    'longitude': 3
  },
  {
    'country': 'American Samoa',
    'latitude': -14.3333,
    'longitude': -170
  },
  {
    'country': 'Andorra',
    'latitude': 42.5,
    'longitude': 1.6
  },
  {
    'country': 'Angola',
    'latitude': -12.5,
    'longitude': 18.5
  },
  {
    'country': 'Anguilla',
    'latitude': 18.25,
    'longitude': -63.1667
  },
  {
    'country': 'Antigua and Barbuda',
    'latitude': 17.05,
    'longitude': -61.8
  },
  {
    'country': 'Argentina',
    'latitude': -34,
    'longitude': -64
  },
  {
    'country': 'Armenia',
    'latitude': 40,
    'longitude': 45
  },
  {
    'country': 'Aruba',
    'latitude': 12.5,
    'longitude': -69.9667
  },
  {
    'country': 'Australia',
    'latitude': -27,
    'longitude': 133
  },
  {
    'country': 'Austria',
    'latitude': 47.3333,
    'longitude': 13.3333
  },
  {
    'country': 'Azerbaijan',
    'latitude': 40.5,
    'longitude': 47.5
  },
  {
    'country': 'Bahamas',
    'latitude': 24.25,
    'longitude': -76
  },
  {
    'country': 'Bahrain',
    'latitude': 26,
    'longitude': 50.55
  },
  {
    'country': 'Bangladesh',
    'latitude': 24,
    'longitude': 90
  },
  {
    'country': 'Barbados',
    'latitude': 13.1667,
    'longitude': -59.5333
  },
  {
    'country': 'Belarus',
    'latitude': 53,
    'longitude': 28
  },
  {
    'country': 'Belgium',
    'latitude': 50.8333,
    'longitude': 4
  },
  {
    'country': 'Belize',
    'latitude': 17.25,
    'longitude': -88.75
  },
  {
    'country': 'Benin',
    'latitude': 9.5,
    'longitude': 2.25
  },
  {
    'country': 'Bermuda',
    'latitude': 32.3333,
    'longitude': -64.75
  },
  {
    'country': 'Bhutan',
    'latitude': 27.5,
    'longitude': 90.5
  },
  {
    'country': 'Bolivia',
    'latitude': -17,
    'longitude': -65
  },
  {
    'country': 'Bosnia and Herzegovina',
    'latitude': 44,
    'longitude': 18
  },
  {
    'country': 'Botswana',
    'latitude': -22,
    'longitude': 24
  },
  {
    'country': 'Bouvet Island',
    'latitude': -54.4333,
    'longitude': 3.4
  },
  {
    'country': 'Brazil',
    'latitude': -10,
    'longitude': -55
  },
  {
    'country': 'British Indian Ocean Territory',
    'latitude': -6,
    'longitude': 71.5
  },
  {
    'country': 'Brunei Darussalam',
    'latitude': 4.5,
    'longitude': 114.6667
  },
  {
    'country': 'Bulgaria',
    'latitude': 43,
    'longitude': 25
  },
  {
    'country': 'Burkina Faso',
    'latitude': 13,
    'longitude': -2
  },
  {
    'country': 'Burundi',
    'latitude': -3.5,
    'longitude': 30
  },
  {
    'country': 'Cambodia',
    'latitude': 13,
    'longitude': 105
  },
  {
    'country': 'Cameroon',
    'latitude': 6,
    'longitude': 12
  },
  {
    'country': 'Canada',
    'latitude': 60,
    'longitude': -95
  },
  {
    'country': 'Cape Verde',
    'latitude': 16,
    'longitude': -24
  },
  {
    'country': 'Cayman Islands',
    'latitude': 19.5,
    'longitude': -80.5
  },
  {
    'country': 'Central African Republic',
    'latitude': 7,
    'longitude': 21
  },
  {
    'country': 'Chad',
    'latitude': 15,
    'longitude': 19
  },
  {
    'country': 'Chile',
    'latitude': -30,
    'longitude': -71
  },
  {
    'country': 'China',
    'latitude': 35,
    'longitude': 105
  },
  {
    'country': 'Christmas Island',
    'latitude': -10.5,
    'longitude': 105.6667
  },
  {
    'country': 'Cocos (Keeling) Islands',
    'latitude': -12.5,
    'longitude': 96.8333
  },
  {
    'country': 'Colombia',
    'latitude': 4,
    'longitude': -72
  },
  {
    'country': 'Comoros',
    'latitude': -12.1667,
    'longitude': 44.25
  },
  {
    'country': 'Congo',
    'latitude': -1,
    'longitude': 15
  },
  {
    'country': 'Congo',
    'latitude': 0,
    'longitude': 25
  },
  {
    'country': 'Cook Islands',
    'latitude': -21.2333,
    'longitude': -159.7667
  },
  {
    'country': 'Costa Rica',
    'latitude': 10,
    'longitude': -84
  },
  {
    'country': 'CÃ´te d\'Ivoire',
    'latitude': 8,
    'longitude': -5
  },
  {
    'country': 'Croatia',
    'latitude': 45.1667,
    'longitude': 15.5
  },
  {
    'country': 'Cuba',
    'latitude': 21.5,
    'longitude': -80
  },
  {
    'country': 'Cyprus',
    'latitude': 35,
    'longitude': 33
  },
  {
    'country': 'Czech Republic',
    'latitude': 49.75,
    'longitude': 15.5
  },
  {
    'country': 'Denmark',
    'latitude': 56,
    'longitude': 10
  },
  {
    'country': 'Djibouti',
    'latitude': 11.5,
    'longitude': 43
  },
  {
    'country': 'Dominica',
    'latitude': 15.4167,
    'longitude': -61.3333
  },
  {
    'country': 'Dominican Republic',
    'latitude': 19,
    'longitude': -70.6667
  },
  {
    'country': 'Ecuador',
    'latitude': -2,
    'longitude': -77.5
  },
  {
    'country': 'Egypt',
    'latitude': 27,
    'longitude': 30
  },
  {
    'country': 'El Salvador',
    'latitude': 13.8333,
    'longitude': -88.9167
  },
  {
    'country': 'Equatorial Guinea',
    'latitude': 2,
    'longitude': 10
  },
  {
    'country': 'Eritrea',
    'latitude': 15,
    'longitude': 39
  },
  {
    'country': 'Estonia',
    'latitude': 59,
    'longitude': 26
  },
  {
    'country': 'Ethiopia',
    'latitude': 8,
    'longitude': 38
  },
  {
    'country': 'Falkland Islands (Malvinas)',
    'latitude': -51.75,
    'longitude': -59
  },
  {
    'country': 'Faroe Islands',
    'latitude': 62,
    'longitude': -7
  },
  {
    'country': 'Fiji',
    'latitude': -18,
    'longitude': 175
  },
  {
    'country': 'Finland',
    'latitude': 64,
    'longitude': 26
  },
  {
    'country': 'France',
    'latitude': 46,
    'longitude': 2
  },
  {
    'country': 'French Guiana',
    'latitude': 4,
    'longitude': -53
  },
  {
    'country': 'French Polynesia',
    'latitude': -15,
    'longitude': -140
  },
  {
    'country': 'French Southern Territories',
    'latitude': -43,
    'longitude': 67
  },
  {
    'country': 'Gabon',
    'latitude': -1,
    'longitude': 11.75
  },
  {
    'country': 'Gambia',
    'latitude': 13.4667,
    'longitude': -16.5667
  },
  {
    'country': 'Georgia',
    'latitude': 42,
    'longitude': 43.5
  },
  {
    'country': 'Germany',
    'latitude': 51,
    'longitude': 9
  },
  {
    'country': 'Ghana',
    'latitude': 8,
    'longitude': -2
  },
  {
    'country': 'Gibraltar',
    'latitude': 36.1833,
    'longitude': -5.3667
  },
  {
    'country': 'Greece',
    'latitude': 39,
    'longitude': 22
  },
  {
    'country': 'Greenland',
    'latitude': 72,
    'longitude': -40
  },
  {
    'country': 'Grenada',
    'latitude': 12.1167,
    'longitude': -61.6667
  },
  {
    'country': 'Guadeloupe',
    'latitude': 16.25,
    'longitude': -61.5833
  },
  {
    'country': 'Guam',
    'latitude': 13.4667,
    'longitude': 144.7833
  },
  {
    'country': 'Guatemala',
    'latitude': 15.5,
    'longitude': -90.25
  },
  {
    'country': 'Guernsey',
    'latitude': 49.5,
    'longitude': -2.56
  },
  {
    'country': 'Guinea',
    'latitude': 11,
    'longitude': -10
  },
  {
    'country': 'Guinea-Bissau',
    'latitude': 12,
    'longitude': -15
  },
  {
    'country': 'Guyana',
    'latitude': 5,
    'longitude': -59
  },
  {
    'country': 'Haiti',
    'latitude': 19,
    'longitude': -72.4167
  },
  {
    'country': 'Heard Island and McDonald Islands',
    'latitude': -53.1,
    'longitude': 72.5167
  },
  {
    'country': 'Vatican City',
    'latitude': 41.9,
    'longitude': 12.45
  },
  {
    'country': 'Honduras',
    'latitude': 15,
    'longitude': -86.5
  },
  {
    'country': 'Hong Kong',
    'latitude': 22.25,
    'longitude': 114.1667
  },
  {
    'country': 'Hungary',
    'latitude': 47,
    'longitude': 20
  },
  {
    'country': 'Iceland',
    'latitude': 65,
    'longitude': -18
  },
  {
    'country': 'India',
    'latitude': 20,
    'longitude': 77
  },
  {
    'country': 'Indonesia',
    'latitude': -5,
    'longitude': 120
  },
  {
    'country': 'Iran',
    'latitude': 32,
    'longitude': 53
  },
  {
    'country': 'Iraq',
    'latitude': 33,
    'longitude': 44
  },
  {
    'country': 'Ireland',
    'latitude': 53,
    'longitude': -8
  },
  {
    'country': 'Isle of Man',
    'latitude': 54.23,
    'longitude': -4.55
  },
  {
    'country': 'Israel',
    'latitude': 31.5,
    'longitude': 34.75
  },
  {
    'country': 'Italy',
    'latitude': 42.8333,
    'longitude': 12.8333
  },
  {
    'country': 'Jamaica',
    'latitude': 18.25,
    'longitude': -77.5
  },
  {
    'country': 'Japan',
    'latitude': 36,
    'longitude': 138
  },
  {
    'country': 'Jersey',
    'latitude': 49.21,
    'longitude': -2.13
  },
  {
    'country': 'Jordan',
    'latitude': 31,
    'longitude': 36
  },
  {
    'country': 'Kazakhstan',
    'latitude': 48,
    'longitude': 68
  },
  {
    'country': 'Kenya',
    'latitude': 1,
    'longitude': 38
  },
  {
    'country': 'Kiribati',
    'latitude': 1.4167,
    'longitude': 173
  },
  {
    'country': 'North Korea',
    'latitude': 40,
    'longitude': 127
  },
  {
    'country': 'South Korea',
    'latitude': 37,
    'longitude': 127.5
  },
  {
    'country': 'Kuwait',
    'latitude': 29.3375,
    'longitude': 47.6581
  },
  {
    'country': 'Kyrgyzstan',
    'latitude': 41,
    'longitude': 75
  },
  {
    'country': 'Lao',
    'latitude': 18,
    'longitude': 105
  },
  {
    'country': 'Latvia',
    'latitude': 57,
    'longitude': 25
  },
  {
    'country': 'Lebanon',
    'latitude': 33.8333,
    'longitude': 35.8333
  },
  {
    'country': 'Lesotho',
    'latitude': -29.5,
    'longitude': 28.5
  },
  {
    'country': 'Liberia',
    'latitude': 6.5,
    'longitude': -9.5
  },
  {
    'country': 'Libya',
    'latitude': 25,
    'longitude': 17
  },
  {
    'country': 'Liechtenstein',
    'latitude': 47.1667,
    'longitude': 9.5333
  },
  {
    'country': 'Lithuania',
    'latitude': 56,
    'longitude': 24
  },
  {
    'country': 'Luxembourg',
    'latitude': 49.75,
    'longitude': 6.1667
  },
  {
    'country': 'Macao',
    'latitude': 22.1667,
    'longitude': 113.55
  },
  {
    'country': 'Macedonia',
    'latitude': 41.8333,
    'longitude': 22
  },
  {
    'country': 'Madagascar',
    'latitude': -20,
    'longitude': 47
  },
  {
    'country': 'Malawi',
    'latitude': -13.5,
    'longitude': 34
  },
  {
    'country': 'Malaysia',
    'latitude': 2.5,
    'longitude': 112.5
  },
  {
    'country': 'Maldives',
    'latitude': 3.25,
    'longitude': 73
  },
  {
    'country': 'Mali',
    'latitude': 17,
    'longitude': -4
  },
  {
    'country': 'Malta',
    'latitude': 35.8333,
    'longitude': 14.5833
  },
  {
    'country': 'Marshall Islands',
    'latitude': 9,
    'longitude': 168
  },
  {
    'country': 'Martinique',
    'latitude': 14.6667,
    'longitude': -61
  },
  {
    'country': 'Mauritania',
    'latitude': 20,
    'longitude': -12
  },
  {
    'country': 'Mauritius',
    'latitude': -20.2833,
    'longitude': 57.55
  },
  {
    'country': 'Mayotte',
    'latitude': -12.8333,
    'longitude': 45.1667
  },
  {
    'country': 'Mexico',
    'latitude': 23,
    'longitude': -102
  },
  {
    'country': 'Micronesia',
    'latitude': 6.9167,
    'longitude': 158.25
  },
  {
    'country': 'Moldova',
    'latitude': 47,
    'longitude': 29
  },
  {
    'country': 'Monaco',
    'latitude': 43.7333,
    'longitude': 7.4
  },
  {
    'country': 'Mongolia',
    'latitude': 46,
    'longitude': 105
  },
  {
    'country': 'Montenegro',
    'latitude': 42,
    'longitude': 19
  },
  {
    'country': 'Montserrat',
    'latitude': 16.75,
    'longitude': -62.2
  },
  {
    'country': 'Morocco',
    'latitude': 32,
    'longitude': -5
  },
  {
    'country': 'Mozambique',
    'latitude': -18.25,
    'longitude': 35
  },
  {
    'country': 'Myanmar',
    'latitude': 22,
    'longitude': 98
  },
  {
    'country': 'Namibia',
    'latitude': -22,
    'longitude': 17
  },
  {
    'country': 'Nauru',
    'latitude': -0.5333,
    'longitude': 166.9167
  },
  {
    'country': 'Nepal',
    'latitude': 28,
    'longitude': 84
  },
  {
    'country': 'Netherlands',
    'latitude': 52.5,
    'longitude': 5.75
  },
  {
    'country': 'Netherlands Antilles',
    'latitude': 12.25,
    'longitude': -68.75
  },
  {
    'country': 'New Caledonia',
    'latitude': -21.5,
    'longitude': 165.5
  },
  {
    'country': 'New Zealand',
    'latitude': -41,
    'longitude': 174
  },
  {
    'country': 'Nicaragua',
    'latitude': 13,
    'longitude': -85
  },
  {
    'country': 'Niger',
    'latitude': 16,
    'longitude': 8
  },
  {
    'country': 'Nigeria',
    'latitude': 10,
    'longitude': 8
  },
  {
    'country': 'Niue',
    'latitude': -19.0333,
    'longitude': -169.8667
  },
  {
    'country': 'Norfolk Island',
    'latitude': -29.0333,
    'longitude': 167.95
  },
  {
    'country': 'Northern Mariana Islands',
    'latitude': 15.2,
    'longitude': 145.75
  },
  {
    'country': 'Norway',
    'latitude': 62,
    'longitude': 10
  },
  {
    'country': 'Oman',
    'latitude': 21,
    'longitude': 57
  },
  {
    'country': 'Pakistan',
    'latitude': 30,
    'longitude': 70
  },
  {
    'country': 'Palau',
    'latitude': 7.5,
    'longitude': 134.5
  },
  {
    'country': 'Palestine',
    'latitude': 32,
    'longitude': 35.25
  },
  {
    'country': 'Panama',
    'latitude': 9,
    'longitude': -80
  },
  {
    'country': 'Papua New Guinea',
    'latitude': -6,
    'longitude': 147
  },
  {
    'country': 'Paraguay',
    'latitude': -23,
    'longitude': -58
  },
  {
    'country': 'Peru',
    'latitude': -10,
    'longitude': -76
  },
  {
    'country': 'Philippines',
    'latitude': 13,
    'longitude': 122
  },
  {
    'country': 'Pitcairn',
    'latitude': -24.7,
    'longitude': -127.4
  },
  {
    'country': 'Poland',
    'latitude': 52,
    'longitude': 20
  },
  {
    'country': 'Portugal',
    'latitude': 39.5,
    'longitude': -8
  },
  {
    'country': 'Puerto Rico',
    'latitude': 18.25,
    'longitude': -66.5
  },
  {
    'country': 'Qatar',
    'latitude': 25.5,
    'longitude': 51.25
  },
  {
    'country': 'RÃ©union',
    'latitude': -21.1,
    'longitude': 55.6
  },
  {
    'country': 'Romania',
    'latitude': 46,
    'longitude': 25
  },
  {
    'country': 'Russian Federation',
    'latitude': 60,
    'longitude': 100
  },
  {
    'country': 'Rwanda',
    'latitude': -2,
    'longitude': 30
  },
  {
    'country': 'Samoa',
    'latitude': -13.5833,
    'longitude': -172.3333
  },
  {
    'country': 'San Marino',
    'latitude': 43.7667,
    'longitude': 12.4167
  },
  {
    'country': 'Saudi Arabia',
    'latitude': 25,
    'longitude': 45
  },
  {
    'country': 'Senegal',
    'latitude': 14,
    'longitude': -14
  },
  {
    'country': 'Serbia',
    'latitude': 44,
    'longitude': 21
  },
  {
    'country': 'Seychelles',
    'latitude': -4.5833,
    'longitude': 55.6667
  },
  {
    'country': 'Sierra Leone',
    'latitude': 8.5,
    'longitude': -11.5
  },
  {
    'country': 'Singapore',
    'latitude': 1.3667,
    'longitude': 103.8
  },
  {
    'country': 'Slovakia',
    'latitude': 48.6667,
    'longitude': 19.5
  },
  {
    'country': 'Slovenia',
    'latitude': 46,
    'longitude': 15
  },
  {
    'country': 'Solomon Islands',
    'latitude': -8,
    'longitude': 159
  },
  {
    'country': 'Somalia',
    'latitude': 10,
    'longitude': 49
  },
  {
    'country': 'South Africa',
    'latitude': -29,
    'longitude': 24
  },
  {
    'country': 'South Georgia and the South Sandwich Islands',
    'latitude': -54.5,
    'longitude': -37
  },
  {
    'country': 'Spain',
    'latitude': 40,
    'longitude': -4
  },
  {
    'country': 'Sri Lanka',
    'latitude': 7,
    'longitude': 81
  },
  {
    'country': 'Sudan',
    'latitude': 15,
    'longitude': 30
  },
  {
    'country': 'Suriname',
    'latitude': 4,
    'longitude': -56
  },
  {
    'country': 'Svalbard and Jan Mayen',
    'latitude': 78,
    'longitude': 20
  },
  {
    'country': 'Swaziland',
    'latitude': -26.5,
    'longitude': 31.5
  },
  {
    'country': 'Sweden',
    'latitude': 62,
    'longitude': 15
  },
  {
    'country': 'Switzerland',
    'latitude': 47,
    'longitude': 8
  },
  {
    'country': 'Syrian Arab Republic',
    'latitude': 35,
    'longitude': 38
  },
  {
    'country': 'Taiwan',
    'latitude': 23.5,
    'longitude': 121
  },
  {
    'country': 'Tajikistan',
    'latitude': 39,
    'longitude': 71
  },
  {
    'country': 'Tanzania',
    'latitude': -6,
    'longitude': 35
  },
  {
    'country': 'Thailand',
    'latitude': 15,
    'longitude': 100
  },
  {
    'country': 'Timor-Leste',
    'latitude': -8.55,
    'longitude': 125.5167
  },
  {
    'country': 'Togo',
    'latitude': 8,
    'longitude': 1.1667
  },
  {
    'country': 'Tokelau',
    'latitude': -9,
    'longitude': -172
  },
  {
    'country': 'Tonga',
    'latitude': -20,
    'longitude': -175
  },
  {
    'country': 'Trinidad and Tobago',
    'latitude': 11,
    'longitude': -61
  },
  {
    'country': 'Tunisia',
    'latitude': 34,
    'longitude': 9
  },
  {
    'country': 'Turkey',
    'latitude': 39,
    'longitude': 35
  },
  {
    'country': 'Turkmenistan',
    'latitude': 40,
    'longitude': 60
  },
  {
    'country': 'Turks and Caicos Islands',
    'latitude': 21.75,
    'longitude': -71.5833
  },
  {
    'country': 'Tuvalu',
    'latitude': -8,
    'longitude': 178
  },
  {
    'country': 'Uganda',
    'latitude': 1,
    'longitude': 32
  },
  {
    'country': 'Ukraine',
    'latitude': 49,
    'longitude': 32
  },
  {
    'country': 'United Arab Emirates',
    'latitude': 24,
    'longitude': 54
  },
  {
    'country': 'United Kingdom',
    'latitude': 54,
    'longitude': -2
  },
  {
    'country': 'United States',
    'latitude': 38,
    'longitude': -97
  },
  {
    'country': 'Uruguay',
    'latitude': -33,
    'longitude': -56
  },
  {
    'country': 'Uzbekistan',
    'latitude': 41,
    'longitude': 64
  },
  {
    'country': 'Vanuatu',
    'latitude': -16,
    'longitude': 167
  },
  {
    'country': 'Venezuela',
    'latitude': 8,
    'longitude': -66
  },
  {
    'country': 'Vietnam',
    'latitude': 16,
    'longitude': 106
  },
  {
    'country': 'Wallis and Futuna',
    'latitude': -13.3,
    'longitude': -176.2
  },
  {
    'country': 'Yemen',
    'latitude': 15,
    'longitude': 48
  },
  {
    'country': 'Zambia',
    'latitude': -15,
    'longitude': 30
  },
  {
    'country': 'Zimbabwe',
    'latitude': -20,
    'longitude': 30
  },
  {
    'country': 'Afghanistan',
    'latitude': 33,
    'longitude': 65
  }
];

/**
 * Different states for the game, this decides what the game will run every tick,
 * this is JavaScripts sorry excuse for an Enum.
 *
 * Also for consistency, when adding new states to the 'Enum' please keep them
 * in order of how they occur.
 */
const GAME_STATES = Object.freeze({
  PRE_START: Symbol('pre-start'),
  X_AXIS: Symbol('x-axis'),
  Y_AXIS: Symbol('y-axis'),
  POST_GUESS: Symbol('post-guess')
});

/**
 * List of games states in order, used to increment and change state.
 *
 * @see FreeToBook.#switchState
 */
const STATES = [
  GAME_STATES.PRE_START,
  GAME_STATES.X_AXIS,
  GAME_STATES.Y_AXIS,
  GAME_STATES.POST_GUESS
];

/**
 * List of game states the game should tick for.
 *
 * @see FreeToBook.render
 */
const TICKING_STATES = [
  GAME_STATES.X_AXIS,
  GAME_STATES.Y_AXIS,
];

/** IDs used in the component, saves me fuging up spelling, once again sorry excuse for an enum. */
const IDS = Object.freeze({
  CONTAINER: 'free-to-book-body',
  PLANE: 'free-to-book-plane',
  SUBTEXT: 'free-to-book-subtext',
  TOPTEXT: 'free-to-book-toptext',
  HIGHSCORE: 'free-to-book-highscore',
});

/** ASCII character code for space */
const SPACE = 32;

/** Tick rate for the game, decides at what speed we the entire game runs */
const TICK_RATE = 10;

/** % of the map for the plane to move every tick, SHOULD BE LESS THAN 1 */
const PLANE_SPEED = 0.004;

/** For some reason the coords are off, move to the left this % */
const X_ADJUSTMENT = 0.10;

/** For some reason the coords are off, move up this % */
const Y_ADJUSTMENT = 0.10;

/** Rate to which shit scores do shitter and good scores do better */
const EXPONENTIAL_FACTOR = 4;

/** Maximum score cap for the game */
const SCORE_CAP = 5000;

/** Key for the `high_score` local storage */
const LOCAL_STORAGE_KEY = 'free-to-book-high-score';

/** Utils used for calculating the position of the pin and the plane */
const MAX_COORS  = Object.freeze({
  LATITUDE: 90,
  LONGITUDE: 180,
});

class FreeToBook extends HTMLElement {
  #state = GAME_STATES.PRE_START;

  #stateCounter = 0;

  /** Reference to the tick method */
  #ticker;

  /** Element for the body of the component */
  #body;

  /** Instance for the plane */
  #plane;

  /** Instance for the pin */
  #pin;

  /** Text to show above the map */
  #toptext;

  /** Text to show below the map */
  #subtext;

  #country;

  #highscore;

  #scoredisplay;

  /** Flag to stop the game from ticking */
  #busy = false;

  constructor() {
    super();
  }

  /** Called each time the element is removed from the document. */
  disconnectedCallback() {
    clearInterval(this.#ticker)
  }

  /**
   * Called each time the element is added to the document. The specification recommends that,
   * as far as possible, developers should implement custom element setup in this callback rather
   * than the constructor.
   */
  connectedCallback() {
    this.#highscore = localStorage.getItem(LOCAL_STORAGE_KEY);
    this.render();
  }

  /**
   * Called on every tick after `render()`, needs to be tracked using `#ticker` and should be cleaned
   * on disconnecting callback.
   *
   * @see TICK_RATE
   */
  #onTick() {
    switch (this.#state) {
      case GAME_STATES.X_AXIS: {
        if (!this.#plane.style.left) {
          this.#plane.style.left = 0;
        }

        const currentPos = parseInt(this.#plane.style.left);
        const nextStep = this.#body.offsetWidth * PLANE_SPEED;
        const direction = this.#plane.style.transform.indexOf('scaleX') != -1 ? 'left' : 'right';

        if (direction === 'right') {
          if ((currentPos + nextStep) > this.#body.offsetWidth - this.#plane.offsetWidth / 2) {
            this.#plane.style.transform = `${this.#plane.style.transform} scaleX(-1)`;
            break;
          }

          this.#plane.style.left = `${currentPos + nextStep}px`;
          break;
        }

        if ((currentPos - nextStep) < 0) {
          this.#plane.style.transform = this.#plane.style.transform.replace('scaleX(-1)', '');
          break;
        }

        this.#plane.style.left = `${currentPos - nextStep}px`;
        break;
      }

      case GAME_STATES.Y_AXIS: {
        if (!this.#plane.style.top) {
          this.#plane.style.top = 0;
        }

        const currentPos = parseInt(this.#plane.style.top);
        const nextStep = this.#body.offsetHeight * PLANE_SPEED;
        const direction = this.#plane.style.transform.indexOf('rotate(180deg)') != -1 ? 'down' : 'up';

        if (direction === 'up') {
          if ((currentPos + nextStep) > this.#body.offsetHeight - this.#plane.offsetHeight / 2) {
            this.#plane.style.transform = `${this.#plane.style.transform} rotate(180deg)`;
            break;
          }

          this.#plane.style.top = `${currentPos + nextStep}px`;
          break;
        }

        if ((currentPos - nextStep) < 0) {
          this.#plane.style.transform = this.#plane.style.transform.replace('rotate(180deg)', '');
          break;
        }

        this.#plane.style.top = `${currentPos - nextStep}px`;
        break;
      }
    }
  }

  /** Called on `keydown` of `space`, will update `this.#state` and render the updates to the ui. */
  #switchState() {
    this.#busy = true;

    this.#stateCounter++;
    const state = STATES[this.#stateCounter % (STATES.length)];

    switch (state) {
      case GAME_STATES.PRE_START: {
        if (this.#plane) {
          this.#body.removeChild(this.#plane);
          this.#plane = undefined;
        }

       if (this.#pin) {
          this.#body.removeChild(this.#pin);
          this.#pin = undefined;
        }

        this.#subtext.innerText = 'Press Space to Start!';
        this.#toptext.innerText = 'Fly me to...';

        break;
      }

      case GAME_STATES.X_AXIS: {
        this.#subtext.innerText = 'Select X axis';

        const index = Math.floor(Math.random() * COUNTRIES.length);
        this.#country = COUNTRIES[index];

        this.#toptext.innerText = `Fly me to ${this.#country.country}!`;

        this.#plane = document.createElement('img');
        this.#plane.id = IDS.PLANE;
        this.#plane.src = '/assets/plane.png';
        this.#plane.classList.add('plane');

        this.#body.appendChild(this.#plane);

        break;
      }

      case GAME_STATES.Y_AXIS: {
        this.#plane.style.transform = `${this.#plane.style.transform} rotate(90deg)`;
        this.#subtext.innerText = 'Select Y axis';
        break;
      }

      case GAME_STATES.POST_GUESS: {
        const planeRelativeX = parseInt(this.#plane.style.left) / this.#body.offsetWidth;
        const planeRelativeY = parseInt(this.#plane.style.top) / this.#body.offsetHeight;

        const pinRelativeX = ((this.#country.longitude + MAX_COORS.LONGITUDE) / (2 * MAX_COORS.LONGITUDE)) - X_ADJUSTMENT;
        const pinRelativeY = 1 - ((this.#country.latitude + MAX_COORS.LATITUDE) / (2 * MAX_COORS.LATITUDE)) - Y_ADJUSTMENT;

        this.#pin = document.createElement('img');
        this.#pin.src = '/assets/pin.png';
        this.#pin.classList.add('pin');
        this.#pin.style.left = `${(this.#body.offsetWidth * pinRelativeX) + this.#pin.offsetWidth}px`;
        this.#pin.style.top = `${(this.#body.offsetHeight * pinRelativeY) - this.#pin.offsetHeight / 2}px`;

        // Using pythagoras to find the difference between two points
        const diffRelativeX = (planeRelativeX - pinRelativeX) ** 2;
        const diffRelativeY = (planeRelativeY - pinRelativeY) ** 2;
        const score = Math.round(((1 - Math.sqrt(diffRelativeY + diffRelativeX)) ** EXPONENTIAL_FACTOR) * SCORE_CAP, 0);

        if (score > this.#highscore) {
          this.#highscore = score;
          localStorage.setItem(LOCAL_STORAGE_KEY, score);

          this.#scoredisplay.innerText = `High Score: ${this.#highscore}`;
          this.#subtext.innerText = `New High Score! You earned ${score} points!`;
        } else {
          this.#subtext.innerText = `You earned ${score} points!`;
        }

        this.#body.appendChild(this.#pin);

        break;
      }
    }

    // assign state only after the switch state has been finalised, we don't want to tick for a state before it's actually been initialised
    this.#state = state;
    this.#busy = false;
  }

  /** Initially render the component and setup listeners */
  render() {
    this.#ticker = setInterval(() => {if (this.#busy === false && TICKING_STATES.includes(this.#state)) this.#onTick()}, TICK_RATE);
    addEventListener('keydown', e => {if (e.keyCode === SPACE) this.#switchState()});

    const shadowRoot = this.attachShadow({mode: 'open'});
    shadowRoot.innerHTML = `
      <style>
        :host {
          background: grey;
          position: relative;
        }

        .map {
          width: 100%;
        }

        .plane {
          width: 10%;
          position: absolute;
          left: 0;
        }

        .pin {
          width: 5%;
          position: absolute;
        }

        .toptext {
          align-items: center;
          text-align: center;
        }

        .subtext {
          align-items: center;
          text-align: center;
          padding: 20px;
        }

        .top-container {
          display: flex;
          justify-content: space-between;
        }

        .container {
          position: relative;
        }
      </style>

      <div class='top-container'>
        <p id=${IDS.TOPTEXT} class='toptext'></p>
        <p id=${IDS.HIGHSCORE} class='highscore'></p>
      </div>

      <div id=${IDS.CONTAINER} class='container'>
        <img src='assets/map.png' id=${IDS.CONTAINER} class='map'>
      </div>

      <p id=${IDS.SUBTEXT} class='subtext'></p>
    `;

    this.#body = shadowRoot.getElementById(IDS.CONTAINER);
    this.#subtext = shadowRoot.getElementById(IDS.SUBTEXT);
    this.#toptext = shadowRoot.getElementById(IDS.TOPTEXT);
    this.#scoredisplay = shadowRoot.getElementById(IDS.HIGHSCORE);

    if (this.#highscore) {
      this.#scoredisplay.innerText = `High Score: ${this.#highscore}`;
    }

    this.#toptext.innerText = 'Fly me to...';
    this.#subtext.innerText = 'Press Space to Start!';
  }
}

customElements.define('free-to-book', FreeToBook);