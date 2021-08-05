export let WEB_API_ACTION = 'api/documenteditor/';
export let defaultDocument: Object = {
    "sections": [
        {
            "sectionFormat": {
                "pageWidth": 612,
                "pageHeight": 792,
                "leftMargin": 72,
                "rightMargin": 72,
                "topMargin": 72,
                "bottomMargin": 72,
                "differentFirstPage": false,
                "differentOddAndEvenPages": false,
                "headerDistance": 36,
                "footerDistance": 36
            },
            "blocks": [
                {
                    "paragraphFormat": {
                        "afterSpacing": 30,
                        "styleName": "Heading 1",
                        "listFormat": {}
                    },
                    "characterFormat": {},
                    "inlines": [
                        {
                            "characterFormat": {},
                            "text": "Adventure Works Cycles"
                        }
                    ]
                },
                {
                    "paragraphFormat": {
                        "firstLineIndent": 36,
                        "styleName": "Normal",
                        "listFormat": {}
                    },
                    "characterFormat": {},
                    "inlines": [
                        {
                            "characterFormat": {},
                            "text": "Adventure Works Cycles, the fictitious company on which the "
                        },
                        {
                            "characterFormat": {},
                            "text": "AdventureWorks"
                        },
                        {
                            "characterFormat": {},
                            "text": " sample databases "
                        },
                        {
                            "characterFormat": {},
                            "text": "are based, is a large, multinational manufacturing company. The company manufactures and sells metal "
                        },
                        {
                            "characterFormat": {},
                            "text": "and composite bicycles to North American, European and Asian commercial markets. While its base "
                        },
                        {
                            "characterFormat": {},
                            "text": "operation "
                        },
                        {
                            "characterFormat": {},
                            "text": "is located in"
                        },
                        {
                            "characterFormat": {},
                            "text": " Bothell, Washington with 290 employees, several regional sales teams are located "
                        },
                        {
                            "characterFormat": {},
                            "text": "throughout their market base."
                        }
                    ]
                },
                {
                    "paragraphFormat": {
                        "firstLineIndent": 36,
                        "styleName": "Normal",
                        "listFormat": {}
                    },
                    "characterFormat": {},
                    "inlines": [
                        {
                            "characterFormat": {},
                            "text": "In 2000, Adventure Works Cycles bought a small manufacturing plant, "
                        },
                        {
                            "characterFormat": {},
                            "text": "Importadores"
                        },
                        {
                            "characterFormat": {},
                            "text": " Neptuno, "
                        },
                        {
                            "characterFormat": {},
                            "text": "located in Mexico. "
                        },
                        {
                            "characterFormat": {},
                            "text": "Importadores"
                        },
                        {
                            "characterFormat": {},
                            "text": " Neptuno manufactures several critical subcomponents for the "
                        },
                        {
                            "characterFormat": {},
                            "text": "Adventure Works Cycles product line. These subcomponents are shipped to the Bothell location for final "
                        },
                        {
                            "characterFormat": {},
                            "text": "product assembly. In 2001, "
                        },
                        {
                            "characterFormat": {},
                            "text": "Importadores"
                        },
                        {
                            "characterFormat": {},
                            "text": " Neptuno, became the sole manufacturer and distributor of the "
                        },
                        {
                            "characterFormat": {},
                            "text": "touring bicycle product group."
                        }
                    ]
                },
                {
                    "paragraphFormat": {
                        "styleName": "Heading 1",
                        "listFormat": {}
                    },
                    "characterFormat": {},
                    "inlines": [
                        {
                            "characterFormat": {},
                            "text": "Product Overview"
                        }
                    ]
                },
                {
                    "rows": [
                        {
                            "cells": [
                                {
                                    "blocks": [
                                        {
                                            "paragraphFormat": {
                                                "textAlignment": "Center",
                                                "styleName": "Normal",
                                                "listFormat": {}
                                            },
                                            "characterFormat": {
                                                "fontSize": "11"
                                            },
                                            "inlines": [
                                                {
                                                    "characterFormat": {
                                                        "fontSize": "11"
                                                    },
                                                    "imageString": "data:image/gif;base64,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",
                                                    "width": 141.99998,
                                                    "height": 88.5
                                                }
                                            ]
                                        }
                                    ],
                                    "cellFormat": {
                                        "borders": {
                                            "top": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "left": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "right": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "bottom": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "diagonalDown": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "diagonalUp": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "horizontal": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "vertical": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            }
                                        },
                                        "shading": {
                                            "backgroundColor": "#ffffff",
                                            "foregroundColor": "empty",
                                            "textureStyle": "TextureNone"
                                        },
                                        "topMargin": 2,
                                        "preferredWidth": 234,
                                        "preferredWidthType": "Point",
                                        "cellWidth": 234,
                                        "columnSpan": 1,
                                        "rowSpan": 1,
                                        "verticalAlignment": "Top"
                                    },
                                    "columnIndex": 0
                                },
                                {
                                    "blocks": [
                                        {
                                            "paragraphFormat": {
                                                "textAlignment": "Center",
                                                "styleName": "Heading 2",
                                                "outlineLevel": "Level2",
                                                "listFormat": {}
                                            },
                                            "characterFormat": {},
                                            "inlines": [
                                                {
                                                    "characterFormat": {},
                                                    "text": "Mountai"
                                                },
                                                {
                                                    "characterFormat": {},
                                                    "bookmarkType": 0,
                                                    "name": "_GoBack"
                                                },
                                                {
                                                    "characterFormat": {},
                                                    "bookmarkType": 1,
                                                    "name": "_GoBack"
                                                },
                                                {
                                                    "characterFormat": {},
                                                    "text": "n-200"
                                                }
                                            ]
                                        },
                                        {
                                            "paragraphFormat": {
                                                "textAlignment": "Center",
                                                "styleName": "Normal",
                                                "listFormat": {}
                                            },
                                            "characterFormat": {},
                                            "inlines": [
                                                {
                                                    "characterFormat": {},
                                                    "text": "Product No: BK-M68B-38"
                                                }
                                            ]
                                        },
                                        {
                                            "paragraphFormat": {
                                                "textAlignment": "Center",
                                                "styleName": "Normal",
                                                "listFormat": {}
                                            },
                                            "characterFormat": {},
                                            "inlines": [
                                                {
                                                    "characterFormat": {},
                                                    "text": "Size: 38"
                                                }
                                            ]
                                        },
                                        {
                                            "paragraphFormat": {
                                                "textAlignment": "Center",
                                                "styleName": "Normal",
                                                "listFormat": {}
                                            },
                                            "characterFormat": {},
                                            "inlines": [
                                                {
                                                    "characterFormat": {},
                                                    "text": "Weight: 25"
                                                }
                                            ]
                                        },
                                        {
                                            "paragraphFormat": {
                                                "textAlignment": "Center",
                                                "styleName": "Normal",
                                                "listFormat": {}
                                            },
                                            "characterFormat": {},
                                            "inlines": [
                                                {
                                                    "characterFormat": {},
                                                    "text": "Price: $2,294.99"
                                                }
                                            ]
                                        },
                                        {
                                            "paragraphFormat": {
                                                "textAlignment": "Center",
                                                "styleName": "Normal",
                                                "listFormat": {}
                                            },
                                            "characterFormat": {},
                                            "inlines": []
                                        }
                                    ],
                                    "cellFormat": {
                                        "borders": {
                                            "top": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "left": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "right": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "bottom": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "diagonalDown": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "diagonalUp": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "horizontal": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "vertical": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            }
                                        },
                                        "shading": {
                                            "backgroundColor": "#ffffff",
                                            "foregroundColor": "empty",
                                            "textureStyle": "TextureNone"
                                        },
                                        "topMargin": 2,
                                        "preferredWidth": 234,
                                        "preferredWidthType": "Point",
                                        "cellWidth": 234,
                                        "columnSpan": 1,
                                        "rowSpan": 1,
                                        "verticalAlignment": "Top"
                                    },
                                    "columnIndex": 1
                                }
                            ],
                            "rowFormat": {
                                "height": 1,
                                "allowBreakAcrossPages": true,
                                "heightType": "AtLeast",
                                "isHeader": false,
                                "borders": {
                                    "top": {
                                        "color": "#000000",
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "left": {
                                        "color": "#000000",
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "right": {
                                        "color": "#000000",
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "bottom": {
                                        "color": "#000000",
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "diagonalDown": {
                                        "color": "#000000",
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "diagonalUp": {
                                        "color": "#000000",
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "horizontal": {
                                        "color": "#000000",
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "vertical": {
                                        "color": "#000000",
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    }
                                },
                                "gridBefore": 0,
                                "gridBeforeWidth": 0,
                                "gridBeforeWidthType": "Point",
                                "gridAfter": 0,
                                "gridAfterWidth": 0,
                                "gridAfterWidthType": "Point"
                            }
                        },
                        {
                            "cells": [
                                {
                                    "blocks": [
                                        {
                                            "paragraphFormat": {
                                                "textAlignment": "Center",
                                                "styleName": "Heading 2",
                                                "outlineLevel": "Level2",
                                                "listFormat": {}
                                            },
                                            "characterFormat": {},
                                            "inlines": [
                                                {
                                                    "characterFormat": {},
                                                    "text": "Mountain-300"
                                                }
                                            ]
                                        },
                                        {
                                            "paragraphFormat": {
                                                "textAlignment": "Center",
                                                "styleName": "Normal",
                                                "listFormat": {}
                                            },
                                            "characterFormat": {},
                                            "inlines": [
                                                {
                                                    "characterFormat": {},
                                                    "text": "Product No: BK-M47B-38"
                                                }
                                            ]
                                        },
                                        {
                                            "paragraphFormat": {
                                                "textAlignment": "Center",
                                                "styleName": "Normal",
                                                "listFormat": {}
                                            },
                                            "characterFormat": {},
                                            "inlines": [
                                                {
                                                    "characterFormat": {},
                                                    "text": "Size: 35"
                                                }
                                            ]
                                        },
                                        {
                                            "paragraphFormat": {
                                                "textAlignment": "Center",
                                                "styleName": "Normal",
                                                "listFormat": {}
                                            },
                                            "characterFormat": {},
                                            "inlines": [
                                                {
                                                    "characterFormat": {},
                                                    "text": "Weight: 22"
                                                }
                                            ]
                                        },
                                        {
                                            "paragraphFormat": {
                                                "textAlignment": "Center",
                                                "styleName": "Normal",
                                                "listFormat": {}
                                            },
                                            "characterFormat": {},
                                            "inlines": [
                                                {
                                                    "characterFormat": {},
                                                    "text": "Price: $1,079.99"
                                                }
                                            ]
                                        },
                                        {
                                            "paragraphFormat": {
                                                "textAlignment": "Center",
                                                "styleName": "Normal",
                                                "listFormat": {}
                                            },
                                            "characterFormat": {},
                                            "inlines": []
                                        }
                                    ],
                                    "cellFormat": {
                                        "borders": {
                                            "top": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "left": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "right": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "bottom": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "diagonalDown": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "diagonalUp": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "horizontal": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "vertical": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            }
                                        },
                                        "shading": {
                                            "backgroundColor": "#ffffff",
                                            "foregroundColor": "empty",
                                            "textureStyle": "TextureNone"
                                        },
                                        "topMargin": 2,
                                        "preferredWidth": 234,
                                        "preferredWidthType": "Point",
                                        "cellWidth": 234,
                                        "columnSpan": 1,
                                        "rowSpan": 1,
                                        "verticalAlignment": "Top"
                                    },
                                    "columnIndex": 0
                                },
                                {
                                    "blocks": [
                                        {
                                            "paragraphFormat": {
                                                "textAlignment": "Center",
                                                "styleName": "Normal",
                                                "listFormat": {}
                                            },
                                            "characterFormat": {},
                                            "inlines": [
                                                {
                                                    "characterFormat": {},
                                                    "imageString": "data:image/gif;base64,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",
                                                    "width": 135,
                                                    "height": 84
                                                }
                                            ]
                                        }
                                    ],
                                    "cellFormat": {
                                        "borders": {
                                            "top": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "left": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "right": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "bottom": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "diagonalDown": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "diagonalUp": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "horizontal": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "vertical": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            }
                                        },
                                        "shading": {
                                            "backgroundColor": "#ffffff",
                                            "foregroundColor": "empty",
                                            "textureStyle": "TextureNone"
                                        },
                                        "topMargin": 2,
                                        "preferredWidth": 234,
                                        "preferredWidthType": "Point",
                                        "cellWidth": 234,
                                        "columnSpan": 1,
                                        "rowSpan": 1,
                                        "verticalAlignment": "Top"
                                    },
                                    "columnIndex": 1
                                }
                            ],
                            "rowFormat": {
                                "height": 1,
                                "allowBreakAcrossPages": true,
                                "heightType": "AtLeast",
                                "isHeader": false,
                                "borders": {
                                    "top": {
                                        "color": "#000000",
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "left": {
                                        "color": "#000000",
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "right": {
                                        "color": "#000000",
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "bottom": {
                                        "color": "#000000",
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "diagonalDown": {
                                        "color": "#000000",
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "diagonalUp": {
                                        "color": "#000000",
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "horizontal": {
                                        "color": "#000000",
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "vertical": {
                                        "color": "#000000",
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    }
                                },
                                "gridBefore": 0,
                                "gridBeforeWidth": 0,
                                "gridBeforeWidthType": "Point",
                                "gridAfter": 0,
                                "gridAfterWidth": 0,
                                "gridAfterWidthType": "Point"
                            }
                        },
                        {
                            "cells": [
                                {
                                    "blocks": [
                                        {
                                            "paragraphFormat": {
                                                "textAlignment": "Center",
                                                "styleName": "Normal",
                                                "listFormat": {}
                                            },
                                            "characterFormat": {},
                                            "inlines": [
                                                {
                                                    "characterFormat": {},
                                                    "imageString": "data:image/gif;base64,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",
                                                    "width": 165.5,
                                                    "height": 103
                                                }
                                            ]
                                        }
                                    ],
                                    "cellFormat": {
                                        "borders": {
                                            "top": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "left": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "right": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "bottom": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "diagonalDown": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "diagonalUp": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "horizontal": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "vertical": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            }
                                        },
                                        "shading": {
                                            "backgroundColor": "#ffffff",
                                            "foregroundColor": "empty",
                                            "textureStyle": "TextureNone"
                                        },
                                        "topMargin": 2,
                                        "preferredWidth": 234,
                                        "preferredWidthType": "Point",
                                        "cellWidth": 234,
                                        "columnSpan": 1,
                                        "rowSpan": 1,
                                        "verticalAlignment": "Top"
                                    },
                                    "columnIndex": 0
                                },
                                {
                                    "blocks": [
                                        {
                                            "paragraphFormat": {
                                                "textAlignment": "Center",
                                                "styleName": "Heading 2",
                                                "outlineLevel": "Level2",
                                                "listFormat": {}
                                            },
                                            "characterFormat": {
                                                "fontSize": "13"
                                            },
                                            "inlines": [
                                                {
                                                    "characterFormat": {},
                                                    "text": "Road-150"
                                                }
                                            ]
                                        },
                                        {
                                            "paragraphFormat": {
                                                "textAlignment": "Center",
                                                "styleName": "Normal",
                                                "listFormat": {}
                                            },
                                            "characterFormat": {},
                                            "inlines": [
                                                {
                                                    "characterFormat": {},
                                                    "text": "Product No: BK-R93R-44"
                                                }
                                            ]
                                        },
                                        {
                                            "paragraphFormat": {
                                                "textAlignment": "Center",
                                                "styleName": "Normal",
                                                "listFormat": {}
                                            },
                                            "characterFormat": {},
                                            "inlines": [
                                                {
                                                    "characterFormat": {},
                                                    "text": "Size: 44"
                                                }
                                            ]
                                        },
                                        {
                                            "paragraphFormat": {
                                                "textAlignment": "Center",
                                                "styleName": "Normal",
                                                "listFormat": {}
                                            },
                                            "characterFormat": {},
                                            "inlines": [
                                                {
                                                    "characterFormat": {},
                                                    "text": "Weight: 14"
                                                }
                                            ]
                                        },
                                        {
                                            "paragraphFormat": {
                                                "textAlignment": "Center",
                                                "styleName": "Normal",
                                                "listFormat": {}
                                            },
                                            "characterFormat": {},
                                            "inlines": [
                                                {
                                                    "characterFormat": {},
                                                    "text": "Price: $3,578.27"
                                                }
                                            ]
                                        },
                                        {
                                            "paragraphFormat": {
                                                "textAlignment": "Center",
                                                "styleName": "Normal",
                                                "listFormat": {}
                                            },
                                            "characterFormat": {},
                                            "inlines": []
                                        }
                                    ],
                                    "cellFormat": {
                                        "borders": {
                                            "top": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "left": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "right": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "bottom": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "diagonalDown": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "diagonalUp": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "horizontal": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            },
                                            "vertical": {
                                                "color": "#000000",
                                                "hasNoneStyle": false,
                                                "lineStyle": "None",
                                                "lineWidth": 0,
                                                "shadow": false,
                                                "space": 0
                                            }
                                        },
                                        "shading": {
                                            "backgroundColor": "#ffffff",
                                            "foregroundColor": "empty",
                                            "textureStyle": "TextureNone"
                                        },
                                        "topMargin": 2,
                                        "preferredWidth": 234,
                                        "preferredWidthType": "Point",
                                        "cellWidth": 234,
                                        "columnSpan": 1,
                                        "rowSpan": 1,
                                        "verticalAlignment": "Top"
                                    },
                                    "columnIndex": 1
                                }
                            ],
                            "rowFormat": {
                                "height": 1,
                                "allowBreakAcrossPages": true,
                                "heightType": "AtLeast",
                                "isHeader": false,
                                "borders": {
                                    "top": {
                                        "color": "#000000",
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "left": {
                                        "color": "#000000",
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "right": {
                                        "color": "#000000",
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "bottom": {
                                        "color": "#000000",
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "diagonalDown": {
                                        "color": "#000000",
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "diagonalUp": {
                                        "color": "#000000",
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "horizontal": {
                                        "color": "#000000",
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    },
                                    "vertical": {
                                        "color": "#000000",
                                        "hasNoneStyle": false,
                                        "lineStyle": "None",
                                        "lineWidth": 0,
                                        "shadow": false,
                                        "space": 0
                                    }
                                },
                                "gridBefore": 0,
                                "gridBeforeWidth": 0,
                                "gridBeforeWidthType": "Point",
                                "gridAfter": 0,
                                "gridAfterWidth": 0,
                                "gridAfterWidthType": "Point"
                            }
                        }
                    ],
                    "grid": [
                        234,
                        234
                    ],
                    "tableFormat": {
                        "borders": {
                            "top": {
                                "color": "#000000",
                                "hasNoneStyle": false,
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0
                            },
                            "left": {
                                "color": "#000000",
                                "hasNoneStyle": false,
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0
                            },
                            "right": {
                                "color": "#000000",
                                "hasNoneStyle": false,
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0
                            },
                            "bottom": {
                                "color": "#000000",
                                "hasNoneStyle": false,
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0
                            },
                            "diagonalDown": {
                                "color": "#000000",
                                "hasNoneStyle": false,
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0
                            },
                            "diagonalUp": {
                                "color": "#000000",
                                "hasNoneStyle": false,
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0
                            },
                            "horizontal": {
                                "color": "#000000",
                                "hasNoneStyle": false,
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0
                            },
                            "vertical": {
                                "color": "#000000",
                                "hasNoneStyle": false,
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0
                            }
                        },
                        "shading": {
                            "backgroundColor": "#ffffff",
                            "foregroundColor": "empty",
                            "textureStyle": "TextureNone"
                        },
                        "cellSpacing": 0,
                        "leftIndent": 0,
                        "tableAlignment": "Left",
                        "topMargin": 0,
                        "rightMargin": 5.4,
                        "leftMargin": 5.4,
                        "bottomMargin": 0,
                        "preferredWidth": 0,
                        "preferredWidthType": "Auto"
                    },
                    "description": null,
                    "title": null
                },
                {
                    "paragraphFormat": {
                        "styleName": "Normal",
                        "listFormat": {}
                    },
                    "characterFormat": {},
                    "inlines": []
                }
            ],
            "headersFooters": {
                "header": {
                    "blocks": [
                        {
                            "paragraphFormat": {
                                "listFormat": {}
                            },
                            "characterFormat": {},
                            "inlines": []
                        }
                    ]
                },
                "footer": {
                    "blocks": [
                        {
                            "paragraphFormat": {
                                "listFormat": {}
                            },
                            "characterFormat": {},
                            "inlines": []
                        }
                    ]
                }
            }
        }
    ],
    "characterFormat": {
        "fontSize": 11,
        "fontFamily": "Calibri"
    },
    "paragraphFormat": {
        "lineSpacing": 1.0791666507720947,
        "lineSpacingType": "Multiple",
        "listFormat": {}
    },
    "styles": [
        {
            "name": "Normal",
            "type": "Paragraph",
            "paragraphFormat": {
                "lineSpacing": 1.149999976158142,
                "lineSpacingType": "Multiple",
                "listFormat": {}
            },
            "characterFormat": {
                "fontFamily": "Calibri"
            },
            "next": "Normal"
        },
        {
            "name": "Default Paragraph Font",
            "type": "Character",
            "characterFormat": {}
        },
        {
            "name": "Heading 1 Char",
            "type": "Character",
            "characterFormat": {
                "fontSize": 16,
                "fontFamily": "Calibri Light",
                "fontColor": "#2F5496"
            },
            "basedOn": "Default Paragraph Font"
        },
        {
            "name": "Heading 1",
            "type": "Paragraph",
            "paragraphFormat": {
                "beforeSpacing": 12,
                "afterSpacing": 0,
                "outlineLevel": "Level1",
                "listFormat": {}
            },
            "characterFormat": {
                "fontSize": 16,
                "fontFamily": "Calibri Light",
                "fontColor": "#2F5496"
            },
            "basedOn": "Normal",
            "link": "Heading 1 Char",
            "next": "Normal"
        },
        {
            "name": "Heading 2 Char",
            "type": "Character",
            "characterFormat": {
                "fontSize": 13,
                "fontFamily": "Calibri Light",
                "fontColor": "#2F5496"
            },
            "basedOn": "Default Paragraph Font"
        },
        {
            "name": "Heading 2",
            "type": "Paragraph",
            "paragraphFormat": {
                "beforeSpacing": 2,
                "afterSpacing": 6,
                "outlineLevel": "Level2",
                "listFormat": {}
            },
            "characterFormat": {
                "fontSize": 13,
                "fontFamily": "Calibri Light",
                "fontColor": "#2F5496"
            },
            "basedOn": "Normal",
            "link": "Heading 2 Char",
            "next": "Normal"
        }
    ],
    "lists": [],
    "abstractLists": []
};

export let bulletAndNumbering: Object = { "sections": [{ "blocks": [{ "characterFormat": { "fontColor": "#4472C4FF" }, "paragraphFormat": { "afterSpacing": 36.0, "styleName": "Normal" }, "inlines": [{ "text": "Types of Animals", "characterFormat": { "fontSize": 18.0, "fontFamily": "Monotype Corsiva", "fontColor": "#4472C4FF" } }] }, { "characterFormat": { "bold": true }, "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 0, "listId": 0 } }, "inlines": [{ "text": "Mammals", "characterFormat": { "bold": true } }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "body covered by hair or fur" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "warm-blooded" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "have a backbone" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "produce milk" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "Examples" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 2, "listId": 0 } }, "inlines": [{ "text": "Tiger" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 2, "listId": 0 } }, "inlines": [{ "text": "Bat" }] }, { "characterFormat": { "bold": true }, "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 0, "listId": 0 } }, "inlines": [{ "text": "Reptiles", "characterFormat": { "bold": true } }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "body covered by scales" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "cold-blooded" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "have a backbone" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "most lay " }, { "text": "hard-shelled" }, { "text": " eggs on land" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "Examples" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 2, "listId": 0 } }, "inlines": [{ "text": "Snake" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 2, "listId": 0 } }, "inlines": [{ "text": "Lizard" }] }, { "characterFormat": { "bold": true }, "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 0, "listId": 0 } }, "inlines": [{ "text": "Birds", "characterFormat": { "bold": true } }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "body covered by feathers" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "warm-blooded" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "have a backbone" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "lay eggs" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "Examples" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 2, "listId": 0 } }, "inlines": [{ "text": "Pigeon" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 2, "listId": 0 } }, "inlines": [{ "text": "Hen" }] }, { "characterFormat": { "bold": true }, "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 0, "listId": 0 } }, "inlines": [{ "text": "Insects", "characterFormat": { "bold": true } }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "most are small air-breathing animals" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "6 legs" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "2 antennae" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "3 body sections (head, thorax, abdomen)" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "Examples" }, { "name": "_GoBack", "bookmarkType": 0 }, { "name": "_GoBack", "bookmarkType": 1 }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 2, "listId": 0 } }, "inlines": [{ "text": "Butterfly" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 2, "listId": 0 } }, "inlines": [{ "text": "Spider" }] }, { "characterFormat": { "bold": true }, "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 0, "listId": 0 } }, "inlines": [{ "text": "Aquatic Animals", "characterFormat": { "bold": true } }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "most have gills" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "found in lakes, rivers, and oceans" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 1, "listId": 0 } }, "inlines": [{ "text": "Examples" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 2, "listId": 0 } }, "inlines": [{ "text": "Blue Shark" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 2, "listId": 0 } }, "inlines": [{ "text": "Fish" }] }], "headersFooters": {}, "sectionFormat": { "headerDistance": 36.0, "footerDistance": 36.0, "pageWidth": 612.0, "pageHeight": 792.0, "leftMargin": 72.0, "rightMargin": 72.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": false, "differentOddAndEvenPages": false } }], "characterFormat": { "fontSize": 11.0, "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple" }, "lists": [{ "listId": 0, "abstractListId": 0 }], "abstractLists": [{ "abstractListId": 0, "levels": [{ "startAt": 1, "restartLevel": 0, "listLevelPattern": "Arabic", "followCharacter": "Tab", "numberFormat": "%1.", "characterFormat": { "bold": true, "italic": false }, "paragraphFormat": { "leftIndent": 18.0, "firstLineIndent": -18.0 } }, { "startAt": 1, "restartLevel": 1, "listLevelPattern": "Arabic", "followCharacter": "Tab", "numberFormat": "%1.%2.", "characterFormat": { "bold": false, "italic": true }, "paragraphFormat": { "leftIndent": 39.599998474121094, "firstLineIndent": -21.600000381469727 } }, { "listLevelPattern": "Bullet", "followCharacter": "Tab", "numberFormat": "", "characterFormat": { "fontFamily": "Symbol" }, "paragraphFormat": { "leftIndent": 61.200000762939453, "firstLineIndent": -25.200000762939453 } }, { "startAt": 1, "restartLevel": 3, "listLevelPattern": "Arabic", "followCharacter": "Tab", "numberFormat": "%1.%2.%3.%4.", "paragraphFormat": { "leftIndent": 86.4000015258789, "firstLineIndent": -32.400001525878906 } }, { "startAt": 1, "restartLevel": 4, "listLevelPattern": "Arabic", "followCharacter": "Tab", "numberFormat": "%1.%2.%3.%4.%5.", "paragraphFormat": { "leftIndent": 111.59999847412109, "firstLineIndent": -39.599998474121094 } }, { "startAt": 1, "restartLevel": 5, "listLevelPattern": "Arabic", "followCharacter": "Tab", "numberFormat": "%1.%2.%3.%4.%5.%6.", "paragraphFormat": { "leftIndent": 136.80000305175781, "firstLineIndent": -46.799999237060547 } }, { "startAt": 1, "restartLevel": 6, "listLevelPattern": "Arabic", "followCharacter": "Tab", "numberFormat": "%1.%2.%3.%4.%5.%6.%7.", "paragraphFormat": { "leftIndent": 162.0, "firstLineIndent": -54.0 } }, { "startAt": 1, "restartLevel": 7, "listLevelPattern": "Arabic", "followCharacter": "Tab", "numberFormat": "%1.%2.%3.%4.%5.%6.%7.%8.", "paragraphFormat": { "leftIndent": 187.19999694824219, "firstLineIndent": -61.200000762939453 } }, { "startAt": 1, "restartLevel": 8, "listLevelPattern": "Arabic", "followCharacter": "Tab", "numberFormat": "%1.%2.%3.%4.%5.%6.%7.%8.%9.", "paragraphFormat": { "leftIndent": 216.0, "firstLineIndent": -72.0 } }] }], "background": { "color": "#FFFFFFFF" }, "styles": [{ "type": "Paragraph", "name": "Normal", "next": "Normal" }, { "type": "Character", "name": "Default Paragraph Font" }, { "type": "Paragraph", "name": "Notes", "basedOn": "Normal", "next": "Normal", "characterFormat": { "bold": true }, "paragraphFormat": { "afterSpacing": 6.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple" } }, { "type": "Paragraph", "name": "List Paragraph", "basedOn": "Normal", "next": "List Paragraph", "paragraphFormat": { "leftIndent": 36.0 } }] };

export let characterFormat: Object = { "sections": [{ "blocks": [{ "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "List of text formatting options", "characterFormat": { "fontSize": 18.0, "fontFamily": "Monotype Corsiva" } }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Bold", "characterFormat": { "bold": true } }] }, { "characterFormat": { "bold": true }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "characterFormat": { "fontColor": "#00B0F0FF" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "C", "characterFormat": { "fontColor": "#CC99FFFF" } }, { "text": "o", "characterFormat": { "fontColor": "#333333FF" } }, { "text": "l", "characterFormat": { "fontColor": "#FF6600FF" } }, { "text": "o", "characterFormat": { "fontColor": "#3366FFFF" } }, { "text": "r", "characterFormat": { "fontColor": "#FF9900FF" } }, { "text": "e", "characterFormat": { "fontColor": "#FF6600FF" } }, { "text": "d", "characterFormat": { "fontColor": "#808080FF" } }] }, { "characterFormat": { "fontColor": "#00B0F0FF" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "characterFormat": { "bold": true }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Double", "characterFormat": { "strikethrough": "DoubleStrike" } }, { "text": " ", "characterFormat": { "strikethrough": "DoubleStrike" } }, { "text": "Strike", "characterFormat": { "strikethrough": "DoubleStrike" } }] }, { "characterFormat": { "strikethrough": "DoubleStrike" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "characterFormat": { "fontColor": "#ED7D31FF" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Highlighted", "characterFormat": { "highlightColor": "Turquoise", "fontColor": "#ED7D31FF" } }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Italicized", "characterFormat": { "italic": true } }] }, { "characterFormat": { "italic": true }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Strikeout ", "characterFormat": { "strikethrough": "SingleStrike" } }] }, { "characterFormat": { "strikethrough": "SingleStrike" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "characterFormat": { "strikethrough": "SingleStrike" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Some" }, { "text": "Sub", "characterFormat": { "baselineAlignment": "Subscript" } }, { "text": "s", "characterFormat": { "baselineAlignment": "Subscript" } }, { "text": "cript", "characterFormat": { "baselineAlignment": "Subscript" } }, { "text": " ", "characterFormat": { "baselineAlignment": "Subscript" } }] }, { "characterFormat": { "baselineAlignment": "Subscript" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "characterFormat": { "baselineAlignment": "Subscript" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Some" }, { "text": "Super", "characterFormat": { "baselineAlignment": "Superscript" } }, { "text": "s", "characterFormat": { "baselineAlignment": "Superscript" } }, { "text": "cript", "characterFormat": { "baselineAlignment": "Superscript" } }, { "text": " ", "characterFormat": { "baselineAlignment": "Superscript" } }] }, { "characterFormat": { "baselineAlignment": "Superscript" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "characterFormat": { "underline": "Single" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Underline", "characterFormat": { "underline": "Single" } }, { "text": "d", "characterFormat": { "underline": "Single" } }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": " " }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Text with different fonts and sizes", "characterFormat": { "fontSize": 18.0, "fontFamily": "Monotype Corsiva" } }] }, { "characterFormat": { "underline": "Double", "fontSize": 11.0, "fontFamily": "Book Antiqua", "fontColor": "#7028E8FF" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "paragraphFormat": { "beforeSpacing": 6.0, "afterSpacing": 6.0, "styleName": "Normal" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog [Book Antiqua", "characterFormat": { "fontSize": 11.0, "fontFamily": "Book Antiqua", "fontColor": "#7028E8FF" } }, { "text": "]", "characterFormat": { "fontSize": 11.0, "fontFamily": "Book Antiqua", "fontColor": "#7028E8FF" } }] }, { "paragraphFormat": { "beforeSpacing": 6.0, "afterSpacing": 6.0, "styleName": "Normal" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog ", "characterFormat": { "fontFamily": "Bitstream Vera Sans", "fontColor": "#F1C084FF" } }, { "text": "[Bitstream Vera Sans]", "characterFormat": { "fontFamily": "Bitstream Vera Sans", "fontColor": "#F1C084FF" } }] }, { "paragraphFormat": { "beforeSpacing": 6.0, "afterSpacing": 6.0, "styleName": "Normal" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog ", "characterFormat": { "fontSize": 13.0, "fontFamily": "Comic Sans MS", "fontColor": "#BD5DCDFF" } }, { "text": "[Comic Sans MS]", "characterFormat": { "fontSize": 13.0, "fontFamily": "Comic Sans MS", "fontColor": "#BD5DCDFF" } }] }, { "paragraphFormat": { "beforeSpacing": 6.0, "afterSpacing": 6.0, "styleName": "Normal" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog ", "characterFormat": { "fontSize": 14.0, "fontFamily": "Microsoft Sans Serif", "fontColor": "#4D72EEFF" } }, { "text": "[Microsoft Sans Serif]", "characterFormat": { "fontSize": 14.0, "fontFamily": "Microsoft Sans Serif", "fontColor": "#4D72EEFF" } }] }, { "paragraphFormat": { "beforeSpacing": 6.0, "afterSpacing": 6.0, "styleName": "Normal" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog", "characterFormat": { "fontSize": 15.0, "fontFamily": "Batang", "fontColor": "#335388FF" } }, { "text": " [", "characterFormat": { "fontSize": 15.0, "fontFamily": "Batang", "fontColor": "#335388FF" } }, { "text": "Batang", "characterFormat": { "fontSize": 15.0, "fontFamily": "Batang", "fontColor": "#335388FF" } }, { "text": "]", "characterFormat": { "fontSize": 15.0, "fontFamily": "Batang", "fontColor": "#335388FF" } }] }, { "characterFormat": { "fontSize": 16.0, "fontFamily": "Arial", "fontColor": "#31B463FF" }, "paragraphFormat": { "beforeSpacing": 6.0, "afterSpacing": 6.0, "styleName": "Normal" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog ", "characterFormat": { "fontSize": 16.0, "fontFamily": "Arial", "fontColor": "#31B463FF" } }, { "text": "[Arial]", "characterFormat": { "fontSize": 16.0, "fontFamily": "Arial", "fontColor": "#31B463FF" } }] }, { "characterFormat": { "fontSize": 16.0 }, "paragraphFormat": { "beforeSpacing": 6.0, "afterSpacing": 6.0, "styleName": "Normal" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog [Book Antiqua]", "characterFormat": { "fontSize": 16.0, "fontFamily": "Book Antiqua", "fontColor": "#7028E8FF" } }] }, { "characterFormat": { "fontSize": 15.0 }, "paragraphFormat": { "beforeSpacing": 6.0, "afterSpacing": 6.0, "styleName": "Normal" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog [Bitstream Vera Sans]", "characterFormat": { "fontSize": 15.0, "fontFamily": "Bitstream Vera Sans", "fontColor": "#F1C084FF" } }] }, { "characterFormat": { "fontSize": 14.0 }, "paragraphFormat": { "beforeSpacing": 6.0, "afterSpacing": 6.0, "styleName": "Normal" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog [Comic Sans MS]", "characterFormat": { "fontSize": 14.0, "fontFamily": "Comic Sans MS", "fontColor": "#BD5DCDFF" } }, { "name": "_GoBack", "bookmarkType": 0 }, { "name": "_GoBack", "bookmarkType": 1 }] }, { "characterFormat": { "fontSize": 13.0 }, "paragraphFormat": { "beforeSpacing": 6.0, "afterSpacing": 6.0, "styleName": "Normal" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog [Microsoft Sans Serif]", "characterFormat": { "fontSize": 13.0, "fontFamily": "Microsoft Sans Serif", "fontColor": "#4D72EEFF" } }] }, { "characterFormat": { "fontSize": 11.0 }, "paragraphFormat": { "beforeSpacing": 6.0, "afterSpacing": 6.0, "styleName": "Normal" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog", "characterFormat": { "fontFamily": "Batang", "fontColor": "#335388FF" } }, { "text": " [", "characterFormat": { "fontFamily": "Batang", "fontColor": "#335388FF" } }, { "text": "Batang", "characterFormat": { "fontFamily": "Batang", "fontColor": "#335388FF" } }, { "text": "]", "characterFormat": { "fontFamily": "Batang", "fontColor": "#335388FF" } }] }, { "characterFormat": { "fontSize": 10.0 }, "paragraphFormat": { "beforeSpacing": 6.0, "afterSpacing": 6.0, "styleName": "Normal" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog [Arial]", "characterFormat": { "fontSize": 11.0, "fontFamily": "Arial", "fontColor": "#31B463FF" } }] }], "headersFooters": {}, "sectionFormat": { "headerDistance": 36.0, "footerDistance": 36.0, "pageWidth": 612.0, "pageHeight": 792.0, "leftMargin": 72.0, "rightMargin": 72.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": false, "differentOddAndEvenPages": false } }], "characterFormat": { "fontFamily": "Times New Roman" }, "background": { "color": "#FFFFFFFF" }, "styles": [{ "type": "Paragraph", "name": "Normal", "next": "Normal", "characterFormat": { "fontSize": 12.0 } }, { "type": "Character", "name": "Default Paragraph Font" }] };

export let headerFooter: Object = { "sections": [{ "blocks": [{ "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit " }, { "text": "amet" }, { "text": ", " }, { "text": "consectetur" }, { "text": " " }, { "text": "adipiscing" }, { "text": " " }, { "text": "elit" }, { "text": ", " }, { "text": "sed" }, { "text": " do " }, { "text": "eiusmod" }, { "text": " " }, { "text": "tempor" }, { "text": " " }, { "text": "incididunt" }, { "text": " " }, { "text": "ut" }, { "text": " " }, { "text": "labore" }, { "text": " et dolore magna " }, { "text": "aliqua" }, { "text": ". Ut " }, { "text": "enim" }, { "text": " ad minim " }, { "text": "veniam" }, { "text": ", " }, { "text": "quis" }, { "text": " " }, { "text": "nostrud" }, { "text": " exercitation " }, { "text": "ullamco" }, { "text": " " }, { "text": "laboris" }, { "text": " nisi " }, { "text": "ut" }, { "text": " " }, { "text": "aliquip" }, { "text": " ex " }, { "text": "ea" }, { "text": " " }, { "text": "commodo" }, { "text": " " }, { "text": "consequat" }, { "text": ". Duis " }, { "text": "aute" }, { "text": " " }, { "text": "irure" }, { "text": " dolor in " }, { "text": "reprehenderit" }, { "text": " in " }, { "text": "voluptate" }, { "text": " " }, { "text": "velit" }, { "text": " " }, { "text": "esse" }, { "text": " " }, { "text": "cillum" }, { "text": " dolore " }, { "text": "eu" }, { "text": " " }, { "text": "fugiat" }, { "text": " " }, { "text": "nulla" }, { "text": " " }, { "text": "pariatur" }, { "text": ". " }, { "text": "Excepteur" }, { "text": " " }, { "text": "sint" }, { "text": " " }, { "text": "occaecat" }, { "text": " " }, { "text": "cupidatat" }, { "text": " non " }, { "text": "proident" }, { "text": ", " }, { "text": "sunt" }, { "text": " in culpa qui " }, { "text": "officia" }, { "text": " " }, { "text": "deserunt" }, { "text": " " }, { "text": "mollit" }, { "text": " " }, { "text": "anim" }, { "text": " id " }, { "text": "est" }, { "text": " " }, { "text": "laborum" }, { "text": "." }] }, { "paragraphFormat": { "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "styleName": "Normal" }, "inlines": [{ "text": "\f" }, { "name": "_GoBack", "bookmarkType": 0 }, { "name": "_GoBack", "bookmarkType": 1 }] }, { "characterFormat": { "fontFamily": "Comic Sans MS" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "amet", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": ", ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "consectetur", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "adipiscing", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "elit", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": ", ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "sed", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " do ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "eiusmod", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "tempor", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "incididunt", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "ut", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "labore", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " et dolore magna ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "aliqua", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": ". Ut ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "enim", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ad minim ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "veniam", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": ", ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "quis", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "nostrud", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " exercitation ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "ullamco", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "laboris", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " nisi ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "ut", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "aliquip", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ex ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "ea", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "commodo", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "consequat", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": ". Duis ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "aute", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "irure", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " dolor in ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "reprehenderit", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " in ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "voluptate", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "velit", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "esse", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "cillum", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " dolore ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "eu", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "fugiat", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "nulla", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "pariatur", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": ". ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "Excepteur", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "sint", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "occaecat", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "cupidatat", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " non ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "proident", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": ", ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "sunt", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " in culpa qui ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "officia", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "deserunt", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "mollit", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "anim", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " id ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "est", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": " ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "laborum", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": ".", "characterFormat": { "fontFamily": "Comic Sans MS" } }] }, { "paragraphFormat": { "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "styleName": "Normal" }, "inlines": [{ "text": "\f" }] }, { "characterFormat": { "fontFamily": "Book Antiqua" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "amet", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": ", ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "consectetur", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "adipiscing", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "elit", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": ", ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "sed", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " do ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "eiusmod", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "tempor", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "incididunt", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "ut", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "labore", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " et dolore magna ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "aliqua", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": ". Ut ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "enim", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ad minim ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "veniam", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": ", ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "quis", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "nostrud", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " exercitation ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "ullamco", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "laboris", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " nisi ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "ut", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "aliquip", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ex ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "ea", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "commodo", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "consequat", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": ". Duis ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "aute", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "irure", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " dolor in ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "reprehenderit", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " in ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "voluptate", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "velit", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "esse", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "cillum", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " dolore ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "eu", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "fugiat", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "nulla", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "pariatur", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": ". ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "Excepteur", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "sint", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "occaecat", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "cupidatat", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " non ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "proident", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": ", ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "sunt", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " in culpa qui ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "officia", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "deserunt", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "mollit", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "anim", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " id ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "est", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": " ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "laborum", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": ".", "characterFormat": { "fontFamily": "Book Antiqua" } }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }], "headersFooters": { "header": { "blocks": [{ "characterFormat": { "fontSize": 18.0, "fontFamily": "Book Antiqua" }, "paragraphFormat": { "textAlignment": "Right", "styleName": "Header" }, "inlines": [{ "text": "This is odd page header.", "characterFormat": { "fontSize": 18.0, "fontFamily": "Book Antiqua" } }] }] }, "footer": { "blocks": [{ "characterFormat": { "fontFamily": "Book Antiqua" }, "paragraphFormat": { "styleName": "Footer", "tabs": [{ "tabJustification": "Left", "position": 0.0, "tabLeader": "None", "deletePosition": 234.0 }] }, "inlines": [{ "text": "This is odd page footer", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "\t", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "text": "Page ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": " PAGE   \\* MERGEFORMAT ", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "fieldType": 2 }, { "text": "1", "characterFormat": { "fontFamily": "Book Antiqua" } }, { "fieldType": 1 }] }] }, "evenHeader": { "blocks": [{ "characterFormat": { "fontSize": 18.0, "fontFamily": "Comic Sans MS" }, "paragraphFormat": { "textAlignment": "Right", "styleName": "Header" }, "inlines": [{ "text": "This is even page header", "characterFormat": { "fontSize": 18.0, "fontFamily": "Comic Sans MS" } }] }] }, "evenFooter": { "blocks": [{ "characterFormat": { "fontFamily": "Comic Sans MS" }, "paragraphFormat": { "styleName": "Footer", "tabs": [{ "tabJustification": "Left", "position": 0.0, "tabLeader": "None", "deletePosition": 234.0 }] }, "inlines": [{ "text": "This is even page footer", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "\t", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "text": "Page ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": " PAGE   \\* MERGEFORMAT ", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "fieldType": 2 }, { "text": "1", "characterFormat": { "fontFamily": "Comic Sans MS" } }, { "fieldType": 1 }] }] }, "firstPageHeader": { "blocks": [{ "characterFormat": { "fontSize": 20.0 }, "paragraphFormat": { "textAlignment": "Right", "styleName": "Normal" }, "inlines": [{ "text": "This is first page header", "characterFormat": { "fontSize": 20.0 } }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }] }, "firstPageFooter": { "blocks": [{ "paragraphFormat": { "styleName": "Footer", "tabs": [{ "tabJustification": "Left", "position": 0.0, "tabLeader": "None", "deletePosition": 234.0 }] }, "inlines": [{ "text": "This is first page footer" }, { "text": "\t" }, { "text": "Page " }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": " PAGE   \\* MERGEFORMAT " }, { "fieldType": 2 }, { "text": "1" }, { "fieldType": 1 }] }] } }, "sectionFormat": { "headerDistance": 36.0, "footerDistance": 36.0, "pageWidth": 612.0, "pageHeight": 792.0, "leftMargin": 72.0, "rightMargin": 72.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": true, "differentOddAndEvenPages": true } }], "characterFormat": { "fontSize": 11.0, "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple" }, "background": { "color": "#FFFFFFFF" }, "styles": [{ "type": "Paragraph", "name": "Normal", "next": "Normal", "paragraphFormat": { "lineSpacing": 1.0666667222976685, "lineSpacingType": "Multiple" } }, { "type": "Character", "name": "Default Paragraph Font" }, { "type": "Paragraph", "name": "Notes", "basedOn": "Normal", "next": "Normal", "characterFormat": { "bold": true }, "paragraphFormat": { "afterSpacing": 6.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple" } }, { "type": "Paragraph", "name": "Header", "basedOn": "Normal", "next": "Normal", "link": "Header Char", "paragraphFormat": { "afterSpacing": 0.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple", "tabs": [{ "tabJustification": "Center", "position": 234.0, "tabLeader": "None", "deletePosition": 0.0 }, { "tabJustification": "Right", "position": 460.0, "tabLeader": "None", "deletePosition": 0.0 }] } }, { "type": "Character", "name": "Header Char", "basedOn": "Default Paragraph Font" }, { "type": "Paragraph", "name": "Footer", "basedOn": "Normal", "next": "Normal", "link": "Footer Char", "paragraphFormat": { "afterSpacing": 0.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple", "tabs": [{ "tabJustification": "Center", "position": 234.0, "tabLeader": "None", "deletePosition": 0.0 }, { "tabJustification": "Right", "position": 460.0, "tabLeader": "None", "deletePosition": 0.0 }] } }, { "type": "Character", "name": "Footer Char", "basedOn": "Default Paragraph Font" }, { "type": "Paragraph", "name": "Title", "basedOn": "Normal", "next": "Normal", "link": "Title Char", "characterFormat": { "fontSize": 28.0, "fontFamily": "Calibri Light" }, "paragraphFormat": { "afterSpacing": 0.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple" } }, { "type": "Character", "name": "Title Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontSize": 28.0, "fontFamily": "Calibri Light" } }] };

export let links: Object = { "sections": [{ "blocks": [{ "characterFormat": { "fontColor": "#4472C4FF" }, "paragraphFormat": { "afterSpacing": 36.0, "styleName": "Normal" }, "inlines": [{ "name": "top", "bookmarkType": 0 }, { "text": "Hyperlinks and bookmarks", "characterFormat": { "fontSize": 18.0, "fontFamily": "Monotype Corsiva", "fontColor": "#4472C4FF" } }, { "name": "top", "bookmarkType": 1 }] }, { "paragraphFormat": { "styleName": "Heading 1" }, "inlines": [{ "text": "Heading 1" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit " }, { "text": "amet" }, { "text": ", " }, { "text": "consectetur" }, { "text": " " }, { "text": "adipiscing" }, { "text": " " }, { "text": "elit" }, { "text": ", " }, { "text": "sed" }, { "text": " do " }, { "text": "eiusmod" }, { "text": " " }, { "text": "tempor" }, { "text": " " }, { "text": "incididunt" }, { "text": " " }, { "text": "ut" }, { "text": " " }, { "text": "labore" }, { "text": " et dolore magna " }, { "text": "aliqua" }, { "text": ". Ut " }, { "text": "enim" }, { "text": " ad minim " }, { "text": "veniam" }, { "text": ", " }, { "text": "quis" }, { "text": " " }, { "text": "nostrud" }, { "text": " exercitation " }, { "text": "ullamco" }, { "text": " " }, { "text": "laboris" }, { "text": " nisi " }, { "text": "ut" }, { "text": " " }, { "text": "aliquip" }, { "text": " ex " }, { "text": "ea" }, { "text": " " }, { "text": "commodo" }, { "text": " " }, { "text": "consequat" }, { "text": "." }] }, { "paragraphFormat": { "beforeSpacing": 18.0, "afterSpacing": 18.0, "styleName": "Normal" }, "inlines": [{ "text": "For more information, kindly visit" }, { "text": " " }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": "HYPERLINK \"https://www.syncfusion.com/\" " }, { "fieldType": 2 }, { "text": "our website", "characterFormat": { "styleName": "Hyperlink" } }, { "fieldType": 1 }, { "text": " [Link to external URL]." }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "paragraphFormat": { "styleName": "Heading 2" }, "inlines": [{ "text": "Heading 2" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit " }, { "text": "amet" }, { "text": ", " }, { "text": "consectetur" }, { "text": " " }, { "text": "adipiscing" }, { "text": " " }, { "text": "elit" }, { "text": ", " }, { "text": "sed" }, { "text": " do " }, { "text": "eiusmod" }, { "text": " " }, { "text": "tempor" }, { "text": " " }, { "text": "incididunt" }, { "text": " " }, { "text": "ut" }, { "text": " " }, { "text": "labore" }, { "text": " et dolore magna " }, { "text": "aliqua" }, { "text": ". Ut " }, { "text": "enim" }, { "text": " ad minim " }, { "text": "veniam" }, { "text": ", " }, { "text": "quis" }, { "text": " " }, { "text": "nostrud" }, { "text": " exercitation " }, { "text": "ullamco" }, { "text": " " }, { "text": "laboris" }, { "text": " nisi " }, { "text": "ut" }, { "text": " " }, { "text": "aliquip" }, { "text": " ex " }, { "text": "ea" }, { "text": " " }, { "text": "commodo" }, { "text": " " }, { "text": "consequat" }, { "text": "." }] }, { "paragraphFormat": { "beforeSpacing": 18.0, "afterSpacing": 18.0, "styleName": "Normal" }, "inlines": [{ "text": "You can reach us through " }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": "HYPERLINK \"mailto:info@syncfusion.com\" " }, { "fieldType": 2 }, { "text": "our mail", "characterFormat": { "styleName": "Hyperlink" } }, { "fieldType": 1 }, { "text": " [Link to mail]." }] }, { "paragraphFormat": { "beforeSpacing": 18.0, "afterSpacing": 18.0, "styleName": "Normal" }, "inlines": [{ "name": "_GoBack", "bookmarkType": 0 }, { "name": "_GoBack", "bookmarkType": 1 }] }, { "paragraphFormat": { "beforeSpacing": 18.0, "afterSpacing": 18.0, "styleName": "Normal" }, "inlines": [] }, { "paragraphFormat": { "beforeSpacing": 18.0, "afterSpacing": 18.0, "styleName": "Normal" }, "inlines": [] }, { "paragraphFormat": { "beforeSpacing": 18.0, "afterSpacing": 18.0, "styleName": "Normal" }, "inlines": [{ "text": "To the top, click " }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": "HYPERLINK \\l \"top\"" }, { "fieldType": 2 }, { "text": "here", "characterFormat": { "styleName": "Hyperlink" } }, { "fieldType": 1 }, { "text": " [Link to bookmark]." }] }], "headersFooters": {}, "sectionFormat": { "headerDistance": 36.0, "footerDistance": 36.0, "pageWidth": 612.0, "pageHeight": 792.0, "leftMargin": 72.0, "rightMargin": 72.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": false, "differentOddAndEvenPages": false } }], "characterFormat": { "fontSize": 11.0, "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple" }, "background": { "color": "#FFFFFFFF" }, "styles": [{ "type": "Paragraph", "name": "Normal", "next": "Normal", "paragraphFormat": { "afterSpacing": 0.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple" } }, { "type": "Paragraph", "name": "Heading 1", "basedOn": "Normal", "next": "Normal", "link": "Heading 1 Char", "characterFormat": { "fontSize": 16.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" }, "paragraphFormat": { "beforeSpacing": 12.0, "outlineLevel": "Level1" } }, { "type": "Paragraph", "name": "Heading 2", "basedOn": "Normal", "next": "Normal", "link": "Heading 2 Char", "characterFormat": { "fontSize": 13.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" }, "paragraphFormat": { "beforeSpacing": 2.0, "outlineLevel": "Level2" } }, { "type": "Character", "name": "Default Paragraph Font" }, { "type": "Paragraph", "name": "Notes", "basedOn": "Normal", "next": "Normal", "characterFormat": { "bold": true }, "paragraphFormat": { "afterSpacing": 6.0 } }, { "type": "Character", "name": "Hyperlink", "basedOn": "Default Paragraph Font", "characterFormat": { "underline": "Single", "fontColor": "#0563C1FF" } }, { "type": "Character", "name": "Unresolved Mention", "basedOn": "Default Paragraph Font", "characterFormat": { "fontColor": "#808080FF" } }, { "type": "Character", "name": "Heading 1 Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontSize": 16.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" } }, { "type": "Character", "name": "Heading 2 Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontSize": 13.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" } }, { "type": "Character", "name": "FollowedHyperlink", "basedOn": "Default Paragraph Font", "characterFormat": { "underline": "Single", "fontColor": "#954F72FF" } }] };

export let paragraphFormat: Object = { "sections": [{ "blocks": [{ "characterFormat": { "fontColor": "#4472C4FF" }, "paragraphFormat": { "afterSpacing": 36.0, "styleName": "Normal" }, "inlines": [{ "text": "List of text alignment options", "characterFormat": { "fontSize": 18.0, "fontFamily": "Monotype Corsiva", "fontColor": "#4472C4FF" } }] }, { "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Left-aligned", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 18.0, "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo ", "characterFormat": { "fontFamily": "Calibri" } }, { "text": "consequat.", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" }, "paragraphFormat": { "beforeSpacing": 18.0, "textAlignment": "Center", "styleName": "Normal" }, "inlines": [{ "text": "Centered", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 18.0, "textAlignment": "Center", "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" }, "paragraphFormat": { "beforeSpacing": 18.0, "textAlignment": "Right", "styleName": "Normal" }, "inlines": [{ "text": "Right-", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }, { "text": "aligned", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 18.0, "textAlignment": "Right", "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut a", "characterFormat": { "fontFamily": "Calibri" } }, { "text": "liquip ex ea commodo consequat.", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" }, "paragraphFormat": { "beforeSpacing": 18.0, "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Justified", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 18.0, "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", "characterFormat": { "fontFamily": "Calibri" } }, { "text": ".", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "styleName": "Normal" }, "inlines": [{ "text": " ", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontColor": "#4472C4FF" }, "paragraphFormat": { "afterSpacing": 36.0, "styleName": "Normal" }, "inlines": [{ "text": "List of indentation options", "characterFormat": { "fontSize": 18.0, "fontFamily": "Monotype Corsiva", "fontColor": "#4472C4FF" } }] }, { "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" }, "paragraphFormat": { "leftIndent": 36.0, "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Left indent is 48 pixels", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "leftIndent": 36.0, "afterSpacing": 18.0, "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo", "characterFormat": { "fontFamily": "Calibri" } }, { "text": " consequat.", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" }, "paragraphFormat": { "rightIndent": 36.0, "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Right", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }, { "text": " indent is 48 pixels", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "rightIndent": 36.0, "afterSpacing": 18.0, "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" }, "paragraphFormat": { "firstLineIndent": 36.0, "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "First line ", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }, { "text": "indent is 48 pixels", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "firstLineIndent": 36.0, "afterSpacing": 18.0, "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" }, "paragraphFormat": { "leftIndent": 36.0, "firstLineIndent": -36.0, "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Hanging", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }, { "text": " indent is 48 pixels", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "leftIndent": 36.0, "firstLineIndent": -36.0, "afterSpacing": 18.0, "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple", "styleName": "Normal" }, "inlines": [{ "text": " ", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontColor": "#4472C4FF" }, "paragraphFormat": { "afterSpacing": 36.0, "styleName": "Normal" }, "inlines": [{ "text": "List of line spacing options", "characterFormat": { "fontSize": 18.0, "fontFamily": "Monotype Corsiva", "fontColor": "#4472C4FF" } }] }, { "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" }, "paragraphFormat": { "lineSpacing": 2.0, "lineSpacingType": "Multiple", "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Double line spacing", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 18.0, "lineSpacing": 2.0, "lineSpacingType": "Multiple", "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut ali", "characterFormat": { "fontFamily": "Calibri" } }, { "name": "_GoBack", "bookmarkType": 0 }, { "name": "_GoBack", "bookmarkType": 1 }, { "text": "quip ex ea commodo consequat.", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" }, "paragraphFormat": { "lineSpacing": 18.0, "lineSpacingType": "AtLeast", "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Line spacing", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }, { "text": " is", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }, { "text": " at least", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }, { "text": " ", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }, { "text": "24", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }, { "text": " pixels", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 18.0, "lineSpacing": 18.0, "lineSpacingType": "AtLeast", "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" }, "paragraphFormat": { "lineSpacing": 15.0, "lineSpacingType": "Exactly", "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Line spacing", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }, { "text": " is ", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }, { "text": "exactly 20", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }, { "text": " pixels", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 18.0, "lineSpacing": 15.0, "lineSpacingType": "Exactly", "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "leftIndent": 36.0, "afterSpacing": 18.0, "lineSpacing": 15.0, "lineSpacingType": "Exactly", "textAlignment": "Justify", "styleName": "Normal" }, "inlines": [{ "text": " " }] }, { "characterFormat": { "fontColor": "#4472C4FF" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "List of paragraph", "characterFormat": { "fontSize": 18.0, "fontFamily": "Monotype Corsiva", "fontColor": "#4472C4FF" } }, { "text": " ", "characterFormat": { "fontSize": 18.0, "fontFamily": "Monotype Corsiva", "fontColor": "#4472C4FF" } }, { "text": "spacing options", "characterFormat": { "fontSize": 18.0, "fontFamily": "Monotype Corsiva", "fontColor": "#4472C4FF" } }] }, { "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" }, "paragraphFormat": { "beforeSpacing": 18.0, "afterSpacing": 12.0, "styleName": "Normal" }, "inlines": [{ "text": "Spacing before the paragraph is 24 pixels and after the paragraph is 16 pixels", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "beforeSpacing": 18.0, "afterSpacing": 12.0, "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "characterFormat": { "fontFamily": "Calibri" } }] }, { "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "No spacing before and after the paragraph", "characterFormat": { "bold": true, "fontSize": 14.0, "fontFamily": "Calibri" } }] }, { "characterFormat": { "fontFamily": "Calibri" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", "characterFormat": { "fontFamily": "Calibri" } }] }], "headersFooters": {}, "sectionFormat": { "headerDistance": 36.0, "footerDistance": 36.0, "pageWidth": 612.0, "pageHeight": 792.0, "leftMargin": 72.0, "rightMargin": 72.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": false, "differentOddAndEvenPages": false } }], "characterFormat": { "fontSize": 11.0, "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple" }, "background": { "color": "#FFFFFFFF" }, "styles": [{ "type": "Paragraph", "name": "Normal", "next": "Normal", "characterFormat": { "fontSize": 12.0, "fontFamily": "Times New Roman" }, "paragraphFormat": { "afterSpacing": 0.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple" } }, { "type": "Character", "name": "Default Paragraph Font" }, { "type": "Paragraph", "name": "Notes", "basedOn": "Normal", "next": "Normal", "characterFormat": { "bold": true }, "paragraphFormat": { "afterSpacing": 6.0 } }] };

export let sectionFormat: Object = { "sections": [{ "blocks": [{ "paragraphFormat": { "styleName": "Title" }, "inlines": [{ "text": "First Section" }] }, { "paragraphFormat": { "styleName": "Subtitle" }, "inlines": [{ "text": "Size " }, { "text": "816x1056" }, { "text": "px" }, { "text": " (Portrait)" }] }, { "paragraphFormat": { "styleName": "Subtitle" }, "inlines": [{ "text": "Margin 96px (" }, { "text": "top and bottom) " }, { "text": "72px (left and right)" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit " }, { "text": "amet" }, { "text": ", " }, { "text": "consectetur" }, { "text": " " }, { "text": "adipiscing" }, { "text": " " }, { "text": "elit" }, { "text": ", " }, { "text": "sed" }, { "text": " do " }, { "text": "eiusmod" }, { "text": " " }, { "text": "tempor" }, { "text": " " }, { "text": "incididunt" }, { "text": " " }, { "text": "ut" }, { "text": " " }, { "text": "labore" }, { "text": " et dolore magna " }, { "text": "aliqua" }, { "text": ". Ut " }, { "text": "enim" }, { "text": " ad minim " }, { "text": "veniam" }, { "text": ", " }, { "text": "quis" }, { "text": " " }, { "text": "nostrud" }, { "text": " exercitation " }, { "text": "ullamco" }, { "text": " " }, { "text": "laboris" }, { "text": " nisi " }, { "text": "ut" }, { "text": " " }, { "text": "aliquip" }, { "text": " ex " }, { "text": "ea" }, { "text": " " }, { "text": "commodo" }, { "text": " " }, { "text": "consequat" }, { "text": ". Duis " }, { "text": "aute" }, { "text": " " }, { "text": "irure" }, { "text": " dolor in " }, { "text": "reprehenderit" }, { "text": " in " }, { "text": "voluptate" }, { "text": " " }, { "text": "velit" }, { "text": " " }, { "text": "esse" }, { "text": " " }, { "text": "cillum" }, { "text": " dolore " }, { "text": "eu" }, { "text": " " }, { "text": "fugiat" }, { "text": " " }, { "text": "nulla" }, { "text": " " }, { "text": "pariatur" }, { "text": ". " }, { "text": "Excepteur" }, { "text": " " }, { "text": "sint" }, { "text": " " }, { "text": "occaecat" }, { "text": " " }, { "text": "cupidatat" }, { "text": " non " }, { "text": "proident" }, { "text": ", " }, { "text": "sunt" }, { "text": " in culpa qui " }, { "text": "officia" }, { "text": " " }, { "text": "deserunt" }, { "text": " " }, { "text": "mollit" }, { "text": " " }, { "text": "anim" }, { "text": " id " }, { "text": "est" }, { "text": " " }, { "text": "laborum" }, { "text": "." }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Sed" }, { "text": " " }, { "text": "ut" }, { "text": " " }, { "text": "perspiciatis" }, { "text": " " }, { "text": "unde" }, { "text": " " }, { "text": "omnis" }, { "text": " " }, { "text": "iste" }, { "text": " " }, { "text": "natus" }, { "text": " error sit " }, { "text": "voluptatem" }, { "text": " " }, { "text": "accusantium" }, { "text": " " }, { "text": "doloremque" }, { "text": " " }, { "text": "laudantium" }, { "text": ", " }, { "text": "totam" }, { "text": " rem " }, { "text": "aperiam" }, { "text": ", " }, { "text": "eaque" }, { "text": " " }, { "text": "ipsa" }, { "text": " " }, { "text": "quae" }, { "text": " ab " }, { "text": "illo" }, { "text": " " }, { "text": "inventore" }, { "text": " " }, { "text": "veritatis" }, { "text": " et quasi " }, { "text": "architecto" }, { "text": " " }, { "text": "beatae" }, { "text": " vitae dicta " }, { "text": "sunt" }, { "text": " " }, { "text": "explicabo" }, { "text": ". Nemo " }, { "text": "enim" }, { "text": " " }, { "text": "ipsam" }, { "text": " " }, { "text": "voluptatem" }, { "text": " " }, { "text": "quia" }, { "text": " " }, { "text": "voluptas" }, { "text": " sit " }, { "text": "aspernatur" }, { "text": " " }, { "text": "aut" }, { "text": " " }, { "text": "odit" }, { "text": " " }, { "text": "aut" }, { "text": " fugit, " }, { "text": "sed" }, { "text": " " }, { "text": "quia" }, { "text": " " }, { "text": "consequuntur" }, { "text": " " }, { "text": "magni" }, { "text": " " }, { "text": "dolores" }, { "text": " " }, { "text": "eos" }, { "text": " qui " }, { "text": "ratione" }, { "text": " " }, { "text": "voluptatem" }, { "text": " " }, { "text": "sequi" }, { "text": " " }, { "text": "nesciunt" }, { "text": ". " }, { "text": "Neque" }, { "text": " " }, { "text": "porro" }, { "text": " " }, { "text": "quisquam" }, { "text": " " }, { "text": "est" }, { "text": ", qui " }, { "text": "dolorem" }, { "text": " ipsum " }, { "text": "quia" }, { "text": " dolor sit " }, { "text": "amet" }, { "text": ", " }, { "text": "consectetur" }, { "text": ", " }, { "text": "adipisci" }, { "text": " " }, { "text": "velit" }, { "text": ", " }, { "text": "sed" }, { "text": " " }, { "text": "quia" }, { "text": " non " }, { "text": "numquam" }, { "text": " " }, { "text": "eius" }, { "text": " " }, { "text": "modi" }, { "text": " " }, { "text": "tempora" }, { "text": " " }, { "text": "incidunt" }, { "text": " " }, { "text": "ut" }, { "text": " " }, { "text": "labore" }, { "text": " et dolore " }, { "text": "magnam" }, { "text": " " }, { "text": "aliquam" }, { "text": " " }, { "text": "quaerat" }, { "text": " " }, { "text": "voluptatem" }, { "text": ". Ut " }, { "text": "enim" }, { "text": " ad minima " }, { "text": "veniam" }, { "text": ", " }, { "text": "quis" }, { "text": " nostrum " }, { "text": "exercitationem" }, { "text": " " }, { "text": "ullam" }, { "text": " corporis " }, { "text": "suscipit" }, { "text": " " }, { "text": "laboriosam" }, { "text": ", nisi " }, { "text": "ut" }, { "text": " " }, { "text": "aliquid" }, { "text": " ex " }, { "text": "ea" }, { "text": " " }, { "text": "commodi" }, { "text": " " }, { "text": "consequatur" }, { "text": "? " }, { "text": "Quis" }, { "text": " " }, { "text": "autem" }, { "text": " " }, { "text": "vel" }, { "text": " " }, { "text": "eum" }, { "text": " " }, { "text": "iure" }, { "text": " " }, { "text": "reprehenderit" }, { "text": " qui in " }, { "text": "ea" }, { "text": " " }, { "text": "voluptate" }, { "text": " " }, { "text": "velit" }, { "text": " " }, { "text": "esse" }, { "text": " " }, { "text": "quam" }, { "text": " nihil " }, { "text": "molestiae" }, { "text": " " }, { "text": "consequatur" }, { "text": ", " }, { "text": "vel" }, { "text": " " }, { "text": "illum" }, { "text": " qui " }, { "text": "dolorem" }, { "text": " " }, { "text": "eum" }, { "text": " " }, { "text": "fugiat" }, { "text": " quo " }, { "text": "voluptas" }, { "text": " " }, { "text": "nulla" }, { "text": " " }, { "text": "pariatur" }, { "text": "?" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "At " }, { "text": "vero" }, { "text": " " }, { "text": "eos" }, { "text": " et " }, { "text": "accusamus" }, { "text": " et " }, { "text": "iusto" }, { "text": " " }, { "text": "odio" }, { "text": " " }, { "text": "dignissimos" }, { "text": " " }, { "text": "ducimus" }, { "text": " qui " }, { "text": "blanditiis" }, { "text": " " }, { "text": "praesentium" }, { "text": " " }, { "text": "voluptatum" }, { "text": " " }, { "text": "deleniti" }, { "text": " " }, { "text": "atque" }, { "text": " " }, { "text": "corrupti" }, { "text": " quos " }, { "text": "dolores" }, { "text": " et " }, { "text": "quas" }, { "text": " " }, { "text": "molestias" }, { "text": " " }, { "text": "excepturi" }, { "text": " " }, { "text": "sint" }, { "text": " " }, { "text": "occaecati" }, { "text": " " }, { "text": "cupiditate" }, { "text": " " }, { "text": "non provident" }, { "text": ", " }, { "text": "similique" }, { "text": " " }, { "text": "sunt" }, { "text": " in culpa qui " }, { "text": "officia" }, { "text": " " }, { "text": "deserunt" }, { "text": " " }, { "text": "mollitia" }, { "text": " animi, id " }, { "text": "est" }, { "text": " " }, { "text": "laborum" }, { "text": " et " }, { "text": "dolorum" }, { "text": " " }, { "text": "fuga" }, { "text": ". Et " }, { "text": "harum" }, { "text": " " }, { "text": "quidem" }, { "text": " rerum facilis " }, { "text": "est" }, { "text": " et " }, { "text": "expedita" }, { "text": " " }, { "text": "distinctio" }, { "text": ". Nam libero tempore, cum " }, { "text": "soluta" }, { "text": " nobis " }, { "text": "est" }, { "text": " " }, { "text": "eligendi" }, { "text": " " }, { "text": "optio" }, { "text": " " }, { "text": "cumque" }, { "text": " nihil " }, { "text": "impedit" }, { "text": " quo minus id quod " }, { "text": "maxime" }, { "text": " " }, { "text": "placeat" }, { "text": " " }, { "text": "facere" }, { "text": " " }, { "text": "possimus" }, { "text": ", " }, { "text": "omnis" }, { "text": " " }, { "text": "voluptas" }, { "text": " " }, { "text": "assumenda" }, { "text": " " }, { "text": "est" }, { "text": ", " }, { "text": "omnis" }, { "text": " dolor " }, { "text": "repellendus" }, { "text": ". " }, { "text": "Temporibus" }, { "text": " " }, { "text": "autem" }, { "text": " " }, { "text": "quibusdam" }, { "text": " et " }, { "text": "aut" }, { "text": " " }, { "text": "officiis" }, { "text": " " }, { "text": "debitis" }, { "text": " " }, { "text": "aut" }, { "text": " rerum " }, { "text": "necessitatibus" }, { "text": " " }, { "text": "saepe" }, { "text": " " }, { "text": "eveniet" }, { "text": " " }, { "text": "ut" }, { "text": " et " }, { "text": "voluptates" }, { "text": " " }, { "text": "repudiandae" }, { "text": " " }, { "text": "sint" }, { "text": " et " }, { "text": "molestiae" }, { "text": " non " }, { "text": "recusandae" }, { "text": ". " }, { "text": "Itaque" }, { "text": " " }, { "text": "earum" }, { "text": " rerum hic " }, { "text": "tenetur" }, { "text": " a " }, { "text": "sapiente" }, { "text": " " }, { "text": "delectus" }, { "text": ", " }, { "text": "ut" }, { "text": " " }, { "text": "aut" }, { "text": " " }, { "text": "reiciendis" }, { "text": " " }, { "text": "voluptatibus" }, { "text": " " }, { "text": "maiores" }, { "text": " alias " }, { "text": "consequatur" }, { "text": " " }, { "text": "aut" }, { "text": " " }, { "text": "perferendis" }, { "text": " " }, { "text": "doloribus" }, { "text": " " }, { "text": "asperiores" }, { "text": " " }, { "text": "repellat" }, { "text": "." }] }], "headersFooters": { "header": { "blocks": [{ "paragraphFormat": { "textAlignment": "Right", "styleName": "Header" }, "inlines": [{ "text": "Header distance from top is 72px" }] }] }, "footer": { "blocks": [{ "paragraphFormat": { "textAlignment": "Right", "styleName": "Footer", "tabs": [{ "tabJustification": "Left", "position": 0.0, "tabLeader": "None", "deletePosition": 234.0 }] }, "inlines": [{ "text": "Footer distance from bottom is 48px" }] }] } }, "sectionFormat": { "headerDistance": 54.0, "footerDistance": 36.0, "pageWidth": 595.29998779296875, "pageHeight": 841.9000244140625, "leftMargin": 54.0, "rightMargin": 54.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": false, "differentOddAndEvenPages": false } }, { "blocks": [{ "paragraphFormat": { "styleName": "Title" }, "inlines": [{ "text": "Second Section" }] }, { "paragraphFormat": { "styleName": "Subtitle" }, "inlines": [{ "text": "Size 1056x816px (Landscape)" }, { "name": "_GoBack", "bookmarkType": 0 }, { "name": "_GoBack", "bookmarkType": 1 }] }, { "paragraphFormat": { "styleName": "Subtitle" }, "inlines": [{ "text": "Margin 48px (on all sides)" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Lorem ipsum dolor sit " }, { "text": "amet" }, { "text": ", " }, { "text": "consectetur" }, { "text": " " }, { "text": "adipiscing" }, { "text": " " }, { "text": "elit" }, { "text": ", " }, { "text": "sed" }, { "text": " do " }, { "text": "eiusmod" }, { "text": " " }, { "text": "tempor" }, { "text": " " }, { "text": "incididunt" }, { "text": " " }, { "text": "ut" }, { "text": " " }, { "text": "labore" }, { "text": " et dolore magna " }, { "text": "aliqua" }, { "text": ". Ut " }, { "text": "enim" }, { "text": " ad minim " }, { "text": "veniam" }, { "text": ", " }, { "text": "quis" }, { "text": " " }, { "text": "nostrud" }, { "text": " exercitation " }, { "text": "ullamco" }, { "text": " " }, { "text": "laboris" }, { "text": " nisi " }, { "text": "ut" }, { "text": " " }, { "text": "aliquip" }, { "text": " ex " }, { "text": "ea" }, { "text": " " }, { "text": "commodo" }, { "text": " " }, { "text": "consequat" }, { "text": ". Duis " }, { "text": "aute" }, { "text": " " }, { "text": "irure" }, { "text": " dolor in " }, { "text": "reprehenderit" }, { "text": " in " }, { "text": "voluptate" }, { "text": " " }, { "text": "velit" }, { "text": " " }, { "text": "esse" }, { "text": " " }, { "text": "cillum" }, { "text": " dolore " }, { "text": "eu" }, { "text": " " }, { "text": "fugiat" }, { "text": " " }, { "text": "nulla" }, { "text": " " }, { "text": "pariatur" }, { "text": ". " }, { "text": "Excepteur" }, { "text": " " }, { "text": "sint" }, { "text": " " }, { "text": "occaecat" }, { "text": " " }, { "text": "cupidatat" }, { "text": " non " }, { "text": "proident" }, { "text": ", " }, { "text": "sunt" }, { "text": " in culpa qui " }, { "text": "officia" }, { "text": " " }, { "text": "deserunt" }, { "text": " " }, { "text": "mollit" }, { "text": " " }, { "text": "anim" }, { "text": " id " }, { "text": "est" }, { "text": " " }, { "text": "laborum" }, { "text": "." }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Sed" }, { "text": " " }, { "text": "ut" }, { "text": " " }, { "text": "perspiciatis" }, { "text": " " }, { "text": "unde" }, { "text": " " }, { "text": "omnis" }, { "text": " " }, { "text": "iste" }, { "text": " " }, { "text": "natus" }, { "text": " error sit " }, { "text": "voluptatem" }, { "text": " " }, { "text": "accusantium" }, { "text": " " }, { "text": "doloremque" }, { "text": " " }, { "text": "laudantium" }, { "text": ", " }, { "text": "totam" }, { "text": " rem " }, { "text": "aperiam" }, { "text": ", " }, { "text": "eaque" }, { "text": " " }, { "text": "ipsa" }, { "text": " " }, { "text": "quae" }, { "text": " ab " }, { "text": "illo" }, { "text": " " }, { "text": "inventore" }, { "text": " " }, { "text": "veritatis" }, { "text": " et quasi " }, { "text": "architecto" }, { "text": " " }, { "text": "beatae" }, { "text": " vitae dicta " }, { "text": "sunt" }, { "text": " " }, { "text": "explicabo" }, { "text": ". Nemo " }, { "text": "enim" }, { "text": " " }, { "text": "ipsam" }, { "text": " " }, { "text": "voluptatem" }, { "text": " " }, { "text": "quia" }, { "text": " " }, { "text": "voluptas" }, { "text": " sit " }, { "text": "aspernatur" }, { "text": " " }, { "text": "aut" }, { "text": " " }, { "text": "odit" }, { "text": " " }, { "text": "aut" }, { "text": " fugit, " }, { "text": "sed" }, { "text": " " }, { "text": "quia" }, { "text": " " }, { "text": "consequuntur" }, { "text": " " }, { "text": "magni" }, { "text": " " }, { "text": "dolores" }, { "text": " " }, { "text": "eos" }, { "text": " qui " }, { "text": "ratione" }, { "text": " " }, { "text": "voluptatem" }, { "text": " " }, { "text": "sequi" }, { "text": " " }, { "text": "nesciunt" }, { "text": ". " }, { "text": "Neque" }, { "text": " " }, { "text": "porro" }, { "text": " " }, { "text": "quisquam" }, { "text": " " }, { "text": "est" }, { "text": ", qui " }, { "text": "dolorem" }, { "text": " ipsum " }, { "text": "quia" }, { "text": " dolor sit " }, { "text": "amet" }, { "text": ", " }, { "text": "consectetur" }, { "text": ", " }, { "text": "adipisci" }, { "text": " " }, { "text": "velit" }, { "text": ", " }, { "text": "sed" }, { "text": " " }, { "text": "quia" }, { "text": " non " }, { "text": "numquam" }, { "text": " " }, { "text": "eius" }, { "text": " " }, { "text": "modi" }, { "text": " " }, { "text": "tempora" }, { "text": " " }, { "text": "incidunt" }, { "text": " " }, { "text": "ut" }, { "text": " " }, { "text": "labore" }, { "text": " et dolore " }, { "text": "magnam" }, { "text": " " }, { "text": "aliquam" }, { "text": " " }, { "text": "quaerat" }, { "text": " " }, { "text": "voluptatem" }, { "text": ". Ut " }, { "text": "enim" }, { "text": " ad minima " }, { "text": "veniam" }, { "text": ", " }, { "text": "quis" }, { "text": " nostrum " }, { "text": "exercitationem" }, { "text": " " }, { "text": "ullam" }, { "text": " corporis " }, { "text": "suscipit" }, { "text": " " }, { "text": "laboriosam" }, { "text": ", nisi " }, { "text": "ut" }, { "text": " " }, { "text": "aliquid" }, { "text": " ex " }, { "text": "ea" }, { "text": " " }, { "text": "commodi" }, { "text": " " }, { "text": "consequatur" }, { "text": "? " }, { "text": "Quis" }, { "text": " " }, { "text": "autem" }, { "text": " " }, { "text": "vel" }, { "text": " " }, { "text": "eum" }, { "text": " " }, { "text": "iure" }, { "text": " " }, { "text": "reprehenderit" }, { "text": " qui in " }, { "text": "ea" }, { "text": " " }, { "text": "voluptate" }, { "text": " " }, { "text": "velit" }, { "text": " " }, { "text": "esse" }, { "text": " " }, { "text": "quam" }, { "text": " nihil " }, { "text": "molestiae" }, { "text": " " }, { "text": "consequatur" }, { "text": ", " }, { "text": "vel" }, { "text": " " }, { "text": "illum" }, { "text": " qui " }, { "text": "dolorem" }, { "text": " " }, { "text": "eum" }, { "text": " " }, { "text": "fugiat" }, { "text": " quo " }, { "text": "voluptas" }, { "text": " " }, { "text": "nulla" }, { "text": " " }, { "text": "pariatur" }, { "text": "?" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "At " }, { "text": "vero" }, { "text": " " }, { "text": "eos" }, { "text": " et " }, { "text": "accusamus" }, { "text": " et " }, { "text": "iusto" }, { "text": " " }, { "text": "odio" }, { "text": " " }, { "text": "dignissimos" }, { "text": " " }, { "text": "ducimus" }, { "text": " qui " }, { "text": "blanditiis" }, { "text": " " }, { "text": "praesentium" }, { "text": " " }, { "text": "voluptatum" }, { "text": " " }, { "text": "deleniti" }, { "text": " " }, { "text": "atque" }, { "text": " " }, { "text": "corrupti" }, { "text": " quos " }, { "text": "dolores" }, { "text": " et " }, { "text": "quas" }, { "text": " " }, { "text": "molestias" }, { "text": " " }, { "text": "excepturi" }, { "text": " " }, { "text": "sint" }, { "text": " " }, { "text": "occaecati" }, { "text": " " }, { "text": "cupiditate" }, { "text": " " }, { "text": "non provident" }, { "text": ", " }, { "text": "similique" }, { "text": " " }, { "text": "sunt" }, { "text": " in culpa qui " }, { "text": "officia" }, { "text": " " }, { "text": "deserunt" }, { "text": " " }, { "text": "mollitia" }, { "text": " animi, id " }, { "text": "est" }, { "text": " " }, { "text": "laborum" }, { "text": " et " }, { "text": "dolorum" }, { "text": " " }, { "text": "fuga" }, { "text": ". Et " }, { "text": "harum" }, { "text": " " }, { "text": "quidem" }, { "text": " rerum facilis " }, { "text": "est" }, { "text": " et " }, { "text": "expedita" }, { "text": " " }, { "text": "distinctio" }, { "text": ". Nam libero tempore, cum " }, { "text": "soluta" }, { "text": " nobis " }, { "text": "est" }, { "text": " " }, { "text": "eligendi" }, { "text": " " }, { "text": "optio" }, { "text": " " }, { "text": "cumque" }, { "text": " nihil " }, { "text": "impedit" }, { "text": " quo minus id quod " }, { "text": "maxime" }, { "text": " " }, { "text": "placeat" }, { "text": " " }, { "text": "facere" }, { "text": " " }, { "text": "possimus" }, { "text": ", " }, { "text": "omnis" }, { "text": " " }, { "text": "voluptas" }, { "text": " " }, { "text": "assumenda" }, { "text": " " }, { "text": "est" }, { "text": ", " }, { "text": "omnis" }, { "text": " dolor " }, { "text": "repellendus" }, { "text": ". " }, { "text": "Temporibus" }, { "text": " " }, { "text": "autem" }, { "text": " " }, { "text": "quibusdam" }, { "text": " et " }, { "text": "aut" }, { "text": " " }, { "text": "officiis" }, { "text": " " }, { "text": "debitis" }, { "text": " " }, { "text": "aut" }, { "text": " rerum " }, { "text": "necessitatibus" }, { "text": " " }, { "text": "saepe" }, { "text": " " }, { "text": "eveniet" }, { "text": " " }, { "text": "ut" }, { "text": " et " }, { "text": "voluptates" }, { "text": " " }, { "text": "repudiandae" }, { "text": " " }, { "text": "sint" }, { "text": " et " }, { "text": "molestiae" }, { "text": " non " }, { "text": "recusandae" }, { "text": ". " }, { "text": "Itaque" }, { "text": " " }, { "text": "earum" }, { "text": " rerum hic " }, { "text": "tenetur" }, { "text": " a " }, { "text": "sapiente" }, { "text": " " }, { "text": "delectus" }, { "text": ", " }, { "text": "ut" }, { "text": " " }, { "text": "aut" }, { "text": " " }, { "text": "reiciendis" }, { "text": " " }, { "text": "voluptatibus" }, { "text": " " }, { "text": "maiores" }, { "text": " alias " }, { "text": "consequatur" }, { "text": " " }, { "text": "aut" }, { "text": " " }, { "text": "perferendis" }, { "text": " " }, { "text": "doloribus" }, { "text": " " }, { "text": "asperiores" }, { "text": " " }, { "text": "repellat" }, { "text": "." }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }], "headersFooters": { "header": { "blocks": [{ "paragraphFormat": { "textAlignment": "Right", "styleName": "Header" }, "inlines": [{ "text": "Header distance from top is 24px" }] }] }, "footer": { "blocks": [{ "paragraphFormat": { "textAlignment": "Right", "styleName": "Footer", "tabs": [{ "tabJustification": "Left", "position": 0.0, "tabLeader": "None", "deletePosition": 234.0 }] }, "inlines": [{ "text": "Footer distance from bottom is 24px" }] }] } }, "sectionFormat": { "headerDistance": 18.0, "footerDistance": 18.0, "pageWidth": 792.0, "pageHeight": 612.0, "leftMargin": 36.0, "rightMargin": 36.0, "topMargin": 36.0, "bottomMargin": 36.0, "differentFirstPage": false, "differentOddAndEvenPages": false } }], "characterFormat": { "fontSize": 11.0, "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple" }, "background": { "color": "#FFFFFFFF" }, "styles": [{ "type": "Paragraph", "name": "Normal", "next": "Normal" }, { "type": "Character", "name": "Default Paragraph Font" }, { "type": "Paragraph", "name": "Notes", "basedOn": "Normal", "next": "Normal", "characterFormat": { "bold": true }, "paragraphFormat": { "afterSpacing": 6.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple" } }, { "type": "Paragraph", "name": "Title", "basedOn": "Normal", "next": "Normal", "link": "Title Char", "characterFormat": { "fontSize": 28.0, "fontFamily": "Calibri Light" }, "paragraphFormat": { "afterSpacing": 0.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple" } }, { "type": "Character", "name": "Title Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontSize": 28.0, "fontFamily": "Calibri Light" } }, { "type": "Paragraph", "name": "Subtitle", "basedOn": "Normal", "next": "Normal", "link": "Subtitle Char", "characterFormat": { "fontColor": "#5A5A5AFF" }, "paragraphFormat": { "listFormat": { "listLevelNumber": 1 } } }, { "type": "Character", "name": "Subtitle Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontColor": "#5A5A5AFF" } }, { "type": "Paragraph", "name": "Header", "basedOn": "Normal", "next": "Normal", "link": "Header Char", "paragraphFormat": { "afterSpacing": 0.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple", "tabs": [{ "tabJustification": "Center", "position": 234.0, "tabLeader": "None", "deletePosition": 0.0 }, { "tabJustification": "Right", "position": 468.0, "tabLeader": "None", "deletePosition": 0.0 }] } }, { "type": "Character", "name": "Header Char", "basedOn": "Default Paragraph Font" }, { "type": "Paragraph", "name": "Footer", "basedOn": "Normal", "next": "Normal", "link": "Footer Char", "paragraphFormat": { "afterSpacing": 0.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple", "tabs": [{ "tabJustification": "Center", "position": 234.0, "tabLeader": "None", "deletePosition": 0.0 }, { "tabJustification": "Right", "position": 468.0, "tabLeader": "None", "deletePosition": 0.0 }] } }, { "type": "Character", "name": "Footer Char", "basedOn": "Default Paragraph Font" }] };

export let styles: Object = { "sections": [{ "blocks": [{ "paragraphFormat": { "styleName": "Title" }, "inlines": [{ "text": "Styles" }] }, { "paragraphFormat": { "styleName": "Subtitle" }, "inlines": [{ "text": "A" }, { "text": " style is a collection of formatting instructions" }, { "text": " " }, { "text": "to provide a consistent look of the document" }, { "text": "." }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "paragraphFormat": { "styleName": "Quote" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog" }, { "text": " [Quote]" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "name": "_GoBack", "bookmarkType": 0 }, { "name": "_GoBack", "bookmarkType": 1 }] }, { "paragraphFormat": { "styleName": "Heading 1" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog " }, { "text": "[" }, { "text": "Heading 1" }, { "text": "]" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "paragraphFormat": { "styleName": "Heading 2" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog " }, { "text": "[" }, { "text": "Heading 2" }, { "text": "]" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "paragraphFormat": { "styleName": "Heading 3" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog" }, { "text": " " }, { "text": "[" }, { "text": "Heading 3" }, { "text": "]" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "paragraphFormat": { "styleName": "Heading 4" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog " }, { "text": "[Heading 4" }, { "text": "]" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "paragraphFormat": { "styleName": "Heading 5" }, "inlines": [{ "text": "The quick brown fox jumps over the lazy dog " }, { "text": "[" }, { "text": "Heading 5" }, { "text": "]" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }], "headersFooters": {}, "sectionFormat": { "headerDistance": 36.0, "footerDistance": 36.0, "pageWidth": 612.0, "pageHeight": 792.0, "leftMargin": 72.0, "rightMargin": 72.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": false, "differentOddAndEvenPages": false } }], "characterFormat": { "fontSize": 11.0, "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple" }, "background": { "color": "#FFFFFFFF" }, "styles": [{ "type": "Paragraph", "name": "Normal", "next": "Normal" }, { "type": "Paragraph", "name": "Heading 1", "basedOn": "Normal", "next": "Normal", "link": "Heading 1 Char", "characterFormat": { "fontSize": 16.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" }, "paragraphFormat": { "beforeSpacing": 12.0, "afterSpacing": 0.0, "outlineLevel": "Level1" } }, { "type": "Paragraph", "name": "Heading 2", "basedOn": "Normal", "next": "Normal", "link": "Heading 2 Char", "characterFormat": { "fontSize": 13.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" }, "paragraphFormat": { "beforeSpacing": 2.0, "afterSpacing": 0.0, "outlineLevel": "Level2" } }, { "type": "Paragraph", "name": "Heading 3", "basedOn": "Normal", "next": "Normal", "link": "Heading 3 Char", "characterFormat": { "fontSize": 12.0, "fontFamily": "Calibri Light", "fontColor": "#1F3763FF" }, "paragraphFormat": { "beforeSpacing": 2.0, "afterSpacing": 0.0, "outlineLevel": "Level3" } }, { "type": "Paragraph", "name": "Heading 4", "basedOn": "Normal", "next": "Normal", "link": "Heading 4 Char", "characterFormat": { "italic": true, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" }, "paragraphFormat": { "beforeSpacing": 2.0, "afterSpacing": 0.0, "outlineLevel": "Level4" } }, { "type": "Paragraph", "name": "Heading 5", "basedOn": "Normal", "next": "Normal", "link": "Heading 5 Char", "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" }, "paragraphFormat": { "beforeSpacing": 2.0, "afterSpacing": 0.0, "outlineLevel": "Level5" } }, { "type": "Character", "name": "Default Paragraph Font" }, { "type": "Paragraph", "name": "Notes", "basedOn": "Normal", "next": "Normal", "characterFormat": { "bold": true }, "paragraphFormat": { "afterSpacing": 6.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple" } }, { "type": "Paragraph", "name": "Quote", "basedOn": "Normal", "next": "Normal", "link": "Quote Char", "characterFormat": { "italic": true, "fontColor": "#404040FF" }, "paragraphFormat": { "leftIndent": 43.200000762939453, "rightIndent": 43.200000762939453, "beforeSpacing": 10.0, "textAlignment": "Center" } }, { "type": "Character", "name": "Quote Char", "basedOn": "Default Paragraph Font", "characterFormat": { "italic": true, "fontColor": "#404040FF" } }, { "type": "Paragraph", "name": "Title", "basedOn": "Normal", "next": "Normal", "link": "Title Char", "characterFormat": { "fontSize": 28.0, "fontFamily": "Calibri Light" }, "paragraphFormat": { "afterSpacing": 0.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple" } }, { "type": "Character", "name": "Title Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontSize": 28.0, "fontFamily": "Calibri Light" } }, { "type": "Character", "name": "Heading 1 Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontSize": 16.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" } }, { "type": "Character", "name": "Heading 2 Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontSize": 13.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" } }, { "type": "Character", "name": "Heading 3 Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontSize": 12.0, "fontFamily": "Calibri Light", "fontColor": "#1F3763FF" } }, { "type": "Character", "name": "Heading 4 Char", "basedOn": "Default Paragraph Font", "characterFormat": { "italic": true, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" } }, { "type": "Character", "name": "Heading 5 Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" } }, { "type": "Paragraph", "name": "Intense Quote", "basedOn": "Normal", "next": "Normal", "link": "Intense Quote Char", "characterFormat": { "italic": true, "fontColor": "#4472C4FF" }, "paragraphFormat": { "leftIndent": 43.200000762939453, "rightIndent": 43.200000762939453, "beforeSpacing": 18.0, "afterSpacing": 18.0, "textAlignment": "Center" } }, { "type": "Character", "name": "Intense Quote Char", "basedOn": "Default Paragraph Font", "characterFormat": { "italic": true, "fontColor": "#4472C4FF" } }, { "type": "Paragraph", "name": "Subtitle", "basedOn": "Normal", "next": "Normal", "link": "Subtitle Char", "characterFormat": { "fontColor": "#5A5A5AFF" }, "paragraphFormat": { "listFormat": { "listLevelNumber": 1 } } }, { "type": "Character", "name": "Subtitle Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontColor": "#5A5A5AFF" } }] };

export let tableFormat: any = { "sections": [{ "blocks": [{ "rows": [{ "rowFormat": { "allowBreakAcrossPages": true, "isHeader": false, "height": 8.6000003814697266, "heightType": "AtLeast", "borders": { "left": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#000000FF" }, "right": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#000000FF" }, "top": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#000000FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#000000FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } }, "cells": [{ "blocks": [{ "characterFormat": { "bold": true }, "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal" }, "inlines": [{ "text": "Bill To:", "characterFormat": { "bold": true } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 4, "preferredWidth": 78.0, "preferredWidthType": "Point", "verticalAlignment": "Center", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone", "backgroundColor": "#FFFFFFFF" } } }, { "blocks": [{ "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Hanari" }, { "text": " Carnes" }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 78.0, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone", "backgroundColor": "#FFFFFFFF" } } }, { "blocks": [{ "characterFormat": { "bold": true }, "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal" }, "inlines": [{ "text": "Ship To:", "characterFormat": { "bold": true } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 4, "preferredWidth": 78.0, "preferredWidthType": "Point", "verticalAlignment": "Center", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone", "backgroundColor": "#FFFFFFFF" } } }, { "blocks": [{ "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Hanari" }, { "text": " Carnes" }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 95.75, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone", "backgroundColor": "#FFFFFFFF" } } }, { "blocks": [{ "paragraphFormat": { "rightIndent": 32.099998474121094, "textAlignment": "Center", "styleName": "Normal" }, "inlines": [{ "text": "Invoice No:", "characterFormat": { "bold": true } }, { "text": "10250" }] }, { "paragraphFormat": { "rightIndent": 32.099998474121094, "textAlignment": "Center", "styleName": "Normal" }, "inlines": [{ "text": "Date:", "characterFormat": { "bold": true } }, { "text": "7/12/1996" }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 4, "preferredWidth": 138.25, "preferredWidthType": "Point", "verticalAlignment": "Center", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone", "backgroundColor": "#FFFFFFFF" } } }] }, { "rowFormat": { "allowBreakAcrossPages": true, "isHeader": false, "height": 0.0, "heightType": "AtLeast", "borders": { "left": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#000000FF" }, "right": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#000000FF" }, "top": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#000000FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#000000FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } }, "cells": [{ "blocks": [{ "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Rua" }, { "text": " do " }, { "text": "Paço" }, { "text": ", 67" }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 78.0, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone", "backgroundColor": "#FFFFFFFF" } } }, { "blocks": [{ "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Rua" }, { "text": " do " }, { "text": "Paço" }, { "text": ", 67" }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 95.75, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone", "backgroundColor": "#FFFFFFFF" } } }] }, { "rowFormat": { "allowBreakAcrossPages": true, "isHeader": false, "height": 0.0, "heightType": "AtLeast", "borders": { "left": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#000000FF" }, "right": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#000000FF" }, "top": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#000000FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#000000FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } }, "cells": [{ "blocks": [{ "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Rio de Janeiro" }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 78.0, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone", "backgroundColor": "#FFFFFFFF" } } }, { "blocks": [{ "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Rio de Janeiro" }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 95.75, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone", "backgroundColor": "#FFFFFFFF" } } }] }, { "rowFormat": { "allowBreakAcrossPages": true, "isHeader": false, "height": 0.0, "heightType": "AtLeast", "borders": { "left": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#000000FF" }, "right": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#000000FF" }, "top": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#000000FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#000000FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } }, "cells": [{ "blocks": [{ "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Brazil" }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 78.0, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone", "backgroundColor": "#FFFFFFFF" } } }, { "blocks": [{ "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Brazil" }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 95.75, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone", "backgroundColor": "#FFFFFFFF" } } }] }], "title": null, "description": null, "tableFormat": { "allowAutoFit": true, "leftMargin": 0.5, "rightMargin": 0.5, "leftIndent": 0.0, "tableAlignment": "Left", "preferredWidth": 468.0, "preferredWidthType": "Point", "borders": { "left": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#000000FF" }, "right": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#000000FF" }, "top": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#000000FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#000000FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone", "backgroundColor": "#FFFFFFFF" } } }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "rows": [{ "rowFormat": { "allowBreakAcrossPages": true, "isHeader": false, "height": 19.5, "heightType": "Exactly", "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } }, "cells": [{ "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal" }, "inlines": [{ "text": "Ship Name", "characterFormat": { "bold": true, "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#FFFFFFFF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 109.69999694824219, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone", "backgroundColor": "#4B88BAFF" } } }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal" }, "inlines": [{ "text": "Ship Address", "characterFormat": { "bold": true, "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#FFFFFFFF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 86.6500015258789, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone", "backgroundColor": "#4B88BAFF" } } }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal" }, "inlines": [{ "text": "Freight", "characterFormat": { "bold": true, "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#FFFFFFFF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 50.349998474121094, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone", "backgroundColor": "#4B88BAFF" } } }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal" }, "inlines": [{ "text": "Shipped Date", "characterFormat": { "bold": true, "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#FFFFFFFF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 76.8499984741211, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone", "backgroundColor": "#4B88BAFF" } } }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal" }, "inlines": [{ "text": "Ship City", "characterFormat": { "bold": true, "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#FFFFFFFF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 56.549999237060547, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone", "backgroundColor": "#4B88BAFF" } } }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal" }, "inlines": [{ "text": "Ship Country", "characterFormat": { "bold": true, "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#FFFFFFFF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 86.5999984741211, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone", "backgroundColor": "#4B88BAFF" } } }] }, { "rowFormat": { "allowBreakAcrossPages": true, "isHeader": false, "height": 32.25, "heightType": "Exactly", "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } }, "cells": [{ "blocks": [{ "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Hanari", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }, { "text": " Carnes", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 109.69999694824219, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone" } } }, { "blocks": [{ "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Rua", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }, { "text": " do ", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }, { "text": "Paço", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }, { "text": ", 67", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 86.6500015258789, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone" } } }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Right", "styleName": "Normal" }, "inlines": [{ "text": "$65.83", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 50.349998474121094, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone" } } }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal" }, "inlines": [{ "text": "7/12/1996", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 76.8499984741211, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone" } } }, { "blocks": [{ "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Rio de Janeiro", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 56.549999237060547, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone" } } }, { "blocks": [{ "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Brazil", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 86.5999984741211, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone" } } }] }], "title": null, "description": null, "tableFormat": { "allowAutoFit": false, "leftMargin": 5.0, "rightMargin": 5.0, "leftIndent": 0.0, "tableAlignment": "Left", "preferredWidthType": "Auto", "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } } }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "rows": [{ "rowFormat": { "allowBreakAcrossPages": true, "isHeader": false, "height": 19.5, "heightType": "Exactly", "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } }, "cells": [{ "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal" }, "inlines": [{ "text": "ID", "characterFormat": { "bold": true, "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#FFFFFFFF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 8.880000114440918, "preferredWidthType": "Percent", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone", "backgroundColor": "#4B88BAFF" } } }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal" }, "inlines": [{ "text": "Product Name", "characterFormat": { "bold": true, "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#FFFFFFFF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 38.540000915527344, "preferredWidthType": "Percent", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone", "backgroundColor": "#4B88BAFF" } } }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal" }, "inlines": [{ "text": "Quantity", "characterFormat": { "bold": true, "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#FFFFFFFF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 12.859999656677246, "preferredWidthType": "Percent", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone", "backgroundColor": "#4B88BAFF" } } }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal" }, "inlines": [{ "text": "Unit Price", "characterFormat": { "bold": true, "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#FFFFFFFF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 12.859999656677246, "preferredWidthType": "Percent", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone", "backgroundColor": "#4B88BAFF" } } }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal" }, "inlines": [{ "text": "Discount", "characterFormat": { "bold": true, "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#FFFFFFFF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 12.859999656677246, "preferredWidthType": "Percent", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone", "backgroundColor": "#4B88BAFF" } } }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal" }, "inlines": [{ "text": "Price", "characterFormat": { "bold": true, "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#FFFFFFFF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 14.0, "preferredWidthType": "Percent", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone", "backgroundColor": "#4B88BAFF" } } }] }, { "rowFormat": { "allowBreakAcrossPages": true, "isHeader": false, "height": 19.5, "heightType": "Exactly", "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } }, "cells": [{ "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal" }, "inlines": [{ "text": "41", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 8.880000114440918, "preferredWidthType": "Percent", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone" } } }, { "blocks": [{ "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Jack's New England Clam Chowder", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 38.540000915527344, "preferredWidthType": "Percent", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone" } } }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Right", "styleName": "Normal" }, "inlines": [{ "text": "10", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 12.859999656677246, "preferredWidthType": "Percent", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone" } } }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Right", "styleName": "Normal" }, "inlines": [{ "text": "$7.70", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 12.859999656677246, "preferredWidthType": "Percent", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone" } } }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Right", "styleName": "Normal" }, "inlines": [{ "text": "0.00%", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 12.859999656677246, "preferredWidthType": "Percent", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone" } } }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Right", "styleName": "Normal" }, "inlines": [{ "text": "$77.00", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 14.0, "preferredWidthType": "Percent", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone" } } }] }, { "rowFormat": { "allowBreakAcrossPages": true, "isHeader": false, "height": 19.5, "heightType": "Exactly", "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } }, "cells": [{ "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal" }, "inlines": [{ "text": "51", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 8.880000114440918, "preferredWidthType": "Percent", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone" } } }, { "blocks": [{ "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Manjimup", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }, { "text": " Dried Apples", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 38.540000915527344, "preferredWidthType": "Percent", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone" } } }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Right", "styleName": "Normal" }, "inlines": [{ "text": "35", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 12.859999656677246, "preferredWidthType": "Percent", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone" } } }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Right", "styleName": "Normal" }, "inlines": [{ "text": "$42.40", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 12.859999656677246, "preferredWidthType": "Percent", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone" } } }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Right", "styleName": "Normal" }, "inlines": [{ "text": "15.00%", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 12.859999656677246, "preferredWidthType": "Percent", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone" } } }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Right", "styleName": "Normal" }, "inlines": [{ "name": "_GoBack", "bookmarkType": 0 }, { "name": "_GoBack", "bookmarkType": 1 }, { "text": "$1,484.00", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 14.0, "preferredWidthType": "Percent", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone" } } }] }, { "rowFormat": { "allowBreakAcrossPages": true, "isHeader": false, "height": 19.5, "heightType": "Exactly", "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } }, "cells": [{ "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal" }, "inlines": [{ "text": "65", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 8.880000114440918, "preferredWidthType": "Percent", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone" } } }, { "blocks": [{ "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Louisiana Fiery Hot Pepper Sauce", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 38.540000915527344, "preferredWidthType": "Percent", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone" } } }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Right", "styleName": "Normal" }, "inlines": [{ "text": "15", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 12.859999656677246, "preferredWidthType": "Percent", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone" } } }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Right", "styleName": "Normal" }, "inlines": [{ "text": "$16.80", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 12.859999656677246, "preferredWidthType": "Percent", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone" } } }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Right", "styleName": "Normal" }, "inlines": [{ "text": "15.00%", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 12.859999656677246, "preferredWidthType": "Percent", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone" } } }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Right", "styleName": "Normal" }, "inlines": [{ "text": "$252.00", "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 14.0, "preferredWidthType": "Percent", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone" } } }] }, { "rowFormat": { "allowBreakAcrossPages": true, "isHeader": false, "height": 19.5, "heightType": "Exactly", "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } }, "cells": [{ "blocks": [{ "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" }, "paragraphFormat": { "textAlignment": "Right", "styleName": "Normal" }, "inlines": [{ "text": "Total", "characterFormat": { "bold": true, "fontSize": 10.0, "fontFamily": "Arial", "fontColor": "#000000FF" } }] }], "cellFormat": { "columnSpan": 5, "rowSpan": 1, "preferredWidth": 86.0, "preferredWidthType": "Percent", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone" } } }, { "blocks": [{ "characterFormat": { "fontSize": 10.0, "fontFamily": "Segoe UI", "fontColor": "#000000FF" }, "paragraphFormat": { "textAlignment": "Right", "styleName": "Normal" }, "inlines": [{ "text": "$1,813.00", "characterFormat": { "fontSize": 10.0, "fontFamily": "Arial", "fontColor": "#000000FF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 14.0, "preferredWidthType": "Percent", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "right": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "top": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "bottom": { "lineStyle": "Single", "lineWidth": 1.25, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#D3D3D3FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } }, "shading": { "texture": "TextureNone" } } }] }], "title": null, "description": null, "tableFormat": { "allowAutoFit": true, "leftMargin": 5.0, "rightMargin": 5.0, "leftIndent": 0.0, "tableAlignment": "Left", "preferredWidth": 100.0, "preferredWidthType": "Percent", "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } } }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }], "headersFooters": { "header": { "blocks": [{ "rows": [{ "rowFormat": { "allowBreakAcrossPages": true, "isHeader": false, "height": 0.0, "heightType": "AtLeast", "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } }, "cells": [{ "blocks": [{ "paragraphFormat": { "styleName": "Header" }, "inlines": [{ "text": "Northwind Traders", "characterFormat": { "bold": true, "fontSize": 18.0, "fontFamily": "Segoe UI", "fontColor": "#4B88BAFF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 233.75, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#A5A5A5FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } } }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Right", "styleName": "Header" }, "inlines": [{ "text": "Invoice", "characterFormat": { "bold": true, "fontSize": 18.0, "fontFamily": "Segoe UI", "fontColor": "#4B88BAFF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 233.75, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#A5A5A5FF" }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } } }] }, { "rowFormat": { "allowBreakAcrossPages": true, "isHeader": false, "height": 0.0, "heightType": "AtLeast", "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } }, "cells": [{ "blocks": [{ "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 233.75, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#A5A5A5FF" }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } } }, { "blocks": [{ "characterFormat": { "bold": true }, "paragraphFormat": { "beforeSpacing": 6.0, "textAlignment": "Right", "styleName": "Normal" }, "inlines": [{ "text": "July 1996", "characterFormat": { "fontFamily": "Segoe UI", "fontColor": "#4B88BAFF" } }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 233.75, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false, "color": "#A5A5A5FF" }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } } }] }], "title": null, "description": null, "tableFormat": { "allowAutoFit": true, "leftIndent": 0.0, "tableAlignment": "Left", "preferredWidthType": "Auto", "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": true }, "horizontal": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } } }, { "paragraphFormat": { "styleName": "Header" }, "inlines": [] }] } }, "sectionFormat": { "headerDistance": 36.0, "footerDistance": 36.0, "pageWidth": 612.0, "pageHeight": 792.0, "leftMargin": 72.0, "rightMargin": 72.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": false, "differentOddAndEvenPages": false } }], "characterFormat": { "fontSize": 11.0, "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple" }, "background": { "color": "#FFFFFFFF" }, "styles": [{ "type": "Paragraph", "name": "Normal", "next": "Normal" }, { "type": "Character", "name": "Default Paragraph Font" }, { "type": "Paragraph", "name": "Notes", "basedOn": "Normal", "next": "Normal", "characterFormat": { "bold": true }, "paragraphFormat": { "afterSpacing": 6.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple" } }, { "type": "Paragraph", "name": "Header", "basedOn": "Normal", "next": "Normal", "link": "Header Char", "paragraphFormat": { "afterSpacing": 0.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple", "tabs": [{ "tabJustification": "Center", "position": 234.0, "tabLeader": "None", "deletePosition": 0.0 }, { "tabJustification": "Right", "position": 468.0, "tabLeader": "None", "deletePosition": 0.0 }] } }, { "type": "Character", "name": "Header Char", "basedOn": "Default Paragraph Font" }, { "type": "Paragraph", "name": "Footer", "basedOn": "Normal", "link": "Footer Char", "paragraphFormat": { "afterSpacing": 0.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple", "tabs": [{ "tabJustification": "Center", "position": 234.0, "tabLeader": "None", "deletePosition": 0.0 }, { "tabJustification": "Right", "position": 468.0, "tabLeader": "None", "deletePosition": 0.0 }] } }, { "type": "Character", "name": "Footer Char", "basedOn": "Default Paragraph Font" }] };

export let toc: Object = { "sections": [{ "blocks": [{ "paragraphFormat": { "styleName": "Title" }, "inlines": [{ "text": "ASP.NET Core Succinctly" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "characterFormat": { "fontSize": 16.0, "fontColor": "#4472C4FF" }, "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Table of Contents", "characterFormat": { "fontSize": 16.0, "fontColor": "#4472C4FF" } }] }, { "paragraphFormat": { "styleName": "TOC 1", "tabs": [{ "tabJustification": "Right", "position": 467.5, "tabLeader": "Dot", "deletePosition": 0.0 }] }, "inlines": [{ "hasFieldEnd": true, "fieldType": 0 }, { "text": " TOC \\o \"1-3\" \\h \\z " }, { "fieldType": 2 }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": "HYPERLINK \\l \"_Toc523388455\"" }, { "fieldType": 2 }, { "text": "Chapter 1 Introduction to ASP.NET Core", "characterFormat": {} }, { "text": "\t" }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": " PAGEREF _Toc523388455 \\h " }, { "fieldType": 2 }, { "text": "1" }, { "fieldType": 1 }, { "fieldType": 1 }] }, { "paragraphFormat": { "styleName": "TOC 1", "tabs": [{ "tabJustification": "Right", "position": 467.5, "tabLeader": "Dot", "deletePosition": 0.0 }] }, "inlines": [{ "hasFieldEnd": true, "fieldType": 0 }, { "text": "HYPERLINK \\l \"_Toc523388456\"" }, { "fieldType": 2 }, { "text": "Chapter 2 What are .NET Core and ASP.NET Core?", "characterFormat": {} }, { "text": "\t" }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": " PAGEREF _Toc523388456 \\h " }, { "fieldType": 2 }, { "text": "1" }, { "fieldType": 1 }, { "fieldType": 1 }] }, { "paragraphFormat": { "styleName": "TOC 2", "tabs": [{ "tabJustification": "Right", "position": 467.5, "tabLeader": "Dot", "deletePosition": 0.0 }] }, "inlines": [{ "hasFieldEnd": true, "fieldType": 0 }, { "text": "HYPERLINK \\l \"_Toc523388457\"" }, { "fieldType": 2 }, { "text": ".NET Core", "characterFormat": {} }, { "text": "\t" }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": " PAGEREF _Toc523388457 \\h " }, { "fieldType": 2 }, { "text": "1" }, { "fieldType": 1 }, { "fieldType": 1 }] }, { "paragraphFormat": { "styleName": "TOC 2", "tabs": [{ "tabJustification": "Right", "position": 467.5, "tabLeader": "Dot", "deletePosition": 0.0 }] }, "inlines": [{ "hasFieldEnd": true, "fieldType": 0 }, { "text": "HYPERLINK \\l \"_Toc523388458\"" }, { "fieldType": 2 }, { "text": "ASP.NET Core", "characterFormat": {} }, { "text": "\t" }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": " PAGEREF _Toc523388458 \\h " }, { "fieldType": 2 }, { "text": "1" }, { "fieldType": 1 }, { "fieldType": 1 }] }, { "paragraphFormat": { "styleName": "TOC 1", "tabs": [{ "tabJustification": "Right", "position": 467.5, "tabLeader": "Dot", "deletePosition": 0.0 }] }, "inlines": [{ "hasFieldEnd": true, "fieldType": 0 }, { "text": "HYPERLINK \\l \"_Toc523388459\"" }, { "fieldType": 2 }, { "text": "Chapter 3 Getting Started with .NET Core", "characterFormat": {} }, { "text": "\t" }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": " PAGEREF _Toc523388459 \\h " }, { "fieldType": 2 }, { "text": "2" }, { "fieldType": 1 }, { "fieldType": 1 }] }, { "paragraphFormat": { "styleName": "TOC 2", "tabs": [{ "tabJustification": "Right", "position": 467.5, "tabLeader": "Dot", "deletePosition": 0.0 }] }, "inlines": [{ "hasFieldEnd": true, "fieldType": 0 }, { "text": "HYPERLINK \\l \"_Toc523388460\"" }, { "fieldType": 2 }, { "text": "Installing .NET Core on Windows", "characterFormat": {} }, { "text": "\t" }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": " PAGEREF _Toc523388460 \\h " }, { "fieldType": 2 }, { "text": "2" }, { "fieldType": 1 }, { "fieldType": 1 }] }, { "paragraphFormat": { "styleName": "TOC 2", "tabs": [{ "tabJustification": "Right", "position": 467.5, "tabLeader": "Dot", "deletePosition": 0.0 }] }, "inlines": [{ "hasFieldEnd": true, "fieldType": 0 }, { "text": "HYPERLINK \\l \"_Toc523388461\"" }, { "fieldType": 2 }, { "text": "Installing .NET Core on a Mac (or Linux)", "characterFormat": {} }, { "text": "\t" }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": " PAGEREF _Toc523388461 \\h " }, { "fieldType": 2 }, { "text": "2" }, { "fieldType": 1 }, { "fieldType": 1 }] }, { "paragraphFormat": { "styleName": "TOC 1", "tabs": [{ "tabJustification": "Right", "position": 467.5, "tabLeader": "Dot", "deletePosition": 0.0 }] }, "inlines": [{ "hasFieldEnd": true, "fieldType": 0 }, { "text": "HYPERLINK \\l \"_Toc523388462\"" }, { "fieldType": 2 }, { "text": "A Look at the Future", "characterFormat": {} }, { "text": "\t" }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": " PAGEREF _Toc523388462 \\h " }, { "fieldType": 2 }, { "text": "2" }, { "fieldType": 1 }, { "fieldType": 1 }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "fieldType": 1 }, { "name": "_GoBack", "bookmarkType": 0 }, { "name": "_GoBack", "bookmarkType": 1 }] }, { "paragraphFormat": { "styleName": "Heading 1" }, "inlines": [{ "name": "_Toc523387945", "bookmarkType": 0 }, { "name": "_Toc523388455", "bookmarkType": 0 }, { "text": "Chapter 1 Introduction to ASP.NET Core" }, { "name": "_Toc523387945", "bookmarkType": 1 }, { "name": "_Toc523388455", "bookmarkType": 1 }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "ASP.NET Core is the web development framework that comes together with the new .NET Core and, besides all the new features, also adopts a significantly new approach to web development. The first chapter starts by going through the history of Microsoft's web stack to show the motivations that led to this framework. Later, it moves to more practical matters, like showing you how to get started with .NET Core and describing the foundations of the framework." }] }, { "paragraphFormat": { "styleName": "Heading 1" }, "inlines": [{ "name": "_Toc523387946", "bookmarkType": 0 }, { "name": "_Toc523388456", "bookmarkType": 0 }, { "text": "Chapter 2 What are .NET Core and ASP.NET Core?" }, { "name": "_Toc523387946", "bookmarkType": 1 }, { "name": "_Toc523388456", "bookmarkType": 1 }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Before trying to understand the reason for its existence, let's first try to define what .NET Core and ASP.NET Core are." }] }, { "paragraphFormat": { "styleName": "Heading 2" }, "inlines": [{ "name": "_Toc523387947", "bookmarkType": 0 }, { "name": "_Toc523388457", "bookmarkType": 0 }, { "text": ".NET Core" }, { "name": "_Toc523387947", "bookmarkType": 1 }, { "name": "_Toc523388457", "bookmarkType": 1 }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "The framework .NET Core 1.1 a is modular, cross-platform, cloud-optimized version of the .NET Framework, consisting of the CoreCLR and the implementation of the .NET Standard Library 1.6. One of the main features of this library is the ability to install only the features that are needed for the application you are building, reducing its footprint and the possibility of installing the library itself within the application. This makes it possible for applications built with different versions to co-exist on the same machine without the compatibility problems typical of the full .NET Framework." }] }, { "paragraphFormat": { "styleName": "Heading 2" }, "inlines": [{ "name": "_Toc523387948", "bookmarkType": 0 }, { "name": "_Toc523388458", "bookmarkType": 0 }, { "text": "ASP.NET Core" }, { "name": "_Toc523387948", "bookmarkType": 1 }, { "name": "_Toc523388458", "bookmarkType": 1 }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "ASP.NET Core is a complete rewrite of ASP.NET, built with the goal of being cross-platform, completely open-source, and without the limitations of backward compatibility. Like .NET Core, ASP.NET Core is also built with a modular approach. This means the application you build can include only the needed features without taking on additional burdens. This is made possible by the new startup and execution environment, based on the Open Web Interface for .NET (OWIN) standard. In addition, ASP.NET Core comes with many interesting features that we are going to see throughout the book, like an integrated " }, { "text": "dependency injection system and a new application framework that unifies the programming models of ASP.NET MVC and Web API." }] }, { "paragraphFormat": { "styleName": "Heading 1" }, "inlines": [{ "name": "_Toc523387949", "bookmarkType": 0 }, { "name": "_Toc523388459", "bookmarkType": 0 }, { "text": "Chapter 3 " }, { "text": "Getting Started with .NET Core" }, { "name": "_Toc523387949", "bookmarkType": 1 }, { "name": "_Toc523388459", "bookmarkType": 1 }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Now that it is clear what ASP.NET Core and .NET Core are, and why they were created, it's time to look at how to install them and how to build a simple application with them." }] }, { "paragraphFormat": { "styleName": "Heading 2" }, "inlines": [{ "name": "_Toc523387950", "bookmarkType": 0 }, { "name": "_Toc523388460", "bookmarkType": 0 }, { "text": "Installing .NET Core on Windows" }, { "name": "_Toc523387950", "bookmarkType": 1 }, { "name": "_Toc523388460", "bookmarkType": 1 }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Installing on Windows is pretty easy. With Visual Studio 2017, chances are you already installed it. If not, go back to the Visual Studio Installer and make sure you have the .NET Core workload selected." }] }, { "paragraphFormat": { "styleName": "Heading 2" }, "inlines": [{ "name": "_Toc523387951", "bookmarkType": 0 }, { "name": "_Toc523388461", "bookmarkType": 0 }, { "text": "Installing .NET Core on a Mac (or Linux)" }, { "name": "_Toc523387951", "bookmarkType": 1 }, { "name": "_Toc523388461", "bookmarkType": 1 }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "The beauty of .NET Core is that it can also be installed on a Mac (or Linux, for that matter) without relying on third-party frameworks, as was needed before with Mono." }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Each distribution of Linux has its own individual way of installing, but in the end, the process boils down to the same principles:" }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 0, "listId": 0 } }, "inlines": [{ "text": "Install prerequisites and configure the package manager of your distribution." }] }, { "paragraphFormat": { "styleName": "List Paragraph", "listFormat": { "listLevelNumber": 0, "listId": 0 } }, "inlines": [{ "text": "Invoke the package manager to download and install .NET Core and its tools." }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "You can read instructions specific to your distribution on the official .NET Core website. As an example, we’ll show you how to install on a Mac." }] }, { "characterFormat": { "italic": true }, "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal" }, "inlines": [{ "text": "Code Listing 3-1", "characterFormat": { "italic": true } }] }, { "rows": [{ "rowFormat": { "allowBreakAcrossPages": true, "isHeader": false, "height": 0.0, "heightType": "AtLeast", "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } }, "cells": [{ "blocks": [{ "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": ">brew update" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": ">brew install openssl" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": ">ln -s /usr/local/opt/openssl/lib/libcrypto.1.0.0.dylib /usr/local/lib/" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": ">ln -s /usr/local/opt/openssl/lib/libssl.1.0.0.dylib /usr/local/lib/" }] }], "cellFormat": { "columnSpan": 1, "rowSpan": 1, "preferredWidth": 467.5, "preferredWidthType": "Point", "verticalAlignment": "Top", "isSamePaddingAsTable": true, "borders": { "left": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } } }] }], "title": null, "description": null, "tableFormat": { "allowAutoFit": true, "leftIndent": 0.0, "tableAlignment": "Left", "preferredWidthType": "Auto", "borders": { "left": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "right": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "top": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "bottom": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "vertical": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "horizontal": { "lineStyle": "Single", "lineWidth": 0.5, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalDown": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false }, "diagonalUp": { "lineStyle": "None", "lineWidth": 0.0, "shadow": false, "space": 0.0, "hasNoneStyle": false } } } }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "Once all these prerequisites have been installed, you can download and install the official SDK for macOS by downloading it from the " }, { "hasFieldEnd": true, "fieldType": 0 }, { "text": "HYPERLINK \"https://www.microsoft.com/net/core\" " }, { "fieldType": 2 }, { "text": "official .NET Core website", "characterFormat": { "styleName": "Hyperlink" } }, { "fieldType": 1 }, { "text": "." }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "On Linux and Mac, you do not have Visual Studio to develop apps, but you can use the .NET Core SDK or Visual Studio Code, which is a lightweight, extensible, cross-platform text editor built by Microsoft and the community. The last chapter of this book covers in detail each of the tools with which you can build .NET Core apps." }] }, { "paragraphFormat": { "styleName": "Heading 1" }, "inlines": [{ "name": "_Toc523387952", "bookmarkType": 0 }, { "name": "_Toc523388462", "bookmarkType": 0 }, { "text": "A Look at the Future" }, { "name": "_Toc523387952", "bookmarkType": 1 }, { "name": "_Toc523388462", "bookmarkType": 1 }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "The release of .NET Core has been a very difficult one, with many delays and changes in direction. While the framework is stable, with .NET Core 1.1 released in November 2016, the tooling is still in development." }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "When we wrote this book, we relied on previews that were made available at the Connect(); event of November 2016, so some of the screenshots or procedures in the examples might be different from what is currently available." }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "What can we expect for the future of .NET Core?" }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "First, unlike previous frameworks, we have to expect a continuous release of enhanced tools, both for the CLI and for the tooling inside Visual Studio. Second, on the framework side, there will be the second big release of .NET Core 2.0, implementing .NET Standard 2.0." }] }, { "paragraphFormat": { "styleName": "Normal" }, "inlines": [{ "text": "But rest assured that Microsoft sees .NET Core as the future of .NET for the next 10 years, so this is the right time to jump in and start learning this new technology." }] }], "headersFooters": {}, "sectionFormat": { "headerDistance": 36.0, "footerDistance": 36.0, "pageWidth": 612.0, "pageHeight": 792.0, "leftMargin": 72.0, "rightMargin": 72.0, "topMargin": 72.0, "bottomMargin": 72.0, "differentFirstPage": false, "differentOddAndEvenPages": false } }], "characterFormat": { "fontSize": 11.0, "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 8.0, "lineSpacing": 1.0791666507720947, "lineSpacingType": "Multiple" }, "lists": [{ "listId": 0, "abstractListId": 0 }], "abstractLists": [{ "abstractListId": 0, "levels": [{ "listLevelPattern": "Bullet", "followCharacter": "Tab", "numberFormat": "", "characterFormat": { "fontFamily": "Symbol" }, "paragraphFormat": { "leftIndent": 36.0, "firstLineIndent": -18.0 } }, { "listLevelPattern": "Bullet", "followCharacter": "Tab", "numberFormat": "o", "characterFormat": { "fontFamily": "Courier New" }, "paragraphFormat": { "leftIndent": 72.0, "firstLineIndent": -18.0 } }, { "listLevelPattern": "Bullet", "followCharacter": "Tab", "numberFormat": "", "characterFormat": { "fontFamily": "Wingdings" }, "paragraphFormat": { "leftIndent": 108.0, "firstLineIndent": -18.0 } }, { "listLevelPattern": "Bullet", "followCharacter": "Tab", "numberFormat": "", "characterFormat": { "fontFamily": "Symbol" }, "paragraphFormat": { "leftIndent": 144.0, "firstLineIndent": -18.0 } }, { "listLevelPattern": "Bullet", "followCharacter": "Tab", "numberFormat": "o", "characterFormat": { "fontFamily": "Courier New" }, "paragraphFormat": { "leftIndent": 180.0, "firstLineIndent": -18.0 } }, { "listLevelPattern": "Bullet", "followCharacter": "Tab", "numberFormat": "", "characterFormat": { "fontFamily": "Wingdings" }, "paragraphFormat": { "leftIndent": 216.0, "firstLineIndent": -18.0 } }, { "listLevelPattern": "Bullet", "followCharacter": "Tab", "numberFormat": "", "characterFormat": { "fontFamily": "Symbol" }, "paragraphFormat": { "leftIndent": 252.0, "firstLineIndent": -18.0 } }, { "listLevelPattern": "Bullet", "followCharacter": "Tab", "numberFormat": "o", "characterFormat": { "fontFamily": "Courier New" }, "paragraphFormat": { "leftIndent": 288.0, "firstLineIndent": -18.0 } }, { "listLevelPattern": "Bullet", "followCharacter": "Tab", "numberFormat": "", "characterFormat": { "fontFamily": "Wingdings" }, "paragraphFormat": { "leftIndent": 324.0, "firstLineIndent": -18.0 } }] }], "background": { "color": "#FFFFFFFF" }, "styles": [{ "type": "Paragraph", "name": "Normal", "next": "Normal" }, { "type": "Paragraph", "name": "Heading 1", "basedOn": "Normal", "next": "Normal", "link": "Heading 1 Char", "characterFormat": { "fontSize": 16.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" }, "paragraphFormat": { "beforeSpacing": 12.0, "afterSpacing": 0.0, "outlineLevel": "Level1" } }, { "type": "Paragraph", "name": "Heading 2", "basedOn": "Normal", "next": "Normal", "link": "Heading 2 Char", "characterFormat": { "fontSize": 13.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" }, "paragraphFormat": { "beforeSpacing": 2.0, "afterSpacing": 0.0, "outlineLevel": "Level2" } }, { "type": "Character", "name": "Default Paragraph Font" }, { "type": "Paragraph", "name": "Notes", "basedOn": "Normal", "next": "Normal", "characterFormat": { "bold": true }, "paragraphFormat": { "afterSpacing": 6.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple" } }, { "type": "Character", "name": "Heading 1 Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontSize": 16.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" } }, { "type": "Character", "name": "Heading 2 Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontSize": 13.0, "fontFamily": "Calibri Light", "fontColor": "#2F5496FF" } }, { "type": "Paragraph", "name": "List Paragraph", "basedOn": "Normal", "next": "List Paragraph", "paragraphFormat": { "leftIndent": 36.0 } }, { "type": "Character", "name": "Hyperlink", "basedOn": "Default Paragraph Font", "characterFormat": { "underline": "Single", "fontColor": "#0563C1FF" } }, { "type": "Character", "name": "Unresolved Mention", "basedOn": "Default Paragraph Font", "characterFormat": { "fontColor": "#808080FF" } }, { "type": "Paragraph", "name": "Title", "basedOn": "Normal", "next": "Normal", "link": "Title Char", "characterFormat": { "fontSize": 28.0, "fontFamily": "Calibri Light" }, "paragraphFormat": { "afterSpacing": 0.0, "lineSpacing": 1.0, "lineSpacingType": "Multiple" } }, { "type": "Character", "name": "Title Char", "basedOn": "Default Paragraph Font", "characterFormat": { "fontSize": 28.0, "fontFamily": "Calibri Light" } }, { "type": "Paragraph", "name": "TOC Heading", "basedOn": "Heading 1", "next": "Normal", "paragraphFormat": { "outlineLevel": "BodyText" } }, { "type": "Paragraph", "name": "TOC 1", "basedOn": "Normal", "next": "Normal", "paragraphFormat": { "afterSpacing": 5.0 } }, { "type": "Paragraph", "name": "TOC 2", "basedOn": "Normal", "next": "Normal", "paragraphFormat": { "leftIndent": 11.0, "afterSpacing": 5.0 } }] };

export let rtlDocument:object={"sections":[{"sectionFormat":{"pageWidth":612,"pageHeight":792,"leftMargin":72,"rightMargin":72,"topMargin":72,"bottomMargin":72,"differentFirstPage":false,"differentOddAndEvenPages":false,"headerDistance":36,"footerDistance":36,"bidi":false},"blocks":[{"paragraphFormat":{"beforeSpacing":18,"afterSpacing":30,"styleName":"Heading 1","listFormat":{}},"characterFormat":{"fontSize":18,"fontFamily":"Calibri"},"inlines":[{"characterFormat":{},"bookmarkType":0,"name":"_GoBack"},{"characterFormat":{},"bookmarkType":1,"name":"_GoBack"},{"characterFormat":{"fontSize":18},"text":"اعمال المغامرة دورات"}]},{"paragraphFormat":{"firstLineIndent":36,"textAlignment":"Justify","afterSpacing":6,"styleName":"Normal","listFormat":{}},"characterFormat":{"fontSize":12},"inlines":[{"characterFormat":{"fontSize":12},"text":"المغامرة "},{"characterFormat":{"fontSize":12},"text":"يعمل "},{"characterFormat":{"fontSize":12},"text":"دورات "},{"characterFormat":{"fontSize":12},"text":"، "},{"characterFormat":{"fontSize":12},"text":"والشركة "},{"characterFormat":{"fontSize":12},"text":"الوهمية "},{"characterFormat":{"fontSize":12},"text":"التي "},{"characterFormat":{"fontSize":12},"text":"تقوم "},{"characterFormat":{"fontSize":12},"text":"علي "},{"characterFormat":{"fontSize":12},"text":"قاعده "},{"characterFormat":{"fontSize":12},"text":"بيانات "},{"characterFormat":{"fontSize":12},"text":"نموذج "},{"characterFormat":{"fontSize":12},"text":"المغامرة "},{"characterFormat":{"fontSize":12},"text":"، "},{"characterFormat":{"fontSize":12},"text":"هي "},{"characterFormat":{"fontSize":12},"text":"شركه "},{"characterFormat":{"fontSize":12},"text":"تصنيع "},{"characterFormat":{"fontSize":12},"text":"كبيره "},{"characterFormat":{"fontSize":12},"text":"متعددة "},{"characterFormat":{"fontSize":12},"text":"الجنسيات. "},{"characterFormat":{"fontSize":12},"text":"وتصنع "},{"characterFormat":{"fontSize":12},"text":"الشركة "},{"characterFormat":{"fontSize":12},"text":"وتبيع "},{"characterFormat":{"fontSize":12},"text":"الدراجات "},{"characterFormat":{"fontSize":12},"text":"المعدنية "},{"characterFormat":{"fontSize":12},"text":"والمركبات "},{"characterFormat":{"fontSize":12},"text":"إلى "},{"characterFormat":{"fontSize":12},"text":"الأسواق "},{"characterFormat":{"fontSize":12},"text":"التجارية "},{"characterFormat":{"fontSize":12},"text":"لأمريكا "},{"characterFormat":{"fontSize":12},"text":"الشمالية "},{"characterFormat":{"fontSize":12},"text":"وأوروبا "},{"characterFormat":{"fontSize":12},"text":"واسيا. "},{"characterFormat":{"fontSize":12},"text":"وفي "},{"characterFormat":{"fontSize":12},"text":"حين "},{"characterFormat":{"fontSize":12},"text":"ان "},{"characterFormat":{"fontSize":12},"text":"العملية "},{"characterFormat":{"fontSize":12},"text":"الاساسيه "},{"characterFormat":{"fontSize":12},"text":"التي "},{"characterFormat":{"fontSize":12},"text":"تقوم "},{"characterFormat":{"fontSize":12},"text":"بها "},{"characterFormat":{"fontSize":12},"text":"تقع "},{"characterFormat":{"fontSize":12},"text":"في "},{"characterFormat":{"fontSize":12},"text":"بونيل "},{"characterFormat":{"fontSize":12},"text":"، "},{"characterFormat":{"fontSize":12},"text":"واشنطن "},{"characterFormat":{"fontSize":12},"text":"التي "},{"characterFormat":{"fontSize":12},"text":"تضم "},{"characterFormat":{"fontSize":12},"text":"290 "},{"characterFormat":{"fontSize":12},"text":"موظفا "},{"characterFormat":{"fontSize":12},"text":"، "},{"characterFormat":{"fontSize":12},"text":"فان "},{"characterFormat":{"fontSize":12},"text":"العديد "},{"characterFormat":{"fontSize":12},"text":"من "},{"characterFormat":{"fontSize":12},"text":"فرق "},{"characterFormat":{"fontSize":12},"text":"المبيعات "},{"characterFormat":{"fontSize":12},"text":"الاقليميه "},{"characterFormat":{"fontSize":12},"text":"تقع "},{"characterFormat":{"fontSize":12},"text":"في "},{"characterFormat":{"fontSize":12},"text":"جميع "},{"characterFormat":{"fontSize":12},"text":"انحاء "},{"characterFormat":{"fontSize":12},"text":"قاعدتها "},{"characterFormat":{"fontSize":12},"text":"السوقية."}]},{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{"fontSize":12},"inlines":[{"characterFormat":{"fontSize":12},"text":"في عام 2000، \"دورات الأعمال المغامرة\" اشترى مصنع الصناعات التحويلية صغيرة، نبتون إيمبورتادوريس، الموجود في "},{"characterFormat":{"fontSize":12},"text":"المكسيك. إيمبورتادوريس نبتون المصنوعات عدة مكونات حاسمة لخط المنتج \"دورات الأعمال المغامرة\". هذه المكونات "},{"characterFormat":{"fontSize":12},"text":"يتم شحنها إلى موقع بوثيل لتجميع المنتج النهائي. في عام 2001، إيمبورتادوريس نبتون، أصبح المصنع الوحيد وموزع "},{"characterFormat":{"fontSize":12},"text":"لمجموعة المنتجات الدراجات يجول."}]},{"paragraphFormat":{"styleName":"Heading 1","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{},"text":"نظره عامه علي المنتج"}]},{"rows":[{"cells":[{"blocks":[{"paragraphFormat":{"textAlignment":"Center","beforeSpacing":6,"afterSpacing":0,"styleName":"Normal","listFormat":{}},"characterFormat":{"fontSize":12},"inlines":[{"characterFormat":{},"imageString":"data:image/gif;base64,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","width":142.2,"height":88.28251999999999}]}],"cellFormat":{"borders":{"top":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"left":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"right":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"bottom":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#ffffff","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":234,"preferredWidthType":"Point","cellWidth":234,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"leftIndent":36,"beforeSpacing":6,"lineSpacing":1,"lineSpacingType":"Multiple","styleName":"Heading 1","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{},"text":"الجبل--200"}]},{"paragraphFormat":{"leftIndent":36,"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","styleName":"Normal","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Times New Roman"},"inlines":[{"characterFormat":{"fontSize":12},"text":"المنتج رقم: BK-m68b-38"}]},{"paragraphFormat":{"leftIndent":36,"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","styleName":"Normal","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Times New Roman"},"inlines":[{"characterFormat":{"fontSize":12},"text":"المساحة: 38"}]},{"paragraphFormat":{"leftIndent":36,"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","styleName":"Normal","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Times New Roman"},"inlines":[{"characterFormat":{"fontSize":12},"text":"الوزن: 25"}]},{"paragraphFormat":{"leftIndent":36,"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","styleName":"Normal","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Times New Roman"},"inlines":[{"characterFormat":{"fontSize":12},"text":"السعر: $2,294.99"}]},{"paragraphFormat":{"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","styleName":"Normal","listFormat":{}},"characterFormat":{"fontSize":12},"inlines":[]}],"cellFormat":{"borders":{"top":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"left":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"right":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"bottom":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#ffffff","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":234,"preferredWidthType":"Point","cellWidth":234,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1}],"rowFormat":{"height":1,"allowBreakAcrossPages":true,"heightType":"AtLeast","isHeader":false,"borders":{"top":{"color":"#000000","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#000000","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#000000","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#000000","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0}},"gridBefore":0,"gridBeforeWidth":0,"gridBeforeWidthType":"Point","gridAfter":0,"gridAfterWidth":0,"gridAfterWidthType":"Point"}},{"cells":[{"blocks":[{"paragraphFormat":{"leftIndent":36,"beforeSpacing":6,"lineSpacing":1,"lineSpacingType":"Multiple","styleName":"Heading 1","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{},"text":"الجبل--300 "}]},{"paragraphFormat":{"leftIndent":36,"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","styleName":"Normal","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Times New Roman"},"inlines":[{"characterFormat":{"fontSize":12},"text":"المنتج رقم: BK-m47b-38"}]},{"paragraphFormat":{"leftIndent":36,"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","styleName":"Normal","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Times New Roman"},"inlines":[{"characterFormat":{"fontSize":12},"text":"المساحة: 35"}]},{"paragraphFormat":{"leftIndent":36,"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","styleName":"Normal","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Times New Roman"},"inlines":[{"characterFormat":{"fontSize":12},"text":"الوزن: 22"}]},{"paragraphFormat":{"leftIndent":36,"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","styleName":"Normal","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Times New Roman"},"inlines":[{"characterFormat":{"fontSize":12},"text":"السعر: $1,079.99"}]},{"paragraphFormat":{"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","styleName":"Normal","listFormat":{}},"characterFormat":{"fontSize":12},"inlines":[]}],"cellFormat":{"borders":{"top":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"left":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"right":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"bottom":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#ffffff","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":234,"preferredWidthType":"Point","cellWidth":234,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"textAlignment":"Center","beforeSpacing":6,"lineSpacing":1,"lineSpacingType":"Multiple","styleName":"Heading 1","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{},"imageString":"data:image/gif;base64,R0lGODlh8ACVAPcAAMjI2HONu3h0eNPT087Ozrm6x/r6+sTDxKOjpGhjaeHe6dzb87vD0VhTWezs+3h4h5ubpLOztKiVlry7vcK+xZujrqysrcvK5e3s86qquJybndTT7EI8QuPi9EpESsrKylJMUuTk7Pb19mJcYtzc5PHu8/v9/fLx8tzb7aSdo4uKlSomKcS7u+Td3O7t7uTj+1pYYIJ8gzo0OrOts+bm5nJscurp6tLO09LMzPr6/uLg4pKNk/39+mJTWtPS5WpocNTT2bOqq8nEvvb6+pSRlMTFy83R19ra2vn3+tzk6E1JUY2Ljerl5ZSKjHJnaitGY394fP37/d7e3jQwNExHTern6vb1+q3U4qSjrI+o1DMtMjo6Q9rW2vLt7jw5PYSChPv699bV8bW0u+Ph3kQ/RUE3PpuUm+3w9LiyrPb2/rCimYuGi/Hw+622x62xt/j397u2u9PQzVFHTqmkpaylrP37+7m0tPHx/cjFxoSDjLi81MvFyvbz9pWUnNnU1cbIzNva1aO80srLzoOY2fPz9O7q7vr9+2x3p+bi5vTy7ZmatOvr7Kasw1Zxkvf59oqFhfXz8o3U7JiUlczJxUZCSdnY8zgyNkpARt7e94qXqoaCf+bo7Nra3i8qLebi4uPj5O3q6uvo5tjW7c3LysTV5vb18ltgcNDO5YOJpd7Z2ujn+3y8783M8c7Jzt7b3by5tjY0OKaorfP19s3Ny+fl4urt7oWbvJyQjWiB0ejm9LSxxri6ve7t6/Tz+dbY2/H2+ampqIeIjPTz/97d25KJpI2PlnZwcC0qLiYfJRgUFpecntnX5aenp4+JhvP28+Pl5+Pl49Xa8R8bHLDA4dfX1lFQWdvd2rCwsG9veujp9+fo5cfHxre4t6Sw1p+goGRgYhQeMDk3NkhHRv39/f///f/9//3////9/f39//3//cvNzu/w7+vt69vd3cDAwdja40dGTTAvMOnp/iMhIo+QjuDg2h8tP2paqWhgj1pquzVXfJiYmNDQ8p+bmf7+/v///yH5BAAAAAAALAAAAADwAJUAAAj/AP8JHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3Mixo8ePIEOKHEmypMmTKFOqXMlypb+WMGPKhOnv5cCaM3Pq3OnRxLiB42zyHEq0KEN/Jv4ZSIrTKEpzBIU6nYqwZpQINAgJlEoVJFIT5l4G5dqV6ssBMb7UsBCFbNmO5qAONOD2rVETRASMCJZAh92P/s64IERoDDNjE/7axRPMWIIYP6gp3tirA6lpKLRtw/Yk2ZfJXd8sKdaAL5Rx5UALNHFCyqhXr/bE0WHDxro3BnK/WVcLQwcf04IHr9Doib0VH1QX9fdzQo1qDYpdetR262QajxIk+CFgSZ60j5bs/9OgAYJ5RYy6dcuSxVaAQ/qMr9CgnCjSfy4EwODAAYaMBCX881JTdomwQw2mPLHFE0pUA0KDDTQwwjfYYNNII4cccuGFT3TIwTX12ZeUBQJ4oUUnWoywRwLXvEEYIXVNFcUn/SAIDxkJHNKhPfZscUkDpugj5JAdVsOBBSES9dMnNZCxghdTWALFEitQ8YUAAkQQY1f+vGHDIqVEMcEDqDQCTjLITHEJFfB0uAU8lMTzBTlJDuWPORpAUQ0ynZQxQgpyWEIFFRESYUCd/6SGwxy3GDOCJchIg6IMnXBARoqLIDrUAMD8g8cKyJDRgCYeODGHEyP8EAOMQQVVX5d4WP/SAwh8doJMhN/IMA8U62i6KWEggHDJFByAIEMPKVCQAhQHCDiOCcxtaVYUUpBRAwfJOPHFGlXAcS0z1vnK0yfkUSLDCmVwYAkIu1Awgx1SrBaVauVUQQcMJ1qSwCcCQSLCauP8JO5OBiAwggxUCFuGDBqQIIgYwLhDwz/ajPJBr6D5E8UwrdBBDw4xgNgUgQMT/IoA33hQxiUgLByDO+q4Y4EFsTgKhSQ3RPFsUmWRk44VdjiRwC5a/ROwwCUbNQoUxjjBgQwN7CAAsc0U8ccMGvzgASUjQDFBTTx3xYMhiKghRBOtQFITUtImLdMRjxCh6gdRlGPHCCnuAAKWHkz/IYMTEQgYNlVjj4LGJBK0YwgPAQ/udlEiuHPET+YkJUIKHnTiRRmUmAiCE4nd1xU54wyBhhBBBFGLCec8rlhQJvCsQwxllOGFFzKUse8/YfVMThWH3yKELP+07nqIxmhBhiVlOEHHP0z57ssfeJjBCbR0Hq+aCWckb4kll0BRhYB/kcPMARYE44I/PGSvvWIuGBHIIT+AYEkKUWzlalmFeLMNFN4wADl40Lb38UQWJHADMxigiD6oQACtGIg5yOEPcliQgnY61D9uoIEDfGMUNzFgWfyRBAYwAAuKiMMsCoAFb2jAAtuAhgYpWBOk5aSGNYkAHPbxg0wVUIQ5OYMJ/xngjQIQQB0EiIMgDsANZngjYvUohUAwyBPmjEME3ohAd3j2QyDG5B0MOEMREKCOWcziAx8wIwEIsI0JWMAbzHgFIE4gon9IQQAN4AAeyOfFG9bFAAAAgAmucQ0CfIAGLpDCAAyZxjV+YALXQAACuEGAddhQLv9w30ni4ikqaKEBNCBZH1uyNoScoQBJWIQ33GHIIyxCBCbwUjsIIAg0rnEWB4ikN67xAW2EbYCaNInP/CGJS6wgBvsbZUy2RAIGWEEdCBDELNTxgW3MghqfOIEBorCOT1CDmo1UBx6a+MQD1MMRLbHgOmpQhk58rYvKdAkAjJADCxTSjLMQRBlt6f9KEeTGBrNE4wfWuI1dAMMbCJhAO4qmEjzYjxLxoks8i0IIBoRgE944AAHUuAtFiOEAs9hoGqmhA20a4AQ6AAI4Q/oBmSE0AtTAGEkMcAQaWEAOyBAAEtg2UaI0cwh/iCY+cXkNYCBgl+4Y6BkHegRt+FMEizgCI0Maswh4Y5fqWATP4hIWeCLEHOn4hw4QQA1quAMKSApYT4liBAAYwAIR2KgaZwDXRVCDG0dlxi6sycgPDEAHLjDAG07wiQGcMaS4jIATLXAAaLyBIxP8xyRQMYgCDIAasziCT9bKk4omYRMdlOs00YiAV9DJGVI4wEGZEYEDCEKkTNUGIUxAiEX/zJKaZtwGNw4aMWv8SyPkAAYuVpGFQbRhG5r1KmdHUkIkFCEW0hyqGT/gjQmMQy51sMEsrIoAC0xgoFP9qwtw081vpvGMbpTkLqhBx4vYAAJZSMIvXpAFd5yAp8udyTzfmoIJiBafbFylBdORDpsQghoTcCIwuLGNW9qSGlkxgAhsoMjzttQCR43AAGxQEQJ4Iw6jKMIFxMCNlzguvyyRhUWfgQAJ4KGM0z0vGzWwDegRsCBvgAb6XuoOxAp0AFIY70m9acgzHiACR7XAIU+sEHNEwA0qnMUfICAZFOckBAwwQBHMEAQjDFUb1JDxATQwC94lxAQ2GACSveHdBsOW/wDYJIRgXdAOw5qRiQp2hw5+uxAssjKk7oBAe60sEyMYwQCxoAMLRHtIAxghugQY8wAcQggpuMOJkwQpbP0qhUW8wUU0oMYRZ1HQN+r1CAw9iC+8AWk3gIjQMkECAzbxDG/MQLpopIEJjiBjd2hg0g8xwSc+8EYEXCOpDh7pJ9Yh4UQuEo0uRUBcLWkQd8RCrtAEIaxJ+Y9NZLkIKXjxUNP4ARsYgBMynoAGrJEoiPhjHQPYxVGBsVcf27IdNpDFSWkg1TO6Q5e81IbACraLjUYaAtrYdkyAcGgsROC8+CxCN6i5CHOgW43c0MAYeIfJh7whtaZubUhhO4sBLBs37P/Qgag/cGQF48ETOvDGH8yojl0wgwcKb4kBGLAIEihDo0MlAA4yYM0P8MLiMrbqxJjsEAPY4APXuOqxwbtUpubbALLgt2EPMAFb2KICsYCxILDQrJyzxNsGKAACpDuLIqyiAgg4rwv+cfGQWpXDGVnHEfDK5gm4meR/vY0BuhmHKwQiE3CQ6x+8MYyOm30id+Kq5LNHMgv6AgiyqIAd/jsLBqwiFgg9b694rcZIriMuFsRIBDSgS9ZqetMEqKkI2oGDbXiDARv9g7xl4fiIDChgIzPaWNTaKqEo9y81IUdc1hYXpqh1IOR4AwNqQYIOSjfS3sADIaw681ncl/QhtQD/MwhRueMXxKYIOIA7FNiP7iJbrgJdI17FbgFumLkiY/lHHYrPHJ886/9HE3xuAzbRwhxbMSBSQQ7NpXbXp24EIBAGEHUzRwCEMA7gRwDAYAFS1HsTYQC2ZwFtQACBMAhv9EQMhkRyRQDM4AZyRUSTZkO+V0PJVBUCAXw2YX5cwoEHIRX+YARAQAgOJ1oEsHpHQBClEEkTCEvgNwvM0CIc8QkYNgEMQAoHll4awFru8FqL92d/4A7ecHQ4VxE2UQ5vUAg6wAUDgAN48AGjEAepUAUnMDhjgYM6YUEISBDlQAjPcASTwHWvoH544Adc4AIiIBWyRn2hhU9vxC8Ccif//yACSFhysBRm+CRth4J6R7ElHvhCe6BrtTAALKdYUqcImaAHuedq1xVMB8FVYiEUSMAFEbADmuAE3/ANVAADIEAFKTMCMAADAhAMwDAAGpRJysc7xThCydc+NiECOqCCZrAERAAFAlADCcA0j7AGArADa7ADL0QBiBAFGJBl8qZGs2BUmRIVL/EGGCYIozAAb2AClGhI3gAHURA7BdQUkWUQUOgNuwAE/sRrBOUO3NAPFfAHtMQAzJAcfGQQI+N/ArMO25ACMQADI8AyeQQC4kAJIEAGSkAFHkAGHAAl4UAG37AEeIAx9hg7JqCKSmJFAnECBHANS7AGTTONX2AzCf9QAwLwGN+wkzXwAzBQA98ABW5AAkAYV4aEAMCQagbxBkbFjsJoAPFoe+5ADuWQGhABFW6xiRZQBDTgdEUWe25gRNNERAm3kAXRFM8iECLABXMABQ2gBDDgAXJJBhgpDkpACfDAH5RgKV5ACWTgBeryPQ2wBATAM0FhAJikgzJRSuOQCjOwBj+wBjDwA1DwDY4BA98AAjAQISPAmRKSAJU5AjUAAg0AAWfwDhqABwHmhAshC8CABVApYWG5DR1ERcEGLQnxCQc1AT/4BryWRnrAACHFABCjQTFSSv+wDu6gFoQCA4NiJH25BbCwBTKwBVvAAdhpnTLgBbAgmIIZDuH/0Ak48grEUzmSx5g5MQBE4AQ6WQ0/OQIj0AC5mJdKcJ8Ncp9wQglKECyf2QAVYAQQow4HUF1MRxDKdwbAAF0fQA0G4AJhOWY1dn8MQQ4+oTF/NGZd+Ql1sAhFhk8MYAHuEEIIsZZRcAAoIyoJQAZUQAZbMAXf6QHwYAoVUg0wgA0/UCGmEJdKYCJRIgPdCQuaAwMlxnFcpRPjYAi6+Q+C8AUNkADfAAMJQJ/3SQXQ8QM1gA2ogAoq8AMPoAJ5oAIPYAqmUA1KoJ0w4AZ6gACBEAlBAAVmwAT64yrPl0kvcQILWkvUYAIe2khj9oCx0xG8yY9GcALAiUZSFghzMAy8/zMO1SEQ6OkPWHkDX5AyvUgG4qAuxNKZnEkJ1eAgeQkPoiqqNgoFXwAFI0AFJgILsCCe8QALAiAIq6GkNZGe6ukV9ihWfZCLnDkCDtKiZAAPP0AE1OgENiqlnSmf2pEA2PAAS/AFqaIHBTAHkRAIRNADP5ICdGQIYjGDA3ECzMCgk/N0auRrfpBJtyoRBjBm11AEOmAAvMBIZvAFchowBoA05fcTNJACMCAHn+kFl8ABsDAFMCoqmQoCpBkDRJACWNCwGrADMeAEeUQJT4oNUAADU9AJUyCe4XAMsEAEc2cChoAOJIsOscNJJhEt5BMF2/ANlEAo9OkBVEAJHrA1LP/qmTXwAMGwDylABz6rAXmwk/RZDT9gDBDAAG7gBpEQATUgB3IAAnJQAzcAMDBIEOswB1hQBKPQDuOgA+mmAYCgfHSIEIM6AUYgZ+1AahHwCKmgFPd6E7q5B8YgIXJABp1jCVOgBfFwDCuAI0sAB0DgCbRACzpwA3uwBzjgB0zAB3xQApxQAHngHw1iCTIwBfEQDzC6t9VQZpVjAjmQAwagpOnKEaW0CDuQlw+iBB/Jon1ZBkpQA2YwATcABHvAAq8wA7EQCxngBmKwCwxAAQUQC0uQAEpwtGwaCd4gB2VABj3QAE+bAsTTKgmxCAiQtbMgBf4wbBylAfWAlhRBFh7/uEvu+qCL5A4xsEe9U4NKcQ1OAAIcULO4Q7CW0AnxAANEIAj8dgB2QAcpQARf4A39YAyS0A+a0AxzYAeTUA9ggASt8AVUoLEyYAmXi7nx8CRIAj2gmxuhO7YMMYdycQBa05+qewlrQgUccAlOMAM2QC2v0A9EIAlBMAMpMAMHAAd9ADGPsANLsAP7gACxoKZzcAVtoAlASgYegLDuKwDj8yxhUQ7J9BPUCwEUcL3+4LVlRADc4A2ekCh0WEEGYVMIZbbMJgUEUAREEAToFBY4BwqSkACm2TKWoAUZ+yQ1cA3UMAoz8AU7MAFHYAOEgAE+kEm8QCfUAAShAAiTgAZq/zAHcfAGoHAvBBvBWiDHU7ACK/AIh6LBGgwtR9oRVrQz/zAB1bA1g0IJl1CzlvIFk3YCFvAFROANlZQ//9AFXfAPd1AJdOIHItAFcQAHaxAMDLC7VwAM36AF/MEBFNsAMHAJPRBB0eKoZBHFU6wD/vAMH3DFd2c0FpF6BcEN1zALFqABETC+LrBIMDQG5AAG/wAKMTACTiAHfpm3GusEFoAHwDDAH2AHbTtFbLAAFlQHYEAOCtAB0EcLKdAPa2ABNsAHdNAAnfA9BHu5WiANNXB6Q6DJS4Gynvx/UIEASkAGcjCzdmvCHAAF5+oHz3gNNFAHn8AcOvMPviAK/5ALG/8ABuZADY4AFVHwBgWgB7d3BUvwqYK5NS/bvD+yR+cQMOlbEJuAAFI8C/xizaWHAOxgoRxhAMzASgSwC32QUEYwxpEWC+6wDjoAl15gxFASxysAAv1gBxrwBdcADVBchAPhAJgwQGCAcyjgANATFp/AYTZwDTHQD0zgCTvgBZ0QwZfbCZ2wAt+QKRid0V7BHAawD0ZMBmRAwoPiJ3t0A0uwBH6AnOylMUlhBJXwD9ngz0MwADozDv3gBG3QBkHsBsYQDGIQDCDwsjVLl9VwCXLAApJ6J3XxCd6QLFD9D1IdfgiQCB0xVo3EAPfQBMZWBFIweKB4AB8ABaLivhGcsVr/IAAz0A/NsARFSDrjcAKSYRNs0AHmTScbUAuROgCrIxC84A2m4glwAAOJjbn02wnSkACnh9GGMLq+RzoCIgkgmdlGXLccoAFRQAM7IAmugAH54yomZzQvIQj+fAYvoBQ3QBdSwAFUUACM4AZXIAkxAAECkGA1IA4eecoOIp920IgCIxWtQwPFXUsTo71mBAzAwGcZsQ0WsFFx0A35wAKG4dXMpgOk9gXqgjtxjAyUsA9BoAlzwARpgAL32hZvIIwCQg5skAuMk0nocAqZEhRgMAtvYA5L8Q+0EAeSAAUs4AdQgLcSHA8oMg8/IALmMASGMASO0OYbUUOM4w/eYMSr/3vKxUIB/wAHAlB22RAGUbB//3AERaibRYAJtuwA5IAEH+4P7LAPeUBEfxAIRHkD/TDYdqAJM1uzLLPMIzC1YAB8TEbclNRL/8DjTGgB6JQR4+BdRD4IDyAZjuBr7Vrd8DYAFsABjG0rDWABklADeyQgCxACBvgPA6AVFeQA2UAQwnAKvEA+MCkg+WMNE9oKAiAJQAAB6hIO8XAioPIF4+AI9B7oYDHoKhsBrXsJma28TlAIIrAGGkBHUTDpC5AL+ucPJ1CE49A6gqDpd8DXb8AF1VEFFSDbpIAAO/AHOLCcGg8HZrCRre602sEF0AM2CKEDGnDrHKbrxqbOGEG93f8XB7iwA3MnEDrADAjASoGlAwPACPAgDcjgBEGAMn6BFOOQAxtgBeTTDnP3EtnA13UNBOH+Ep/A8AZACAcAS1DhAo8ABTdABxygBeFwIo09D/ThCIDuCNyK7y9BAO4Lz0ZMBTIgAAbABeCdP23RFlYQBkgwDjxAUwKRGoJA0HdwB/9wAq4wDnSCABXACBFgBETgBu4gAgKzDTsQATMwAiJes/1JBsbABFZdtQMhBRpQcB+QKV47Xd7ADQf6ECooV0WAC8BAOZZToNxQBO1wUkegB/jwJ8bwBe5ACOWgM+XgD7kgChhEA4w4090+EKrgC+H+E00FPf8wCzrQufnzBlD/4AQsMAeXEsfH0NjxcADkYAD0LlEagRMu8ANUsLykLANQEAWtUAOpUA5+wAc1NEG5ABCYyPkzcMSEv3L/jLz4d4fNv3VH/v1zFKwNFkFuJBXQYW6cARP/xtyyA+cbGQ+XqIBoAAKKgX8HJ86c6c/cEQ0TCMxy8U/Hh1kEPnib4I/mUaRJ/XHjtjPOtENCjHrk8W9PjzUW3KljZ4CWum7YiPwzgKPLv3HjooyrhGHiCSkzOziYSC6HKimL/vnzR02E0U8E/JkgbM6EjRJBnMxIcWmKpSmd4q3wAo2cIwOGjCbl3PnfuTrjhgTzQsmDaTlloJTbAwXUvyglXCHZi85w/9ty/o78HUfOh7x/Du7843XEqI48ehAY2ZeCRMxxB+sUqjfHDp6THjyspEJmxj9DVZUaxalz1rp/R4AS2KbhgIFxnj2LQHBg1qw4WVDVm+hvXLlCRuiEgxq84aYITt6AhBpGACDhFzDiIMQ/tHrZAIkoRDDOqLn2+ocNB8bQy583BjCAoA9ESOsgAzroYCI7frhGAw6mkEELyeYRwAADhgBpnM3kk4+vfyLggAwOtJODAyeQaAWKQv4pJwp/MNDhRHSM6iUMmHQ4YS/f6BLuHxekIOefbbBgxI4iHhEjh+hMIMeABVAgBxRJKJhgBO22A4ElAmATkpqcgjrBAGrWO//AG2YsOIAabWAScqYjmFHnvjgGMaOE/oySRAsZLNEChGC0UmcRQ2j5oI1DAODjBivQiq8DBaJAgpo34lMgGw9VSUPEvRYJ9B8CPolJzhY7+PEfOkaI4AtLQp0insncIQsJ+IKclDMTxlkkARkoSXJJOarg4hsmZOXLn0IQiSIKc/hy8Z9P9NprGQfIGZOXMdAioI0KAmFmBwX8i/cNUTAZh7YqllAHDiq0W8mDMmqoQ9vOBtDAHQIIIKRERTVAwAIESo5gFi+Pwvgfd67ZaRZBArDgn4GMcoUKGXKOTAtjEBADwTdOoEYMRtJIBJA3CPIHnQ2+dIWQvXbdy58X0NH/wd4j4vpkAP/SMgATTA4ibC9JaoAjARshm6yaRUzAFshtPUvnHyK8kIGDJD0g44YSjGklF0MC1+y/QkChEk4kwrDCBmP94WGZO8iRR5h/FqFhIBLa8KaNJehIAzaCwuiAHB54AOMfIHbgQgOU+ryEgyAmPVNjd4IS4Q2hgnJHg6a2cScCBLwZ2Z0jFpGUJlmA4Rg/PVARYmp/ooBCizJ07qQTKB4hAoGtbDBAmw8YIKELKaAG0oEN/NFBm4lQ4PWfHBjKayK/3tgmVxYX6MAQcggbm4kExGAGDbBEGcJhiXhI4wv/GMJaVrat3pjAHP8YgDhKM64ypOAfMTjAP+qU/xYgdascVShEOaJTJUycwBV7MYAohCE5ytlAG/0DACOAcY01GME/5zDABnJBDnKMow51qIoYlqAAAWyBCpSgBJIa8Bq+xGtlQfxHHDYWlDe4QB3r2R034hCH+/iOGxbwhjeAwY1ZfGJC/2iHNy6Fn26gol8myME/KFCGaMkgMsj4xhIE4IndXQNBBhDBAApQAD9o4yBUWkAIeLFCf+BrIiD6x/wMYKIB0AAtc8KEKgZjCJBIsAPL8EQC9rGPLXiBAzdaQTjiEriQxI0mfDGEORxRA7upkgocSEA5NGAGKUWhEihYl2HexYQoAYkcmOiADnLjiA18bnL0QsQ/CHGRCP/swwwY8I8VfBjErhmAHGyQhwbEAAQYoMQ0ZMggbMghRc8QwD2zMNEithiUCfQjC9EghDakQI0BCOUAE7gGM0R2jd9Z4AMdG0AWNHAW/yChBjKonqiQQQYz1GAbE5FCybr3vQNgwQzP+0wONlAmf5xDkv/wVSX1coIj2CBQ8HlDJbLhj8ANwRBy6sApaGMSYPxgCnazhCXmsQSyDCGWspxJdBTiBTIgSSUcuIEranAChIwjB2EIQRDHYZiPIAIS0SOHFSrBhSj8oxSnqKM8PkeDdAGhDcpwwyPccJAThCFf/hlMbxxwAQwQYglcgAAZlthEDjTABmhZl3xmMc963pP/AK8oBgMWgYRuGYAQNtABQGfxgd8BI3gIuKE7AmCH/vzjAF4oQxkec70YxIAIfP2HCF6xjwgUwRdvIMQRMoCNR0ziDR9aBiCo5IOH+EMVdZxfFY7gMX+QAwmYcEA6PrnTf3TAB7lSSwyg4A0PeEG8sJhHOGhgAqUytSbj2OkXKEFRDixpDf+Awg3IArccVKIQ5IiCBLuFBCbwwYF/HS4kLoAOyX3uE0wwQAEyUIEKxOAd/8DABh7SLbSERhUAYEdV8AABEtQgb5S4RDsd+MCZAPED86SGAey5Hm6YkwJG4AQoeDFWExCSF59oxwBmsQ2CMsMbGmDGAXzhAiQYoxOg/7JoA8zwDWMdxD/kkCf31GGDOtjACBX4ARQQ4IcFEKAO/0DuP9KgCo7q5QgTMNY4TrAANvRPgiAhR0//kt4jjCAFULCEeONxjHlogIFLZepgbiKO7oxLDoWYwCOwdaJ1mZWbEhyIrZgggikJky4GRrBbfWKDdTAiFhVYQh8MsAl+9AJ0fOkfJgCwDnLUgUp9KAIFWtcdMjSgmlRCMU3I0R77UGMcNviAIIISAW/Y5wNZ6AYDbmAEHbgAAzAxwRvW4c8BfOAAERCy8ATwDRBwQAvIWMEaoPAATlCJB4ThATneEQsNROAPu9VQEfQwg0c8IAMfgMQy6khJl6rWvuTAQP8YetG/eA3kH7nwgQj66z+61WAOVOjzFI4hDXHIYqcTVG8d5paCnHGAEkrgAFKh0IIS0OAN8TJMOYQRBm5GgRyGABIkmICE3GziAlE4wYH94WkprEMQjPBGLARQAAxcIFb+iYIB6pBfAHxpSgmRAhFCkEQPKCElHICDrOJ2AA1sYxbCpsEHLkWAaxAFC4dQxCBwMQhBFPsG1PDFJk4gCxadgLPU2MYuImABDSwBCjD4RhMEgAFMbOAM5EhHYcwhCgDMwcraqEMo/rCMXwEgD5rogxsGgIm0/sMXxovAXwpuhf7BsjfZOIUj2Askc8hCB3vQswCipYU/r6CDhOl1Z2z/IgsYnKYMlKACFRAhhvmW4wSeOIEUTfjyhwDJqSVABExAcQFV8GEDNJNHHTOphwrMQQNQ8EEYclCz6I0jDfwAQiliEgVZE6QPgiiCaSLGgTIY42Lx+XrYP3CEcfgEswsKwLOAa0AADdieDFAERigCBiiCuBOEATiCd3CBN0gDIRKBRfiERAmyfZCEVxiAd7iADpCTMxEiFFCA3XGDeXOEEgGAMxABCqgCAIiAH+iDL6iBBDQAQcCDfwiBSvicFZEJ1puQ6IgPGtgGHaAbAUiB9wqVTkgGY+ALmWCqqnAHu3mdJYGCKKiBVJgaJLABF4C0tLqDSiiBKfkqozgBGjAA/5jChBAQhbToPgr6hIuogEdQBEw4v83oDWG4gBuACf+QtTdQgAUwAg04AwHggIi5BEd0BQqJG39wB28QO+P4ifuYBWCwAA38BPUAnuDpgwrgBjEogG0oNkFIRV+QAgUgBAPIgWpbh605gLTrB2bAgnM6lImIggW4g2EIHgoQBMqjgT84hVZggj0QAGTQAFf4AjL4gU+AAxrIhUoQJ4MxB3HKhVMQAfAwCkIggAEgBHMwhxv4hhRAmxu5nnCAhpjgOFmyiS+wkSTZpQloBaQajKzSu+EikjsIg4coh7FhFxrQkDtghUpAh3FYrl8bOm9QhkcgBvuKDyL5qwGog3hRJv8MOIUFqCMNIAExyJvXkQFgQAtZarwJqERBkAJ/kAKguA8EuAb+648T+AkL6DYEYIZY4AZ3KIJTVAcCUAcjkIJP2ATMygFr+4RZmAAy0gBgmIA4sIETqIQccAR32AdB8gUREAEgYIAOcIJkYIlmMAMv+IYBGIBlWIC16JY4+QfWwzFD+IeyWyycoiMBWIM1gAXImIIpmIdraEf1+gdZGAFYwJuU6IESIAIKaKqpE4Eq+BIwcYBKwLR3wcdCMJdlqgS0UIUs+bAK8AYiCAYK2AHYWIsokAcAqEggiS4RWAB/pBnV4gYMAIEtOA1KKAMBQILeQwqjGIeT/IMPUMl2aMn/D0AAbiC0ibABCCgAAjgAN3CDVzhARomACXCHU/wAs+sYIHiGTTiDg7C2n+A2RrkGXWiHUgCEOWAGdxAEGvCWIsCHZOgDM0iGJYOFRwAAUYiu1JwyBziFEngXaxqAFgMPiKODH9AAioOMTlCgd6pCWaKGGlGlEjMDJICCKqiFxoy/+DAAF7ABKokPyMTNKHqXRfgAJOgFVnABUFiAKJkBRYgFb4ACMSiHL9AkrXoBADiCOqCzceiAMMiF/PSHRegDdPgCL6ACJYCHS/CAJXzH3dwFb/BNHRgH9QiKoSiKo4iDPMiAn2QARnAHA8gid/iGGvgCIjCja+CGCTgA61yo/7IkgUVYhyEwByRwgXbYBvA8Uw3ArXmjhgDIhB/ogW9gsmmJgK7pKznZzxOogynRgVFYz7E5k39AhxuAAQ1AG73shHloAEHMzaSIgMGEqtdpBRzYgXEgBBfQgU/4BBogBNxUvirAECqRBy6hGROYTDw4Ak64AF2IgwvwAwtYAqLbByjoAxqwg+9IAxsdBnhigzDABGvsDQohAhLYBS8AgSUqAw5Arb/8hzqwgyf9gE8wgeAcBfZINm25hgdgBPDLBAjwwYmYAXKjHg8AAdmSBIMaGelU02IzArp7hrvLsUU4ggOwA2DYhzmgAFtAhQCAAAGghHlYAS2YByqghXXhi/9x4IH9JAQTOoEb4IIx4wsDuINsEIVTEIVlSIAliAE90gJA4wCsghumoodjsBEyuAQ5KIEUQK1ySIhyCBoboAEaKARIcAEmeIOd/Qd5qMZ/MAf/5IJrAAIfAIACAIAb2IEMYAQN2IEYeJ0aEABheIGqIhIkWIBKWLx3isl3EQM4QAR4KD548AAZEM1t/QceQDbf1CQpCAoCYAE6kAVCKAEj4AYzaIJroIBt6AMiEAJe4AURkIQVOIbHxVQBgAI7cARtAAQ7rcnw1Ek1nQV1mMAkOIMe+QVfqABlCABcUAYI6INGMIUEgIEVAIFAWSS++Cuo8QdaiINQyAEQQYFT2AD/HzCCEHABR/gHDRCAJagRll0BMlBJIpElAxCqPkPSJnmEFpCSxuoPQioBF/AEP9ABEUCCOlAFTJgSwqCBFjgAMRCFQqihOegHPYC3NcCGTkCSB6gEIOgX/lKFHt3NOhABQlgEHZACHaABV0AAdBgBRiQ5GTAGiVQvcyAHMLDbD7gcPRCDAWCBFJiDPIiBHxiBBHCCbxiBYNiDPUgBDfCGfmgCJzCGGhDhBGgGY4iAVGgBVwgFJvCEYRgAd7CDkmGGRpFO6lwoIyAFUoiEVciEYsiACciAPiAGVJiBJliCVxiFiYiXjPwSQgACAECBBdiAU0CBEFiEv4DUCaIAU6IE/708hk6whMRMCKZah2oAFTKABw7YgRKIAT6o1ZhEiCkxCv8wABo4giogIVGoBCQwh0VwgVRwh2VggC6ggEywgyXIBAQggjyAADuQBCzQgxoIBZph1gU4AUiogk/QAVStAhqwQPhwhH0wgOQ1UhLrgbOA4780gAO0zkXAAAkYGgEgvG9wghoYgW/4hmqohgRIACAAgjcIBQKyWRCQAye4BQFAg1dAgyBAgw22gyCQgG7uBwnoh2agh1MSmUaZAEYogADIB1RQBAZYTl3Qhxf+AWMwBm7QAVkQBlZQAEyI2lPogOEVJ0iFnsH4h3ORBAJi2TZGAA9hKmhQYy24BHgoA/870IE1gOOB5gsT2lmESKs3gEokKARREIVUOIA4cAVqGNkDgABFeIUfUIR+KDUgWIIGyIMZIIMD6AVX44RQOGUaOAFsCZKK9QYauAbDWqL4+sLU3NY3sACMUAdeaINMGIEfeIAfSIADoIMeGIF6HgEYiAcxaAdfsIEyQIYl6wRkqAYiWCBfGyIFOQFeCIUqCAVPGIMxaOQJ+ABuIAJlOIR8UIR9UIEAIIZRiANFKAYs2AUhAIYaeAQIwAIAUIAJOAIqOYe68Lq9kMjoKoEEoIdviJZjmNn5+ssBsBtsFZcbmAAz4INncAFCIAQRcDoeGKKLgeOEqAMX4BR/wIQiSIX/G2CCbQAAVQCFGsCCGTAFwAuGB5ADS3BEY0iAPriAECiF23GgqTM0KYuPp72BkeuOMriEVshsTu2MUiCZUaADbICBGHgAU9iCH5gDC2iCJhgBMzCDBKgGM3gGIMACS+gEvbSEY/gGIoACVKYBRKABdliHdTgBBffbUqDuNzAAJICEFmiBUNiBYCgGRUgBFUYFOSCGASgCYtCFAjACQLiGIGiFRluCdOGRpusWIIpx9DOKKBCAYPiBnNECvRSA8UYKd5gCUJFoD0AECJiDscWEBViAkfaBU/CBZXiHEAgBoK0CMTzVVAAFJgCAIugCMBgABtCFESADr0aFOZCEPGgA/xkgAzkoMRUIA9rYDECG1DMhEv5zBzyggdNQAiooscSkrW31B0gQgyx4ABjIgwfYgh6IARhogm5uARYIAi6AgxoAgVj4hx2QAYjV8RUwhiXQAFCgBWiwa2gYYClwhVQ4dWuQAlWvh2Go8AFIgQyAAidAgFvAhz5QgQfIgwogACzAAgswxZPcAzXFoQnoAFHYAGTfAFFAARRgJkxQABQgARIIAQwQgBgQABnwApY9hhGAhL/khnCgKIkGgS4gAm0NInTIgTRY9ztwAHl4AUyohEpIcnqPWgqgAD1IASGwAwioBhjAhhFABSzoh2JQARzHP0eEA3hH8iRnplyQBwdgA/+JtwJsQYL4sNMSUALDqk0ZiB2P6PGkiI8oUIRk/oEnMAUQcOEeMAYBMAY0WGwKGLwEWAMzGIHQXl4oCAZrmVs4IIb50wA1WAN8IIYHKIZMeAAKaAM8KAA4GAVm4LeJ+IQlIAB0QAIrsIJeyPpeEAZhaHcHyIVc6IBs8C4oEK8peFwQsBemuoZ4uJtLoIQe4IM1YAHsTbHOSHd2d4hTOIVK2IBKCANFQAUQqIYfCABFYIZiWAPTyBkZgAFP4C8kKFE2KAEQ+foOAJuGR/IO2AVmIIQGIL49b6ePn1ujQAQB6IFkNoUf+IYeEIAGcIImMIYmYIIZgAEnWIJqUAJsgAL/SmhjLViBL1iCDorxQisARaCAA7AASSCCHcAGFUCFCjgEYmCELBADXXjOxYK/f7CBRwDlge6MM9kBaxcvAD8GKlB7WQKGxyiD0xgBJPiCPfgMd5ylpACidJidPcCBQoCDCQCIHw+OkXlwKY+tPnSo/ODQgAiNf+PG+aNI7iI5f+T+caw4LkqaHAMQvIFBhoqHS2VS/DNHkSPMmDJn+qtJ4dsIChIe3Yrxwwk2J3J6CBDgxNgaKdgS0KE0RYulKceCLdn2D+PMrDFNAACQQQMCC/uYmcGmIhO+L6hsFclwY1fEiVH+3fBWs2PNvOb2mkv3b4eAL15kWDq2gowOrYo5/16bIqPMJUo9kHzZ829uzLuZ87asacATIgAXspmhQkZLJxgg5BzqQ0TJsUdcXPwzUXPjv7x5J+YtF2XjAG9IRpBR4oGDDEmdFzPPjSTFCCguZqSAAiWGMRg9tje45ARCDURYYPw41mnK03j0iHy4erG5zHFuMpiJsMsdkX3XevbQUkyDLe7oIsgui5hA0V3epKIYX339JUAMg1nSyTFeJAafTNfEY0kZHkhmxRcU1OYeRu9dJZM/55RTEyd6+CDMBRY08IMXIFASQw8jeMMCCB4EIYUN/phgAl8e6fYSR+QM+c9IBhBHBUpl9FMbkhjKRI4LMcCQxw0p2DFHMQ0MNf9CDXKAMIITUPzAhSAw1CCVY6j1AQEeHFWZJFYwaQSTBooAgIN9zGgAATAzHIUKQgzocoAFiIxTjm9zfXBNbprBxBc5PPyzhgBQeOHFFJ0g40VE/ljJETfhlAEZJQ2csAQdL1SywAKYdPCCKvLomo082fiaDRvBWmHFAhe8I8gFIXwizg/YgCADCGSAMIALEzTRyg3rCJlXRnfpphk55pjwDwEIDGESFfAgN0dnpp6qJzk2xDDCN05IMoE3xcAgxyNONPBNNTDssIMTTdDhpgzHxLlCH1h4QwMQooiCAsUVV2yrrR1ojIkoKRCjSwTXuLMLArHEMgcCUMCACiN6uHH/wARA2ABpDlGgYwMW/qCz87c671VHFDFAIcCnU6wgDQe85PbuAbDIwMEl8MhRiEJI/NJLL2mkIYwwd7DhwK8ad7CAxvzwQ+sFrJyCSRjBhMMBJWTIoMQOoLwRxR5BsADGORqVmGdW7+FhASHVUCKHEkpwQEdu474L00WfrAGDoT00scYPDRjzjTE9YFNNH7FMsEaO3yQgw3lRrVCMGMAQUgIbWMs+++zBYgCELiEgEoTL2+wSATexeDOHEwIIpEgB7kSQASaVnCIKJrRWosustFpvfSUSo8DFD18YU/TRDThi27sDiMMB1FTI4QozElxlUYknZkbOG9FbQU4up/jh/woG7kywBAg44AUYiAECFFiGDy6gC10AQAFiy0UuVCHBCUrQAap4AQYlmAM7TGAR8Dich8oAh5Zg5nHuscEXQOCOP8DgX0OLATZwcqMJWAAHQaDDCGAABQ6sQAsy0MI88vCHfXCkb1qJHxioAYAX/OMNkjBDGABwDTt8oQZQeIQxBNCPJvjpAG4AQBjYoAAugIIHdTjBPiDBAwOwsY0GQMIb4giGKvyACDWQAaiOVgMluctKNBCHF+BGhUu0ohVN+IchMOOunm1kHCHYQAfYkIYFsCIMp7gAJg8QikIQgQ46cEABXLEAAFBAD/wYGwocoMpVfk2V2ciFryAYAgUsA/8DzCCAFCjhAeOQ4RKzWI4J3UMIFYAAAS7AxgNGYIwfMMINfajGFh6QAjykAg1VCEY1duCB1FkCGdgwQjAM4BG8jLOP0CgCAIDgCi4UoEsa0IMiElCDRwQjPwJYwizccIQIDIAGPgDAKS6JCWFUgV16WuTSOJKKBOzjG4TRwtEegcg+YogQMBgMJRQXhCpAIQqJrBRFx4GEXrAhF2FgRfVYsQA2WKEELTiFHlxRhTDAwQ7ncEAG4gAKUIyBCR0AAAoqgYJe+A1w8qsUD8ghiU8cwAtKgJIHqHCEhAaTHBMRAwwEUI5irGFeDyhADEyxBRg8AAGccAcLXPADJRwABiv/mIIlZLACGLSjGIuQSEX66A8DEMIFnxiDIPQgCinQwgWsYKIOzIAGMYghDhyJwjiOIAAE7IMb1LDTApYhBRIAgAEFKEAkc5ADU6noNne5iSSqYQlLoGYezJjouwwgAA6U4SQcaAISoFCFJK1xpLm4FcdEwQp+qMIKUYhCreqgkSiUYIEUuMANuhKHXOiCBV04Am3+8YJllCB/G3iBA9KADhNVqiPjYGMw3qABp1KBEgOkjakoeqqMjAMIP4ABEGLghBgUowJ9WCs8enAUKGhiDt5QgjFcAIVO+DBhHGhHLH7JEQOI4ATakAIXjnAEHXCBAqcQxkWswI8XWBUJxrhG/x2GEQd3eAISkPAEAoIhgPa8xACYcMBlILEECpAggaJYgCrSANmlmUoDP1iDe1m7ghW44x/pkG9zzBGMTuBRCWSogTmWsAcMaEwUG1jACzqQCzbkAAOV6AASUlSHSmCCHAYYx4Fy0BUAkAANftjADE5BgQNwQQRw/gc6MEGCOsyRBMAFrxX81pFKfYIe5qARlExTgzpQNZjjEoEkYBAdMewgD1gIBgRggKMRpKQHxkhAA4DxD0kcI64/PEYRDnANQrSDGgOgxhE+sQg+vAEMJLiAKvLCBlaoggcVKYEXHgEIWlyDCjDAwRwa8AgEfEEblfqIASrhAH9w0AU6OMEbqv/AiWUEFAXgzcE/kFAUKJRhMKEKxyf4+LhrwCKQgwTBIq4hAQxgQpJIMMF7DKCAMJpxHG8IQwd4AGcDmIAHd0gbENwxiyqEoCsFiIMIamIbfyBB0MoVQShO4NsXYALR48CKHYxpZSooQSU7wEswzfsPQBjjEt9gwwRU4A1lxKAaa3ACEb5xjU30AR41EME/4BDXwcBiHhr4xBJsYIN1+FlPhACAKNJgVXKwgR8OsGpNEGGJBqSgGU4gQ70aAAUrfmEAeoLJAjIwh3GdIBV3/cc53kAIG/gigRu4AQyW4IRAhmoFDRhCX6C8mI1QYwuPuYTiDpCEGJRjIxe5zSZGDHD/ihgAkhvZ+G9ewApMCAIIJoijKtR2gxLg1VTkyEElHFUOJNCgCpQ+hxVK2rwOOMAK/4jBDW7gBZYPkgMjjPlmzhuEEYgjD7qAABEgQKZ99OAbsxgHESjxjSMY4B+I8IAM8OiFFdTgDBqwQW6i4A/180ABF8jFxslxB1Zkg4/jYNJgQDChR0CCGxHgww/UwDeAgAAAww24AA0QADBIgh6wATkYgj+8gRToABKk38kZwjqUQArAQJh4wRZIhTRAQW04jpVohDM0QFxxQMs1AToIACKA1D+IQFARVW2QgxVsQP1NBEipwgUUQiXsQppRRDlUgmYNwETcX26QQxqEQRVE/4FvIKAIlEOS+IMVOMALLAAX1IABSAIHQJUHgMCFIB9e3B8fWMDpJMCnFUM1KIACgIAK3EACwMMPDIA4/YMBJEAnBBIsTAEHfIIYTED6zQUh+IAo3E8d2IYD8AMGuJmQdJ8YaEE4DMAESEIFwkQrUAAUUIE4UEE1LME+IMA2iNwGsMFlfIQNuMIJXEYd8IAh5IZ1BIN7wYJ5HAM3jODj+EOWcUhxeEAPlAAWsMS48MAjqcLJwRk59MIGLKIJvFledIAlncAF+IId2gY5yMMFuIDMUBpMQJYwhEGQQAof0AAoQJYTakRNRIAG/INJPBUllIETlBDy1QRF3B8PXMOWEP/BD6AaEQTDCDSAElSDJEgBRQDcP2hA+AlQPMxDBHwCBKjfOdRBCJxCNpijqWQDK/RCbcjjPxACEaRGHaQCEBgAOf7DI3kCBRAABXBB9yWJIfRCGJWiP4jAEdAA+5mKH4xAWRRNPKwAB9wV+bwLpbnDFJQB3IDAJcBBCDgBH2zkl+XA5wFc1zkgb9wfOSyAKOTAAijRJpwXkZCDKvADCuhAFwQJTHyE/G2AC6xfFNSBNtAAEqif+kHKF0jBAHgBJUDVSlRazCGIkGhKLKgAFCTANwgQFTRAVh3A3THjP3ABB/ChFzRdAliBN3BCDBKiFRjbRHjlRYKUqbgANeyANAj/QBzogCvYBpz5Qwj4ACLYAOwsg3JtnCEc4wbcjxNehg4MACGQA6WZQQ1oQDUI0BQkZA203i36wyIMpheQgRzIARSUAxRQgANIZDoc13GRAwbwg1Te3zxiwgaMwx0AADVUQmIY0T9oTCXcQBTYQCGUw/310R1sACS03jp8wjoAmqlwggguwfCBABVwgDi4nRhmxSqaAAQEQw3kozFckd4QgrvwxbhEwZsIECzEwzEAgSBYgDBI5Psg4QtcQG7uFcP9Ay98wBtM2RJMgD8cgW78gwPRACd0ADpklnJVp6mcQRgk2sb9gwvEQURUwTdowBqQARlYQjhIRZPpJYYIyT8o/0M8yAAZeICZcIEfGEMupEE6JBLQ4M8G9IJVIYhVZQ8Y+IM8FIABLEBizGN5boIwAMAb+EMVFAJkISFHyIMoVOCfvYEOfMKb/QUclEB7sdxx1MAbBGhW1MQn5MEX5GMxuIAfrJgduMMkxMEYQAIYmIgFpGD4zUMM5MAjUMD90NdFcCeD3t8y/sMibEN8GoMHzAEBkMMwdAtHGFodAMEG2MwCDJpvIMg/YEAYVCBnGIAfuABvzgBxDEbCiAMhxGNL+EJ/PqkcXMIa/MMXsMBl+EOWmtT9HEheoEMYoIAZ/cMGKMA/VMIzlOU/YMImjGsHrF8VoJ+c1sQLiIJyvcQ4LP/CESCBFNSAPxBBjSgBJXBAOFgAkgbouOzCFwgANghAEcAED0ACLwCCEBwAC9gBC8RBP+mAEqzWD3UCLFDDHqQjX/oDJpyCOAnJn9nANiQrBdwlC4wCOVxWTDiQjgIAOhzXArzDnprK/TlAnV7b/QFBA2BBHwjp0q1AOiLfQJpDDHRC+igBCIQAFwiA+j0KOXTABjjlkGSmAfBDCBjbP3wCAyTaApSrOeDGAmDAP2zCBVgBe9JAfeoJe76At57I/Z2ALAiAGJTAB/Fne4FhtRJqZphAH+TBD0BBMCyiPxgbbnDEG/ACXU7ANRzAEmiCAHwDFYyfC/bBVN0fOlTCBQz/Kl/qaCj+QwTg0RQIgB2AAYDChAJkw2WIAgZESiWQwDnglbj8gwOEwaDGlz/A0C4gZ1xpwRRIgRgKybh8QCBdAhWAAAhE6xowjgnUwQKEwZvZxpAoYRiEADnMxToYwQIoF7m2BBLC7j+cgA+8AKSMAw2cgEYiiK30jQkYwrhQgAD8BQcwb8txAD2c3E8W76KRQB4gbAxAwOVpZHnFBP18QAIYgyZogiQsgTEwyhJQKhI4DxhcxV6MSy38QbIOBxnAAGHMwRsAAgKTQC7UxAIAwd2MQ+cOmkREwZJkgw+IU+1SwAi4ASzKzRSEQzyIoOKZkD8IwNPsklFOwAmMABf4/8MGVEIdyC9v8EAv8IPrOqEBDEAItNm4pmtCkS8kIMKNNU4VnECu4kaMKgCcGcI4nIATcNiTMq8HkEEPlIo5AK5EIGEGBHAMCIAgDCxNmMMb1EAnvM1JiIMA7IEFzEErKEoc+EE9dIEIvAE5nMAAIN0/dAF/1gAHWMIozBwCL8NEnqtmQco/wB4KfMRxUaPVQjIoJIAGWEA1kAHTTQEsHAF5Bag7fIoumUkCnMAEGAMmYMIRmizX8cMmWNVccMEY5IICmEoloG1MhMFdVTEbVIITfkQYV1oOZK+S7gBL1EC/+islsARHzDGh3sZGFgMMXYcIZERzaBy5DManTAgy0P9BOWiALgABLVjDNkCqHbwCDlBsCzBBKaRCh6iGJSTAAazuVSzD1/3Db9FAWlJENivAcW0LwHUACvjDFzynAAgpqLgXFCTuDz/OMkbIkxamHJjBP5iBSlf0kPhDIi7im5UDDdyAyN6BplTC3S1NGMAXEPCBKqwrRUQBIqTipfhDDnDtP8zAcKaADEDJs5bBCARJewJuHw1AopoCDKTj4i6GkUirDwkQ6lhIFQhAKMREHbxBC7gDIODAJAjBK7CAMdyvODQAB8DAOyCwD3ydP7DBC0QB97EnUmdvHYgTPRpAGphBAhRBHxhHGchAOFiCOIxBpoz0u4xLLkHNLm0HBQT/8QjBsEZEZwl0qQlAwii8Qeel2bi6611UglF/QglEQSWQIud9glHnxl4IwwvswQgsgvDdZY9cwiUIrEWQc4C6nj8AAzbAgKb5QbesaKEeyP19nw95wWohwzcgwQAQAdKNA6W5wOg+lgiMwqlKgjusAyTUAvFCjg/cQUb0AgroqA6o5Thks/biYuL+gx3AAAW4AX8ihxZwQCeomhl1dTyOizdAzSV8YQ/IQSqcQU4gUjpYIyQY7zIOADv8A7G8RCWgH+9WQrKaqrVNM2SZSh18wlKecvfpQAO4QgnYNfMGkBcYg2LScW2cABh0ARFUA4/TA270r1ZANzBQmelqATLk/4E5UIAZdN842IA70MaQzMUAJIYBJMZFlAIJs7d7p9sGrHhaqh9Sb4D2GkL3TcA3UEARJEB7BWc4HMMPIBTgToQ5EMI3DJ8HwEMLJUAhfIITtMI/ZMMFQMJHvIQUTJU/bAImLI1O68k4YMLuisAnXAUmqEJCIcERsG8UrPgIuEMUzNZTyYEHfCHxWgrg2kAEMEMzaILQGMMjSIIdqMNKnkoU/EAnWIK7dcIK7IM5XIMkUNh5U4n6JWBNuEA7uMc6rHeStHelLEAFIgE1BGHi5sAGbMJcUAAMuAMQ1ECPgMoUkEE4wKyNd8S4DEADPKkHBIwcGAMfIIITsEAJvMF5ff/EP2jDLIQoCuQCTJCvt2BC90VgYnBcJaRBH50AJ2TcYjbACEFBcSxvy3kBpRiCOVh2MFFDP/SDJOzDfSyBALiDDtQhhkS8ObgCJbiadUMUAuz6EvgC0h2ISIoAHlAyNfy7fOu1MCxNJN3fKWqcd0t7L8zANxwAJwgACCiBde+wJVCKxAeTkLQiN3hBqC9vC9WA1DkB4yz96aVsXy7AHcBEM4NUjDKjAUhByTpAol+EbZxAYuBBA9yAtKog86IEBzzCeUFg0j8ONUwuBdyAL/yBELDAoBKJlYhL97nDDz2N46EGAvzDAcRApDeOPxDAJ9wFAdSnqSxC43fEiyRhB5D/QLVygQ0oCflYQR7UwJRDAfMWvRfEwxdUdrjrCcOZAD14gTjIASWAgGrUQCH0AhSYQQUagiFIasRH4AagQxJ2/dJ8/V3oANKh8LbtBfFHQbQBQRR8gbQM/bN6QQLAFzvbeMSX7wdkFzVYgLXdSZTp6hwQuRdEtiXEQx+gAxesgYi0BF1mZBXHuuXTvM0vwyj7gywAxABHPMr90wElzyZONZSAKGPJ0pQVxt78M/EPY0aNGzl27OjP3BsBXqh4oKKkQTUnfv5pEMAyxAATJvz9cyGqJsYFhP7VHJdmwbh/Qj+ty0goTI6Z/2gIEABqUQ0y1UCcJONhhI6eHrl29WqC/5w/A/6EejX7ZcUUDl5kkJGxAooVDMUkFfpH4M24cf5ODCCLcdEnjf5OCetJ7o6ovXt1kPhXbsaIFDkIfINHha0lDuEauBi612xojv5yXlwXA5YSOSapNhDz7waUFIj+5TAn9B2mf+R09iInlFwa3TlpCP6roMO/KHRgzPnXqgGlqg09eGnA0h9v0dszku5Z8+L3nNw3RoFyjJIX9WW0rBgB5N+BLylA7QbD9MhWpu0Gn0pzOIdTHDGhjjr+IYGCGGLgxB86egABHg5k8CKcFcTJj6yyyBMNPBMM+eeEHyihQg45lKimATma4MMfBIzZYzwgVMEouwVkIS27XkSxCP+jdaT4DiMd9nDCGNq8IYOK6UBIr5oDLPJuQw79uYg0E0CDMsop/zHgi2PCUc8LiDopI4UoTtBAEzsgwagdGvTT5seMxrngP9LQOUWWdB7zAwonKPBHgS9AaEAJCb3gABYQqPlsnPCi3I403rQRYAoSlYAHhB5G8PMfG9RQY5JSyFngjt/2WsCKxfzRkRwe/CnnjfwwQsIdp/b4B4gfyGhIiYaWpGKUz8x5lMPuxiN2MIwMWKMTiMKRASKJRsDjH3a8WYIFJpgwxBxzagqsnL3SMeSUX7xF5x9MfkmEBQluceecXiBoAAQQyFiLAzLigQEa/ZAl1pFgDj2pJBgSaAD/ihv88SQINdDYo4uMzEHVHx5MMIcNUVrVjg8+/DBDgDVuMOgRJagglOBLvPiGgH9dfnkjA5ZYARaIbJZoihhYguQVd+MIpZQeXejWnItEKegfHhJpxV0JhDDEGW5qAKEaKgylcIUEPLMS5g0vMkGDcMRJUgkPQPhmhBFiGJmHONSQIIhWUikhGwM0MueM3UpZB48dahBgBrt0WAIEs02u6l4yajCu68b/vYaDFdiCFtopjrFEgAPsroeFT9EQggUhAGmhBU9w0IUOMz6VQA0hujAnBCx+OAmEtcKEZYp4vjAKNMc5nGlYbmAIZ7qTDE7gmwciqOIfj1mgIwUE5ngl/w4c4piEhVfQQKAfb+BgXgQ8vqiaapOpKOleInhayvf2ORRqABiapZxyS46ZAgQViljHBEhaEAINn7pFM5oBBWXsAxhCoIUzhpCEDDyAUIWT0IQsIQMvXQMjVsKS+7gyJZAYRADi4AAITAYPeFQjbT1wwhciQI285YAPhfBEC/xQwxbQAhSQKJAO4LCEEdSLXr0yGSXI4IUEuCODXOPgEj1Clpqc4Aud0AJE1FM5WGjhfiCoAQSK8Iwh5GAIvxjCEEwwxjNwYgZr+EE1LiEHe01uQrA4xjx+ICscHYuJXRGKCSywJC+MyHwoQlsDYPCDPJhhBhQYgBQQoQBOAIECM/8wQx5qEEQUVeV8JlmLOJbgma1sMI+h1Mg4DgCDecQjHuFQJSxwx8rcXY4MDfjGD7DhFAHU4BsNqA4ZrkKJtYSDleqJxzzE4Q27+UuUZplJTWggsENRgle+IuQIfjCCBkxzBN/owTZh0E0YXLNslzmf1e41gglgpHfJVGd3MPIGBFBhHrmbgiqBOQV7wkIG+azg5NRDBl9ywFAyACYsvCDHFXBgCW5aJ3ca1SiMUOMLRURS8S51omrAYAQJQF4C0jaCb5KQCib0gAeI+EsYXGN9BtDQQtfJvnUAowErWAEqWQkLVU7BEl+a0ATz2VPcWeJ2BV3BMZSgAcF8Bo8s7Yj/XvZiiLIcQRLVCMe9KOGBXp1PiOPM6lVLQsSr9DQBETgBOmdCE6Wu04k5eQM3EjCFeRzjfqy0RM1sOiF9+hR3qLTECk7ZAGDwxCLpPGsHP4kjwCBAKgWdKgdGasKQilOkHuDl5LTAgQZ8YQLj8RZpBDtYJhbtYhsZgCQS4AXL3c+ec61gtFYbj2PINC0NWMIsPjQYHI3DAAbQYFJZytm94NEEUojAF0ZAidXCYguH8sJk2WLaKSx3BEvYhQ5EYIATrOMEhBDBG1TKW8+6r1smyO14j/kGa0TgESMQB4WAGY4p4A6urx0q8TTBjQHQAhpS0K8UdECDRawDu9sdrxIH7UsW8b7hDSIgxHUXYQMb0MDB1JjAPgQAgyKiEq40DQclYFADekTgA1L4BDT8Swjt5na33xVleA2AYAQr+AQxXgQNBjABBEhiCQqCgo6h8IVg0IMZr5gFNY4AiCOM4RM0oIE2bLAO7o73t4ZVcU8aJd4Wm/gELliENmiAXylQYxbbcIc7PvABAgxgANYYAzsS8YawaAedGvrtlENJNDjLqUplTceeydEts/DmzsaiEZX1QufRNI43eJSyoT/7ERoZlhyR3gjRhmXb7Ax60Hdk9KY53enRLNrToRb1qEldalOfGtWpVvWqWd1qVzMxIAA7","width":135,"height":83.81251999999998}]}],"cellFormat":{"borders":{"top":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"left":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"right":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"bottom":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#ffffff","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":234,"preferredWidthType":"Point","cellWidth":234,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1}],"rowFormat":{"height":1,"allowBreakAcrossPages":true,"heightType":"AtLeast","isHeader":false,"borders":{"top":{"color":"#000000","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#000000","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#000000","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#000000","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0}},"gridBefore":0,"gridBeforeWidth":0,"gridBeforeWidthType":"Point","gridAfter":0,"gridAfterWidth":0,"gridAfterWidthType":"Point"}},{"cells":[{"blocks":[{"paragraphFormat":{"textAlignment":"Center","beforeSpacing":6,"lineSpacing":1,"lineSpacingType":"Multiple","styleName":"Heading 1","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{},"imageString":"data:image/gif;base64,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","width":165.60001,"height":102.80999999999999}]}],"cellFormat":{"borders":{"top":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"left":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"right":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"bottom":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#ffffff","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":234,"preferredWidthType":"Point","cellWidth":234,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"leftIndent":36,"beforeSpacing":6,"lineSpacing":1,"lineSpacingType":"Multiple","styleName":"Heading 1","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{},"text":"الطريق-150 "}]},{"paragraphFormat":{"leftIndent":36,"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","styleName":"Normal","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Times New Roman"},"inlines":[{"characterFormat":{"fontSize":12},"text":"المنتج رقم: BK-r93r-44"}]},{"paragraphFormat":{"leftIndent":36,"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","styleName":"Normal","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Times New Roman"},"inlines":[{"characterFormat":{"fontSize":12},"text":"المساحة: 44"}]},{"paragraphFormat":{"leftIndent":36,"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","styleName":"Normal","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Times New Roman"},"inlines":[{"characterFormat":{"fontSize":12},"text":"الوزن: 14"}]},{"paragraphFormat":{"leftIndent":36,"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","styleName":"Normal","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Times New Roman"},"inlines":[{"characterFormat":{"fontSize":12},"text":"السعر: $3,578.27"}]},{"paragraphFormat":{"lineSpacing":1,"lineSpacingType":"Multiple","styleName":"Heading 1","listFormat":{}},"characterFormat":{},"inlines":[]}],"cellFormat":{"borders":{"top":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"left":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"right":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"bottom":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#ffffff","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":234,"preferredWidthType":"Point","cellWidth":234,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1}],"rowFormat":{"height":1,"allowBreakAcrossPages":true,"heightType":"AtLeast","isHeader":false,"borders":{"top":{"color":"#000000","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#000000","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#000000","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#000000","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0}},"gridBefore":0,"gridBeforeWidth":0,"gridBeforeWidthType":"Point","gridAfter":0,"gridAfterWidth":0,"gridAfterWidthType":"Point"}}],"grid":[234,234],"tableFormat":{"borders":{"top":{"color":"#000000","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#000000","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#000000","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#000000","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0}},"shading":{"backgroundColor":"#ffffff","foregroundColor":"empty","textureStyle":"TextureNone"},"cellSpacing":0,"leftIndent":0,"tableAlignment":"Left","topMargin":0,"rightMargin":5.4,"leftMargin":5.4,"bottomMargin":0,"preferredWidth":0,"preferredWidthType":"Auto","bidi":false,"allowAutoFit":true},"description":null,"title":null},{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[]}],"headersFooters":{"header":{"blocks":[{"paragraphFormat":{"listFormat":{}},"characterFormat":{},"inlines":[]}]},"footer":{"blocks":[{"paragraphFormat":{"listFormat":{}},"characterFormat":{},"inlines":[]}]}}}],"characterFormat":{"fontFamily":"Times New Roman"},"paragraphFormat":{"listFormat":{}},"styles":[{"name":"Normal","type":"Paragraph","paragraphFormat":{"afterSpacing":8,"lineSpacing":1.149999976158142,"lineSpacingType":"Multiple","listFormat":{}},"characterFormat":{"fontSize":11,"fontFamily":"Calibri"},"next":"Normal"},{"name":"Heading 1","type":"Paragraph","paragraphFormat":{"beforeSpacing":12,"afterSpacing":0,"outlineLevel":"Level1","listFormat":{}},"characterFormat":{"fontSize":16,"fontFamily":"Calibri Light","fontColor":"#2E74B5FF"},"basedOn":"Normal","next":"Normal"},{"name":"Default Paragraph Font","type":"Character","characterFormat":{}},{"name":"Header","type":"Paragraph","paragraphFormat":{"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{},"tabs":[{"position":234,"deletePosition":0,"tabJustification":"Center","tabLeader":"None"},{"position":468,"deletePosition":0,"tabJustification":"Right","tabLeader":"None"}]},"characterFormat":{},"basedOn":"Normal","link":"Header Char"},{"name":"Header Char","type":"Character","characterFormat":{"fontSize":11,"fontFamily":"Calibri"},"basedOn":"Default Paragraph Font"},{"name":"Footer","type":"Paragraph","paragraphFormat":{"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{},"tabs":[{"position":234,"deletePosition":0,"tabJustification":"Center","tabLeader":"None"},{"position":468,"deletePosition":0,"tabJustification":"Right","tabLeader":"None"}]},"characterFormat":{},"basedOn":"Normal","link":"Footer Char"},{"name":"Footer Char","type":"Character","characterFormat":{"fontSize":11,"fontFamily":"Calibri"},"basedOn":"Default Paragraph Font"},{"name":"List Paragraph","type":"Paragraph","paragraphFormat":{"leftIndent":36,"listFormat":{}},"characterFormat":{},"basedOn":"Normal"},{"name":"Placeholder Text","type":"Character","characterFormat":{"fontColor":"#808080FF"},"basedOn":"Default Paragraph Font"},{"name":"Heading 2","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level2","listFormat":{}},"characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496"},"basedOn":"Normal","link":"Heading 2 Char","next":"Normal"},{"name":"Heading 2 Char","type":"Character","characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496"},"basedOn":"Default Paragraph Font"},{"name":"Heading 3","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level3","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763"},"basedOn":"Normal","link":"Heading 3 Char","next":"Normal"},{"name":"Heading 3 Char","type":"Character","characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763"},"basedOn":"Default Paragraph Font"},{"name":"Heading 4","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level4","listFormat":{}},"characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496"},"basedOn":"Normal","link":"Heading 4 Char","next":"Normal"},{"name":"Heading 4 Char","type":"Character","characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496"},"basedOn":"Default Paragraph Font"},{"name":"Heading 5","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level5","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496"},"basedOn":"Normal","link":"Heading 5 Char","next":"Normal"},{"name":"Heading 5 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496"},"basedOn":"Default Paragraph Font"},{"name":"Heading 6","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level6","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763"},"basedOn":"Normal","link":"Heading 6 Char","next":"Normal"},{"name":"Heading 6 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763"},"basedOn":"Default Paragraph Font"}],"lists":[],"abstractLists":[]}

export let chartDocument:object ={"sections":[{"sectionFormat":{"pageWidth":612,"pageHeight":792,"leftMargin":72,"rightMargin":72,"topMargin":72,"bottomMargin":72,"differentFirstPage":false,"differentOddAndEvenPages":false,"headerDistance":36,"footerDistance":36,"bidi":false},"blocks":[{"paragraphFormat":{"textAlignment":"Center","afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","styleName":"Normal","listFormat":{}},"characterFormat":{"bold":true,"fontSize":12,"fontFamily":"Verdana","fontSizeBidi":12,"fontFamilyBidi":"Verdana"},"inlines":[{"characterFormat":{"bold":true,"fontSize":14,"fontFamily":"Verdana","fontColor":"#17365DFF","styleName":"a","fontSizeBidi":14,"fontFamilyBidi":"Verdana"},"text":"Northwind Management Report"}]},{"paragraphFormat":{"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","styleName":"Normal","listFormat":{}},"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Verdana"},"inlines":[]},{"paragraphFormat":{"afterSpacing":0,"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","styleName":"a","fontSizeBidi":10,"fontFamilyBidi":"Verdana"},"text":"This management report provides information obtained through data analysis, regarding the "},{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","styleName":"a","fontSizeBidi":10,"fontFamilyBidi":"Verdana"},"text":"performance of Northwind Traders. This report will pay particular"},{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","styleName":"a","fontSizeBidi":10,"fontFamilyBidi":"Verdana"},"text":" "},{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","styleName":"a","fontSizeBidi":10,"fontFamilyBidi":"Verdana"},"text":" attention to the "},{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","styleName":"a","fontSizeBidi":10,"fontFamilyBidi":"Verdana"},"text":"best-selling products, of our company. "},{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"The best-selling products of Northwind Traders "},{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"Company as follows: "}]},{"paragraphFormat":{"afterSpacing":0,"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[]},{"rows":[{"cells":[{"blocks":[{"paragraphFormat":{"rightIndent":26.850000381469727,"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"S.No"}]}],"cellFormat":{"borders":{"top":{"color":"#4472C4FF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#4472C4FF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#4472C4FF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#4472C4FF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":13.420000076293945,"preferredWidthType":"Percent","cellWidth":64.71214527422465,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"Product Name"}]}],"cellFormat":{"borders":{"top":{"color":"#4472C4FF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#4472C4FF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#4472C4FF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":48.86000061035156,"preferredWidthType":"Percent","cellWidth":292.87942351880633,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"Sum of Sales(in $)"}]}],"cellFormat":{"borders":{"top":{"color":"#4472C4FF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#4472C4FF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#4472C4FF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#4472C4FF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":37.720001220703125,"preferredWidthType":"Percent","cellWidth":117.95841899993776,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":2}],"rowFormat":{"height":14.399999618530273,"allowBreakAcrossPages":true,"heightType":"Exactly","isHeader":false,"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"vertical":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0}},"gridBefore":0,"gridBeforeWidth":0,"gridBeforeWidthType":"Point","gridAfter":0,"gridAfterWidth":0,"gridAfterWidthType":"Point"}},{"cells":[{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"1"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#D9E2F3FF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":13.420000076293945,"preferredWidthType":"Percent","cellWidth":64.71214527422465,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"Côte de Blaye"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#D9E2F3FF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":48.86000061035156,"preferredWidthType":"Percent","cellWidth":292.87942351880633,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"141.396"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#D9E2F3FF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":37.720001220703125,"preferredWidthType":"Percent","cellWidth":117.95841899993776,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":2}],"rowFormat":{"height":14.399999618530273,"allowBreakAcrossPages":true,"heightType":"Exactly","isHeader":false,"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"vertical":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0}},"gridBefore":0,"gridBeforeWidth":0,"gridBeforeWidthType":"Point","gridAfter":0,"gridAfterWidth":0,"gridAfterWidthType":"Point"}},{"cells":[{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"2"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#FFFFFFFF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":13.420000076293945,"preferredWidthType":"Percent","cellWidth":64.71214527422465,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"Thüringer Rostbratwurst"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#FFFFFFFF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":48.86000061035156,"preferredWidthType":"Percent","cellWidth":292.87942351880633,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"80.368"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#FFFFFFFF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":37.720001220703125,"preferredWidthType":"Percent","cellWidth":117.95841899993776,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":2}],"rowFormat":{"height":14.399999618530273,"allowBreakAcrossPages":true,"heightType":"Exactly","isHeader":false,"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"vertical":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0}},"gridBefore":0,"gridBeforeWidth":0,"gridBeforeWidthType":"Point","gridAfter":0,"gridAfterWidth":0,"gridAfterWidthType":"Point"}},{"cells":[{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"3"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#D9E2F3FF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":13.420000076293945,"preferredWidthType":"Percent","cellWidth":64.71214527422465,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"Raclette Courdavault"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#D9E2F3FF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":48.86000061035156,"preferredWidthType":"Percent","cellWidth":292.87942351880633,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"71.155"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#D9E2F3FF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":37.720001220703125,"preferredWidthType":"Percent","cellWidth":117.95841899993776,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":2}],"rowFormat":{"height":14.399999618530273,"allowBreakAcrossPages":true,"heightType":"Exactly","isHeader":false,"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"vertical":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0}},"gridBefore":0,"gridBeforeWidth":0,"gridBeforeWidthType":"Point","gridAfter":0,"gridAfterWidth":0,"gridAfterWidthType":"Point"}},{"cells":[{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"4"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#FFFFFFFF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":13.420000076293945,"preferredWidthType":"Percent","cellWidth":64.71214527422465,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"Tarte au sucre "}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#FFFFFFFF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":48.86000061035156,"preferredWidthType":"Percent","cellWidth":292.87942351880633,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"47.234"},{"characterFormat":{},"bookmarkType":1,"name":"_GoBack"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#FFFFFFFF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":37.720001220703125,"preferredWidthType":"Percent","cellWidth":117.95841899993776,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":2}],"rowFormat":{"height":14.399999618530273,"allowBreakAcrossPages":true,"heightType":"Exactly","isHeader":false,"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"vertical":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0}},"gridBefore":0,"gridBeforeWidth":0,"gridBeforeWidthType":"Point","gridAfter":0,"gridAfterWidth":0,"gridAfterWidthType":"Point"}},{"cells":[{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{},"bookmarkType":0,"name":"_GoBack"},{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"5"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#D9E2F3FF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":13.420000076293945,"preferredWidthType":"Percent","cellWidth":64.71214527422465,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"Camembert Pierrot "}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#D9E2F3FF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":48.86000061035156,"preferredWidthType":"Percent","cellWidth":292.87942351880633,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"46.825"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#D9E2F3FF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":37.720001220703125,"preferredWidthType":"Percent","cellWidth":117.95841899993776,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":2}],"rowFormat":{"height":14.399999618530273,"allowBreakAcrossPages":true,"heightType":"Exactly","isHeader":false,"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"vertical":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0}},"gridBefore":0,"gridBeforeWidth":0,"gridBeforeWidthType":"Point","gridAfter":0,"gridAfterWidth":0,"gridAfterWidthType":"Point"}},{"cells":[{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"6"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#FFFFFFFF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":13.420000076293945,"preferredWidthType":"Percent","cellWidth":64.71214527422465,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"Gnocchi di nonna Alice"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#FFFFFFFF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":48.86000061035156,"preferredWidthType":"Percent","cellWidth":292.87942351880633,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"42.593"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#FFFFFFFF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":37.720001220703125,"preferredWidthType":"Percent","cellWidth":117.95841899993776,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":2}],"rowFormat":{"height":14.399999618530273,"allowBreakAcrossPages":true,"heightType":"Exactly","isHeader":false,"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"vertical":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0}},"gridBefore":0,"gridBeforeWidth":0,"gridBeforeWidthType":"Point","gridAfter":0,"gridAfterWidth":0,"gridAfterWidthType":"Point"}},{"cells":[{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"7"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#D9E2F3FF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":13.420000076293945,"preferredWidthType":"Percent","cellWidth":64.71214527422465,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"Manjimup Dried Apples"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#D9E2F3FF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":48.86000061035156,"preferredWidthType":"Percent","cellWidth":292.87942351880633,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"41.819"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#D9E2F3FF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":37.720001220703125,"preferredWidthType":"Percent","cellWidth":117.95841899993776,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":2}],"rowFormat":{"height":14.399999618530273,"allowBreakAcrossPages":true,"heightType":"Exactly","isHeader":false,"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"vertical":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0}},"gridBefore":0,"gridBeforeWidth":0,"gridBeforeWidthType":"Point","gridAfter":0,"gridAfterWidth":0,"gridAfterWidthType":"Point"}},{"cells":[{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"8"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#FFFFFFFF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":13.420000076293945,"preferredWidthType":"Percent","cellWidth":64.71214527422465,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"Alice Mutton"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#FFFFFFFF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":48.86000061035156,"preferredWidthType":"Percent","cellWidth":292.87942351880633,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"32.698"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#FFFFFFFF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":37.720001220703125,"preferredWidthType":"Percent","cellWidth":117.95841899993776,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":2}],"rowFormat":{"height":14.399999618530273,"allowBreakAcrossPages":true,"heightType":"Exactly","isHeader":false,"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"vertical":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0}},"gridBefore":0,"gridBeforeWidth":0,"gridBeforeWidthType":"Point","gridAfter":0,"gridAfterWidth":0,"gridAfterWidthType":"Point"}},{"cells":[{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"9"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#D9E2F3FF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":13.420000076293945,"preferredWidthType":"Percent","cellWidth":64.71214527422465,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"Carnarvon Tigers"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#D9E2F3FF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":48.86000061035156,"preferredWidthType":"Percent","cellWidth":292.87942351880633,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"29.171"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#D9E2F3FF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":37.720001220703125,"preferredWidthType":"Percent","cellWidth":117.95841899993776,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":2}],"rowFormat":{"height":14.399999618530273,"allowBreakAcrossPages":true,"heightType":"Exactly","isHeader":false,"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"vertical":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0}},"gridBefore":0,"gridBeforeWidth":0,"gridBeforeWidthType":"Point","gridAfter":0,"gridAfterWidth":0,"gridAfterWidthType":"Point"}},{"cells":[{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"10"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#FFFFFFFF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":13.420000076293945,"preferredWidthType":"Percent","cellWidth":64.71214527422465,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":0},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"Rössle Sauerkraut."}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#FFFFFFFF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":48.86000061035156,"preferredWidthType":"Percent","cellWidth":292.87942351880633,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":1},{"blocks":[{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"25.696"}]}],"cellFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"vertical":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0}},"shading":{"backgroundColor":"#FFFFFFFF","foregroundColor":"empty","textureStyle":"TextureNone"},"preferredWidth":37.720001220703125,"preferredWidthType":"Percent","cellWidth":117.95841899993776,"columnSpan":1,"rowSpan":1,"verticalAlignment":"Top"},"columnIndex":2}],"rowFormat":{"height":14.399999618530273,"allowBreakAcrossPages":true,"heightType":"Exactly","isHeader":false,"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"vertical":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0}},"gridBefore":0,"gridBeforeWidth":0,"gridBeforeWidthType":"Point","gridAfter":0,"gridAfterWidth":0,"gridAfterWidthType":"Point"}}],"grid":[64.71214527422465,292.87942351880633,117.95841899993776],"tableFormat":{"borders":{"top":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"left":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"right":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"bottom":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"diagonalDown":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"diagonalUp":{"color":"#000000","hasNoneStyle":false,"lineStyle":"None","lineWidth":0,"shadow":false,"space":0},"horizontal":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0},"vertical":{"color":"#8EAADBFF","hasNoneStyle":false,"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0}},"shading":{"backgroundColor":"#FFFFFFFF","foregroundColor":"empty","textureStyle":"TextureNone"},"cellSpacing":0,"leftIndent":0,"tableAlignment":"Left","topMargin":0,"rightMargin":0.5,"leftMargin":0.5,"bottomMargin":0,"preferredWidth":475.54998779296875,"preferredWidthType":"Point","bidi":false,"allowAutoFit":true},"description":null,"title":null},{"paragraphFormat":{"afterSpacing":0,"styleName":"Normal","listFormat":{}},"characterFormat":{"fontFamily":"Calibri","fontColor":"#000000FF","fontFamilyBidi":"Calibri"},"inlines":[]},{"paragraphFormat":{"afterSpacing":0,"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"The best-selling product of the company is Cote de Blaye, being part of the Beverages "},{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"text":"category. The contribution of this product to the sum of our sales is $ 141.396."}]},{"paragraphFormat":{"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","styleName":"Normal","listFormat":{}},"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"inlines":[]},{"paragraphFormat":{"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","styleName":"Normal","listFormat":{}},"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Times New Roman"},"inlines":[]},{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[{"characterFormat":{},"chartLegend":{"position":"Right","chartTitleArea":{"fontName":"+mn-lt","fontSize":9,"layout":{"layoutX":0,"layoutY":0},"dataFormat":{"fill":{"foreColor":"000000","rgb":"#000000"},"line":{"color":"808080","rgb":"#808080"}}}},"chartTitleArea":{"fontName":"+mn-lt","fontSize":14,"layout":{"layoutX":0,"layoutY":0},"dataFormat":{"fill":{"foreColor":"000000","rgb":"#000000"},"line":{"color":"000000","rgb":"#000000"}}},"chartArea":{"foreColor":"#FFFFFFFF"},"plotArea":{"foreColor":"#000000FF"},"chartCategory":[{"chartData":[{"yValue":141.396}],"categoryXName":"Côte de Blaye"},{"chartData":[{"yValue":80.368}],"categoryXName":"Thüringer Rostbratwurst"},{"chartData":[{"yValue":71.155}],"categoryXName":"Raclette Courdavault"},{"chartData":[{"yValue":47.234}],"categoryXName":"Tarte au sucre"},{"chartData":[{"yValue":46.825}],"categoryXName":"Camembert Pierrot"},{"chartData":[{"yValue":42.593}],"categoryXName":"Gnocchi di nonna Alice"},{"chartData":[{"yValue":41.819}],"categoryXName":"Manjimup Dried Apples"},{"chartData":[{"yValue":32.698}],"categoryXName":"Alice Mutton"},{"chartData":[{"yValue":29.171}],"categoryXName":"Carnarvon Tigers"},{"chartData":[{"yValue":25.696}],"categoryXName":"Rössle Sauerkraut"}],"chartSeries":[{"dataPoints":[{"fill":{"foreColor":"4472c4","rgb":"#4472c4"},"line":{"color":"ffffff","rgb":"#ffffff"}},{"fill":{"foreColor":"ed7d31","rgb":"#ed7d31"},"line":{"color":"ffffff","rgb":"#ffffff"}},{"fill":{"foreColor":"a5a5a5","rgb":"#a5a5a5"},"line":{"color":"ffffff","rgb":"#ffffff"}},{"fill":{"foreColor":"ffc000","rgb":"#ffc000"},"line":{"color":"ffffff","rgb":"#ffffff"}},{"fill":{"foreColor":"5b9bd5","rgb":"#5b9bd5"},"line":{"color":"ffffff","rgb":"#ffffff"}},{"fill":{"foreColor":"70ad47","rgb":"#70ad47"},"line":{"color":"ffffff","rgb":"#ffffff"}},{"fill":{"foreColor":"264379","rgb":"#264379"},"line":{"color":"ffffff","rgb":"#ffffff"}},{"fill":{"foreColor":"9f480e","rgb":"#9f480e"},"line":{"color":"ffffff","rgb":"#ffffff"}},{"fill":{"foreColor":"636363","rgb":"#636363"},"line":{"color":"ffffff","rgb":"#ffffff"}},{"fill":{"foreColor":"9a7200","rgb":"#9a7200"},"line":{"color":"ffffff","rgb":"#ffffff"}}],"seriesName":"Sales"}],"chartPrimaryCategoryAxis":{"chartTitle":null,"chartTitleArea":{"layout":{},"dataFormat":{"fill":{},"line":{}}},"categoryType":"Automatic","fontSize":11,"fontName":"Calibri","numberFormat":"General","maximumValue":0,"minimumValue":0,"majorUnit":0,"hasMajorGridLines":false,"hasMinorGridLines":false,"majorTickMark":"TickMark_Outside","minorTickMark":"TickMark_None","tickLabelPosition":"TickLabelPosition_NextToAxis"},"chartPrimaryValueAxis":{"chartTitle":null,"chartTitleArea":{"layout":{},"dataFormat":{"fill":{},"line":{}}},"fontSize":11,"fontName":"Calibri","maximumValue":0,"minimumValue":0,"majorUnit":0,"hasMajorGridLines":false,"hasMinorGridLines":false,"majorTickMark":"TickMark_Outside","minorTickMark":"TickMark_None","tickLabelPosition":"TickLabelPosition_NextToAxis"},"chartTitle":"Best Selling Products","chartType":"Pie","gapWidth":0,"overlap":0,"height":225,"width":432}]},{"paragraphFormat":{"styleName":"Normal","listFormat":{}},"characterFormat":{},"inlines":[]},{"paragraphFormat":{"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","styleName":"Normal","listFormat":{}},"characterFormat":{"fontSize":10,"fontFamily":"Verdana","fontSizeBidi":10,"fontFamilyBidi":"Verdana"},"inlines":[{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","styleName":"a","fontSizeBidi":10,"fontFamilyBidi":"Verdana"},"text":"According to the above chart, the total count of the selling products is 24 and the average "},{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","styleName":"a","fontSizeBidi":10,"fontFamilyBidi":"Verdana"},"text":"sales attributed to this product is $ 5.891 with highest sale $ 15.810 in the month of May in "},{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","styleName":"a","fontSizeBidi":10,"fontFamilyBidi":"Verdana"},"text":"2014. In the same year, in the month of March the same product reached the amount of $ "},{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","styleName":"a","fontSizeBidi":10,"fontFamilyBidi":"Verdana"},"text":"15.019. These were the highest sales of the product among the other products for the year "},{"characterFormat":{"fontSize":10,"fontFamily":"Verdana","styleName":"a","fontSizeBidi":10,"fontFamilyBidi":"Verdana"},"text":"2014."}]}],"headersFooters":{}}],"characterFormat":{"bold":false,"italic":false,"fontSize":11,"fontFamily":"Calibri","underline":"None","strikethrough":"None","baselineAlignment":"Normal","highlightColor":"NoColor","fontColor":"#000000","fontSizeBidi":11,"fontFamilyBidi":"Calibri"},"paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":0,"afterSpacing":8,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","listFormat":{},"bidi":false},"defaultTabWidth":36,"styles":[{"name":"Normal","type":"Paragraph","paragraphFormat":{"listFormat":{}},"characterFormat":{},"next":"Normal"},{"name":"Heading 1","type":"Paragraph","paragraphFormat":{"beforeSpacing":12,"afterSpacing":3,"lineSpacing":1,"lineSpacingType":"Multiple","outlineLevel":"Level1","listFormat":{}},"characterFormat":{"bold":true,"fontSize":16,"fontFamily":"Arial","boldBidi":true,"fontSizeBidi":16,"fontFamilyBidi":"Arial"},"basedOn":"Normal","link":"Heading 1 Char","next":"Normal"},{"name":"Heading 1 Char","type":"Character","characterFormat":{"bold":true,"fontSize":16,"fontFamily":"Arial","boldBidi":true,"fontSizeBidi":16,"fontFamilyBidi":"Arial"},"basedOn":"Default Paragraph Font"},{"name":"Default Paragraph Font","type":"Character","characterFormat":{}},{"name":"Balloon Text","type":"Paragraph","paragraphFormat":{"afterSpacing":0,"lineSpacing":1,"lineSpacingType":"Multiple","listFormat":{}},"characterFormat":{"fontSize":9,"fontFamily":"Segoe UI","fontSizeBidi":9,"fontFamilyBidi":"Segoe UI"},"basedOn":"Normal","link":"Balloon Text Char"},{"name":"Balloon Text Char","type":"Character","characterFormat":{"fontSize":9,"fontFamily":"Segoe UI","fontSizeBidi":9,"fontFamilyBidi":"Segoe UI"},"basedOn":"Default Paragraph Font"},{"name":"a","type":"Character","characterFormat":{},"basedOn":"Default Paragraph Font"},{"name":"Heading 2","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level2","listFormat":{}},"characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496"},"basedOn":"Normal","link":"Heading 2 Char","next":"Normal"},{"name":"Heading 2 Char","type":"Character","characterFormat":{"fontSize":13,"fontFamily":"Calibri Light","fontColor":"#2F5496"},"basedOn":"Default Paragraph Font"},{"name":"Heading 3","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level3","listFormat":{}},"characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763"},"basedOn":"Normal","link":"Heading 3 Char","next":"Normal"},{"name":"Heading 3 Char","type":"Character","characterFormat":{"fontSize":12,"fontFamily":"Calibri Light","fontColor":"#1F3763"},"basedOn":"Default Paragraph Font"},{"name":"Heading 4","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level4","listFormat":{}},"characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496"},"basedOn":"Normal","link":"Heading 4 Char","next":"Normal"},{"name":"Heading 4 Char","type":"Character","characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496"},"basedOn":"Default Paragraph Font"},{"name":"Heading 5","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level5","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496"},"basedOn":"Normal","link":"Heading 5 Char","next":"Normal"},{"name":"Heading 5 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496"},"basedOn":"Default Paragraph Font"},{"name":"Heading 6","type":"Paragraph","paragraphFormat":{"leftIndent":0,"rightIndent":0,"firstLineIndent":0,"textAlignment":"Left","beforeSpacing":2,"afterSpacing":0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level6","listFormat":{}},"characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763"},"basedOn":"Normal","link":"Heading 6 Char","next":"Normal"},{"name":"Heading 6 Char","type":"Character","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763"},"basedOn":"Default Paragraph Font"}],"lists":[],"abstractLists":[]} ;

export let dataProtection:object = {
    "sections": [
        {
            "blocks": [
                {
                    "characterFormat": {
                        "fontSize": 14.0,
                        "fontSizeBidi": 14.0
                    },
                    "paragraphFormat": {
                        "lineSpacing": 32.0,
                        "lineSpacingType": "Exactly",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Name",
                            "characterFormat": {
                                "bold": true,
                                "fontSize": 14.0,
                                "boldBidi": true,
                                "fontSizeBidi": 14.0
                            }
                        },
                        {
                            "text": ":",
                            "characterFormat": {
                                "fontSize": 14.0,
                                "fontSizeBidi": 14.0
                            }
                        }
                    ]
                },
                {
                    "rows": [
                        {
                            "rowFormat": {
                                "allowBreakAcrossPages": true,
                                "isHeader": false,
                                "height": 20.0,
                                "heightType": "AtLeast",
                                "borders": {
                                    "left": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "right": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "top": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "bottom": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "vertical": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "horizontal": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "diagonalDown": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "diagonalUp": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    }
                                }
                            },
                            "cells": [
                                {
                                    "blocks": [
                                        {
                                            "paragraphFormat": {
                                                "styleName": "Normal"
                                            },
                                            "inlines": [
                                                {
                                                    "editRangeId": "1348272392",
                                                    "columnFirst": 0,
                                                    "columnLast": 0,
                                                    "user": "engineer@mycompany.com"
                                                },
                                                {
                                                    "text": "Enter name"
                                                },
                                                {
                                                    "editRangeId": "1348272392",
                                                    "editableRangeStart": {
                                                        "editRangeId": "1348272392",
                                                        "columnFirst": 0,
                                                        "columnLast": 0,
                                                        "user": "engineer@mycompany.com"
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "cellFormat": {
                                        "columnSpan": 1,
                                        "rowSpan": 1,
                                        "preferredWidth": 467.5,
                                        "preferredWidthType": "Point",
                                        "verticalAlignment": "Center",
                                        "isSamePaddingAsTable": true,
                                        "borders": {
                                            "left": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "right": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "top": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "bottom": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "vertical": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "horizontal": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "diagonalDown": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "diagonalUp": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    ],
                    "title": null,
                    "description": null,
                    "tableFormat": {
                        "allowAutoFit": true,
                        "leftIndent": 0.0,
                        "tableAlignment": "Left",
                        "preferredWidthType": "Auto",
                        "borders": {
                            "left": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "right": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "top": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "bottom": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "vertical": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "horizontal": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "diagonalDown": {
                                "lineStyle": "None",
                                "lineWidth": 0.0,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "diagonalUp": {
                                "lineStyle": "None",
                                "lineWidth": 0.0,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            }
                        },
                        "bidi": false
                    }
                },
                {
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 14.0,
                        "boldBidi": true,
                        "fontSizeBidi": 14.0
                    },
                    "paragraphFormat": {
                        "lineSpacing": 32.0,
                        "lineSpacingType": "Exactly",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Designation:",
                            "characterFormat": {
                                "bold": true,
                                "fontSize": 14.0,
                                "boldBidi": true,
                                "fontSizeBidi": 14.0
                            }
                        }
                    ]
                },
                {
                    "rows": [
                        {
                            "rowFormat": {
                                "allowBreakAcrossPages": true,
                                "isHeader": false,
                                "height": 20.0,
                                "heightType": "AtLeast",
                                "borders": {
                                    "left": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "right": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "top": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "bottom": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "vertical": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "horizontal": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "diagonalDown": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "diagonalUp": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    }
                                }
                            },
                            "cells": [
                                {
                                    "blocks": [
                                        {
                                            "paragraphFormat": {
                                                "styleName": "Normal"
                                            },
                                            "inlines": [
                                                {
                                                    "editRangeId": "808933422",
                                                    "columnFirst": 0,
                                                    "columnLast": 0,
                                                    "user": "engineer@mycompany.com"
                                                },
                                                {
                                                    "text": "Enter designation"
                                                },
                                                {
                                                    "editRangeId": "808933422",
                                                    "editableRangeStart": {
                                                        "editRangeId": "808933422",
                                                        "columnFirst": 0,
                                                        "columnLast": 0,
                                                        "user": "engineer@mycompany.com"
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "cellFormat": {
                                        "columnSpan": 1,
                                        "rowSpan": 1,
                                        "preferredWidth": 467.5,
                                        "preferredWidthType": "Point",
                                        "verticalAlignment": "Center",
                                        "isSamePaddingAsTable": true,
                                        "borders": {
                                            "left": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "right": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "top": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "bottom": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "vertical": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "horizontal": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "diagonalDown": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "diagonalUp": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    ],
                    "title": null,
                    "description": null,
                    "tableFormat": {
                        "allowAutoFit": true,
                        "leftIndent": 0.0,
                        "tableAlignment": "Left",
                        "preferredWidthType": "Auto",
                        "borders": {
                            "left": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "right": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "top": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "bottom": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "vertical": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "horizontal": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "diagonalDown": {
                                "lineStyle": "None",
                                "lineWidth": 0.0,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "diagonalUp": {
                                "lineStyle": "None",
                                "lineWidth": 0.0,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            }
                        },
                        "bidi": false
                    }
                },
                {
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 14.0,
                        "boldBidi": true,
                        "fontSizeBidi": 14.0
                    },
                    "paragraphFormat": {
                        "lineSpacing": 32.0,
                        "lineSpacingType": "Exactly",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Email Address:",
                            "characterFormat": {
                                "bold": true,
                                "fontSize": 14.0,
                                "boldBidi": true,
                                "fontSizeBidi": 14.0
                            }
                        },
                        {
                            "name": "_GoBack",
                            "bookmarkType": 0
                        },
                        {
                            "name": "_GoBack",
                            "bookmarkType": 1
                        }
                    ]
                },
                {
                    "rows": [
                        {
                            "rowFormat": {
                                "allowBreakAcrossPages": true,
                                "isHeader": false,
                                "height": 20.0,
                                "heightType": "AtLeast",
                                "borders": {
                                    "left": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "right": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "top": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "bottom": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "vertical": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "horizontal": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "diagonalDown": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "diagonalUp": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    }
                                }
                            },
                            "cells": [
                                {
                                    "blocks": [
                                        {
                                            "paragraphFormat": {
                                                "styleName": "Normal"
                                            },
                                            "inlines": [
                                                {
                                                    "editRangeId": "810441411",
                                                    "columnFirst": 0,
                                                    "columnLast": 0,
                                                    "user": "engineer@mycompany.com"
                                                },
                                                {
                                                    "text": "Enter email address"
                                                },
                                                {
                                                    "editRangeId": "810441411",
                                                    "editableRangeStart": {
                                                        "editRangeId": "810441411",
                                                        "columnFirst": 0,
                                                        "columnLast": 0,
                                                        "user": "engineer@mycompany.com"
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "cellFormat": {
                                        "columnSpan": 1,
                                        "rowSpan": 1,
                                        "preferredWidth": 467.5,
                                        "preferredWidthType": "Point",
                                        "verticalAlignment": "Center",
                                        "isSamePaddingAsTable": true,
                                        "borders": {
                                            "left": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "right": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "top": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "bottom": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "vertical": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "horizontal": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "diagonalDown": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "diagonalUp": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    ],
                    "title": null,
                    "description": null,
                    "tableFormat": {
                        "allowAutoFit": true,
                        "leftIndent": 0.0,
                        "tableAlignment": "Left",
                        "preferredWidthType": "Auto",
                        "borders": {
                            "left": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "right": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "top": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "bottom": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "vertical": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "horizontal": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "diagonalDown": {
                                "lineStyle": "None",
                                "lineWidth": 0.0,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "diagonalUp": {
                                "lineStyle": "None",
                                "lineWidth": 0.0,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            }
                        },
                        "bidi": false
                    }
                },
                {
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 14.0,
                        "boldBidi": true,
                        "fontSizeBidi": 14.0
                    },
                    "paragraphFormat": {
                        "lineSpacing": 32.0,
                        "lineSpacingType": "Exactly",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Feedbacks:",
                            "characterFormat": {
                                "bold": true,
                                "fontSize": 14.0,
                                "boldBidi": true,
                                "fontSizeBidi": 14.0
                            }
                        }
                    ]
                },
                {
                    "rows": [
                        {
                            "rowFormat": {
                                "allowBreakAcrossPages": true,
                                "isHeader": false,
                                "height": 20.0,
                                "heightType": "AtLeast",
                                "borders": {
                                    "left": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "right": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "top": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "bottom": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "vertical": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "horizontal": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "diagonalDown": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "diagonalUp": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    }
                                }
                            },
                            "cells": [
                                {
                                    "blocks": [
                                        {
                                            "paragraphFormat": {
                                                "styleName": "Normal"
                                            },
                                            "inlines": [
                                                {
                                                    "editRangeId": "1016946268",
                                                    "columnFirst": 0,
                                                    "columnLast": 0,
                                                    "user": "manager@mycompany.com"
                                                },
                                                {
                                                    "text": "Enter the feedbacks"
                                                },
                                                {
                                                    "editRangeId": "1016946268",
                                                    "editableRangeStart": {
                                                        "editRangeId": "1016946268",
                                                        "columnFirst": 0,
                                                        "columnLast": 0,
                                                        "user": "manager@mycompany.com"
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "cellFormat": {
                                        "columnSpan": 1,
                                        "rowSpan": 1,
                                        "preferredWidth": 467.5,
                                        "preferredWidthType": "Point",
                                        "verticalAlignment": "Center",
                                        "isSamePaddingAsTable": true,
                                        "borders": {
                                            "left": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "right": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "top": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "bottom": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "vertical": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "horizontal": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "diagonalDown": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "diagonalUp": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    ],
                    "title": null,
                    "description": null,
                    "tableFormat": {
                        "allowAutoFit": true,
                        "leftIndent": 0.0,
                        "tableAlignment": "Left",
                        "preferredWidthType": "Auto",
                        "borders": {
                            "left": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "right": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "top": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "bottom": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "vertical": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "horizontal": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "diagonalDown": {
                                "lineStyle": "None",
                                "lineWidth": 0.0,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "diagonalUp": {
                                "lineStyle": "None",
                                "lineWidth": 0.0,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            }
                        },
                        "bidi": false
                    }
                },
                {
                    "characterFormat": {
                        "bold": true,
                        "fontSize": 14.0,
                        "boldBidi": true,
                        "fontSizeBidi": 14.0
                    },
                    "paragraphFormat": {
                        "lineSpacing": 32.0,
                        "lineSpacingType": "Exactly",
                        "styleName": "Normal"
                    },
                    "inlines": [
                        {
                            "text": "Review comments:",
                            "characterFormat": {
                                "bold": true,
                                "fontSize": 14.0,
                                "boldBidi": true,
                                "fontSizeBidi": 14.0
                            }
                        }
                    ]
                },
                {
                    "rows": [
                        {
                            "rowFormat": {
                                "allowBreakAcrossPages": true,
                                "isHeader": false,
                                "height": 20.0,
                                "heightType": "AtLeast",
                                "borders": {
                                    "left": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "right": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "top": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "bottom": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "vertical": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "horizontal": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "diagonalDown": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    },
                                    "diagonalUp": {
                                        "lineStyle": "None",
                                        "lineWidth": 0.0,
                                        "shadow": false,
                                        "space": 0.0,
                                        "hasNoneStyle": false
                                    }
                                }
                            },
                            "cells": [
                                {
                                    "blocks": [
                                        {
                                            "paragraphFormat": {
                                                "styleName": "Normal"
                                            },
                                            "inlines": [
                                                {
                                                    "editRangeId": "1373703080",
                                                    "columnFirst": 0,
                                                    "columnLast": 0,
                                                    "user": "manager@mycompany.com"
                                                },
                                                {
                                                    "text": "Enter the comments"
                                                },
                                                {
                                                    "editRangeId": "1373703080",
                                                    "editableRangeStart": {
                                                        "editRangeId": "1373703080",
                                                        "columnFirst": 0,
                                                        "columnLast": 0,
                                                        "user": "manager@mycompany.com"
                                                    }
                                                }
                                            ]
                                        }
                                    ],
                                    "cellFormat": {
                                        "columnSpan": 1,
                                        "rowSpan": 1,
                                        "preferredWidth": 467.5,
                                        "preferredWidthType": "Point",
                                        "verticalAlignment": "Center",
                                        "isSamePaddingAsTable": true,
                                        "borders": {
                                            "left": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "right": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "top": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "bottom": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "vertical": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "horizontal": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "diagonalDown": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            },
                                            "diagonalUp": {
                                                "lineStyle": "None",
                                                "lineWidth": 0.0,
                                                "shadow": false,
                                                "space": 0.0,
                                                "hasNoneStyle": false
                                            }
                                        }
                                    }
                                }
                            ]
                        }
                    ],
                    "title": null,
                    "description": null,
                    "tableFormat": {
                        "allowAutoFit": true,
                        "leftIndent": 0.0,
                        "tableAlignment": "Left",
                        "preferredWidthType": "Auto",
                        "borders": {
                            "left": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "right": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "top": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "bottom": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "vertical": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "horizontal": {
                                "lineStyle": "Single",
                                "lineWidth": 0.5,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "diagonalDown": {
                                "lineStyle": "None",
                                "lineWidth": 0.0,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            },
                            "diagonalUp": {
                                "lineStyle": "None",
                                "lineWidth": 0.0,
                                "shadow": false,
                                "space": 0.0,
                                "hasNoneStyle": false
                            }
                        },
                        "bidi": false
                    }
                },
                {
                    "paragraphFormat": {
                        "styleName": "Normal"
                    },
                    "inlines": []
                }
            ],
            "headersFooters": {
                "header": {
                    "blocks": [
                        {
                            "paragraphFormat": {
                                "styleName": "Header"
                            },
                            "inlines": [
                                {
                                    "text": "Employee’s Details "
                                }
                            ]
                        }
                    ]
                }
            },
            "sectionFormat": {
                "headerDistance": 36.0,
                "footerDistance": 36.0,
                "pageWidth": 612.0,
                "pageHeight": 792.0,
                "leftMargin": 72.0,
                "rightMargin": 72.0,
                "topMargin": 72.0,
                "bottomMargin": 72.0,
                "differentFirstPage": false,
                "differentOddAndEvenPages": false,
                "bidi": false
            }
        }
    ],
    "characterFormat": {
        "fontSize": 11.0,
        "fontFamily": "Calibri",
        "fontSizeBidi": 11.0,
        "fontFamilyBidi": "Calibri"
    },
    "paragraphFormat": {
        "afterSpacing": 8.0,
        "lineSpacing": 1.0791666507720947,
        "lineSpacingType": "Multiple"
    },
    "background": {
        "color": "#FFFFFFFF"
    },
    "styles": [
        {
            "type": "Paragraph",
            "name": "Normal",
            "next": "Normal"
        },
        {
            "type": "Character",
            "name": "Default Paragraph Font"
        },
        {
            "type": "Paragraph",
            "name": "List Paragraph",
            "basedOn": "Normal",
            "paragraphFormat": {
                "leftIndent": 36.0,
                "contextualSpacing": true
            }
        },
        {
            "type": "Paragraph",
            "name": "Header",
            "basedOn": "Normal",
            "next": "Normal",
            "link": "Header Char",
            "paragraphFormat": {
                "afterSpacing": 0.0,
                "lineSpacing": 1.0,
                "lineSpacingType": "Multiple",
                "tabs": [
                    {
                        "tabJustification": "Center",
                        "position": 234.0,
                        "tabLeader": "None",
                        "deletePosition": 0.0
                    },
                    {
                        "tabJustification": "Right",
                        "position": 468.0,
                        "tabLeader": "None",
                        "deletePosition": 0.0
                    }
                ]
            }
        },
        {
            "type": "Character",
            "name": "Header Char",
            "basedOn": "Default Paragraph Font"
        },
        {
            "type": "Paragraph",
            "name": "Footer",
            "basedOn": "Normal",
            "link": "Footer Char",
            "paragraphFormat": {
                "afterSpacing": 0.0,
                "lineSpacing": 1.0,
                "lineSpacingType": "Multiple",
                "tabs": [
                    {
                        "tabJustification": "Center",
                        "position": 234.0,
                        "tabLeader": "None",
                        "deletePosition": 0.0
                    },
                    {
                        "tabJustification": "Right",
                        "position": 468.0,
                        "tabLeader": "None",
                        "deletePosition": 0.0
                    }
                ]
            }
        },
        {
            "type": "Character",
            "name": "Footer Char",
            "basedOn": "Default Paragraph Font"
        }
    ],
    "defaultTabWidth": 36.0,
    "formatting": false,
    "protectionType": "ReadOnly",
    "enforcement": true,
    "hashValue": "TQGuJuLceQCe234Ygx4q6NFgHpRMfi1hjFTojyKzbQOkwk+ckEM9CjNIdkiUhSR/e/7sfMxO4sbPcg/DBzztMg==",
    "saltValue": "FXbkr1RtDIIIZfwlM71dMg=="
};
export let comments:object ={"sections":[{"blocks":[{"paragraphFormat":{"styleName":"Title"},"inlines":[{"text":"The Giant Panda"}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"The "},{"commentId":"Comment_e5affde3-0e01-48df-938c-071a057c6f8e","commentCharacterType":0},{"text":"giant panda"},{"commentId":"Comment_e5affde3-0e01-48df-938c-071a057c6f8e","commentCharacterType":1},{"text":", which only lives in China outside of captivity, has captured the hearts of people of all ages across the globe. From their furry black and white bodies to their shy and docile nature, they are considered one of the world's most loved animals."}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"imageString":"data:image/jpeg;base64,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","length":1,"width":467.45001220703125,"height":262.75,"isInlineImage":true,"isMetaFile":false}]},{"paragraphFormat":{"afterSpacing":0.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","styleName":"Normal"},"inlines":[{"commentId":"Comment_b99ebea3-29b7-4d2c-8410-ce8fecb2c30d","commentCharacterType":0},{"commentId":"Comment_dd401ff7-c247-45e8-9d4e-fe9f3fc45603","commentCharacterType":0},{"commentId":"Comment_c1623cbf-5221-4da7-9158-539d7748f786","commentCharacterType":0},{"text":"Quick Fact","characterFormat":{"bold":true}},{"commentId":"Comment_b99ebea3-29b7-4d2c-8410-ce8fecb2c30d","commentCharacterType":1},{"commentId":"Comment_dd401ff7-c247-45e8-9d4e-fe9f3fc45603","commentCharacterType":1},{"commentId":"Comment_c1623cbf-5221-4da7-9158-539d7748f786","commentCharacterType":1},{"text":" The estimated number of giant pandas in the wild varies between 1,500 and 3,000."}]},{"paragraphFormat":{"styleName":"Heading 1"},"inlines":[{"text":"Intriguing Giant Panda Mysteries"}]},{"paragraphFormat":{"afterSpacing":6.0,"styleName":"Normal"},"inlines":[{"text":"While most adore their fluffy fur and round heads, which help give them their cuddly bear quality, others are fascinated by the many mysteries of the giant panda. Did you know that the giant panda "},{"commentId":"Comment_875b5153-42a7-4f48-930b-f4d4ab5df625","commentCharacterType":0},{"commentId":"Comment_6f94599b-64a1-4652-a3c4-a57d3e13ae88","commentCharacterType":0},{"text":"may "},{"text":"actually be"},{"text":" a"},{"commentId":"Comment_875b5153-42a7-4f48-930b-f4d4ab5df625","commentCharacterType":1},{"commentId":"Comment_6f94599b-64a1-4652-a3c4-a57d3e13ae88","commentCharacterType":1},{"text":" raccoon, they have an opposable pseudo thumb, and that they’re technically a carnivore even though their diet is primarily vegetarian? These things and more have baffled scientists and naturalists for hundreds of years. "}]},{"paragraphFormat":{"styleName":"Heading 2"},"inlines":[{"text":"Opposable Pseudo Thumb"}]},{"paragraphFormat":{"afterSpacing":6.0,"styleName":"Normal"},"inlines":[{"text":"A characteristic of the giant panda that has mystified scientists is their movable, elongated wrist bone that acts like an opposable thumb. This human-like quality that helps give them even more of a cuddly-bear appearance enables the giant panda to pick up objects and even eat sitting up. "}]},{"paragraphFormat":{"afterSpacing":6.0,"styleName":"Normal"},"inlines":[{"text":"Quick Fact","characterFormat":{"bold":true}},{"text":" Giant pandas have five clawed toes and one pseudo thumb."}]},{"paragraphFormat":{"afterSpacing":6.0,"styleName":"Normal"},"inlines":[{"text":"Their pseudo thumb, along with pads of skin, help the giant panda strip the more nutritious small bamboo shoots and leaves while holding the stalk in their mouth."}]},{"paragraphFormat":{"styleName":"Heading 2"},"inlines":[{"text":"Small Bear or Large Raccoon?"}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"Giant pandas are generally referred to as bears and are typically called panda bears rather than giant pandas. Though we may think they look like bears, there has been a great deal of discussion for decades about where giant pandas fit in the animal kingdom. Much of the debate has been whether they are more closely related to the red panda, once thought to be a member of the raccoon family, than the bear family."}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"While a giant panda has a body that resembles a small bear and climbs trees like a bear, it also has several characteristics in common with the red panda. For example, both giant pandas and red pandas eat bamboo and have the same pseudo thumb. The table below lists the main characteristics the giant panda shares with bears and red pandas."}]},{"rows":[{"rowFormat":{"allowBreakAcrossPages":true,"isHeader":false,"height":18.0,"heightType":"AtLeast","borders":{"left":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"right":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"top":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"bottom":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"vertical":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"horizontal":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"leftMargin":5.75,"rightMargin":5.75},"cells":[{"blocks":[{"characterFormat":{"bold":true,"fontColor":"#FFFFFFFF"},"paragraphFormat":{"textAlignment":"Center","styleName":"Normal"},"inlines":[{"text":"Bear","characterFormat":{"bold":true,"fontColor":"#FFFFFFFF"}}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":50.0,"preferredWidthType":"Percent","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"Single","lineWidth":1.0,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#00CC66FF"},"right":{"lineStyle":"Single","lineWidth":1.0,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#00CC66FF"},"top":{"lineStyle":"Single","lineWidth":1.0,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#00CC66FF"},"bottom":{"lineStyle":"Single","lineWidth":1.0,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#00CC66FF"},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone","backgroundColor":"#00CC66FF"}}},{"blocks":[{"characterFormat":{"bold":true,"fontColor":"#FFFFFFFF"},"paragraphFormat":{"textAlignment":"Center","styleName":"Normal"},"inlines":[{"text":"Red Panda","characterFormat":{"bold":true,"fontColor":"#FFFFFFFF"}}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":50.0,"preferredWidthType":"Percent","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"Single","lineWidth":1.0,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#00CC66FF"},"right":{"lineStyle":"Single","lineWidth":1.0,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#00CC66FF"},"top":{"lineStyle":"Single","lineWidth":1.0,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#00CC66FF"},"bottom":{"lineStyle":"Single","lineWidth":1.0,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#00CC66FF"},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone","backgroundColor":"#00CC66FF"}}}]},{"rowFormat":{"allowBreakAcrossPages":true,"isHeader":false,"height":18.0,"heightType":"AtLeast","borders":{"left":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"right":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"top":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"bottom":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"vertical":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"horizontal":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"leftMargin":5.75,"rightMargin":5.75},"cells":[{"blocks":[{"paragraphFormat":{"textAlignment":"Center","styleName":"Normal"},"inlines":[{"text":"Shape"}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":50.0,"preferredWidthType":"Percent","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"Single","lineWidth":1.0,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#00CC66FF"},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone","backgroundColor":"#FFFFFFFF"}}},{"blocks":[{"paragraphFormat":{"textAlignment":"Center","styleName":"Normal"},"inlines":[{"text":"Diet"}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":50.0,"preferredWidthType":"Percent","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"Single","lineWidth":1.0,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#00CC66FF"},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone","backgroundColor":"#FFFFFFFF"}}}]},{"rowFormat":{"allowBreakAcrossPages":true,"isHeader":false,"height":18.0,"heightType":"AtLeast","borders":{"left":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"right":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"top":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"bottom":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"vertical":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"horizontal":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"leftMargin":5.75,"rightMargin":5.75},"cells":[{"blocks":[{"paragraphFormat":{"textAlignment":"Center","styleName":"Normal"},"inlines":[{"text":"Size"}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":50.0,"preferredWidthType":"Percent","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone","backgroundColor":"#FFFFFFFF"}}},{"blocks":[{"paragraphFormat":{"textAlignment":"Center","styleName":"Normal"},"inlines":[{"text":"Paws"}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":50.0,"preferredWidthType":"Percent","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone","backgroundColor":"#FFFFFFFF"}}}]},{"rowFormat":{"allowBreakAcrossPages":true,"isHeader":false,"height":18.0,"heightType":"AtLeast","borders":{"left":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"right":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"top":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"bottom":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"vertical":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"horizontal":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"leftMargin":5.75,"rightMargin":5.75},"cells":[{"blocks":[{"paragraphFormat":{"textAlignment":"Center","styleName":"Normal"},"inlines":[{"text":"Shaggy fur"}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":50.0,"preferredWidthType":"Percent","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone","backgroundColor":"#FFFFFFFF"}}},{"blocks":[{"paragraphFormat":{"textAlignment":"Center","styleName":"Normal"},"inlines":[{"text":"Eyes"}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":50.0,"preferredWidthType":"Percent","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone","backgroundColor":"#FFFFFFFF"}}}]},{"rowFormat":{"allowBreakAcrossPages":true,"isHeader":false,"height":18.0,"heightType":"AtLeast","borders":{"left":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"right":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"top":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"bottom":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"vertical":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"horizontal":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"leftMargin":5.75,"rightMargin":5.75},"cells":[{"blocks":[{"paragraphFormat":{"textAlignment":"Center","styleName":"Normal"},"inlines":[{"text":"Gait"}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":50.0,"preferredWidthType":"Percent","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone","backgroundColor":"#FFFFFFFF"}}},{"blocks":[{"paragraphFormat":{"textAlignment":"Center","styleName":"Normal"},"inlines":[{"text":"Nose and teeth"}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":50.0,"preferredWidthType":"Percent","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone","backgroundColor":"#FFFFFFFF"}}}]}],"title":null,"description":null,"tableFormat":{"allowAutoFit":false,"leftMargin":5.75,"rightMargin":5.75,"leftIndent":0.0,"tableAlignment":"Left","preferredWidth":100.0,"preferredWidthType":"Percent","borders":{"left":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"right":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"top":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"bottom":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"vertical":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"horizontal":{"lineStyle":"Single","lineWidth":0.75,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#A6A6A6FF"},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone","backgroundColor":"#FFFFFFFF"},"bidi":false}},{"paragraphFormat":{"styleName":"Normal"},"inlines":[]},{"paragraphFormat":{"styleName":"Heading 3"},"inlines":[{"text":"Cat-like features"}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"While the body of a giant panda looks like that of a bear and the dark circles around its eyes resemble those of a red panda or raccoon, its pupils have vertical slits like the eyes of a cat. Because of their unusual eyes, a popular Chinese name for panda is ‘big bear cat’ "},{"text":"or大‍熊‍貓"},{"text":" /"},{"text":"dà"},{"text":" "},{"text":"xióng"},{"text":" "},{"text":"māo"},{"text":", pronounced as dah-"},{"text":"sshyong"},{"text":"-"},{"text":"maow"},{"text":"."}]},{"paragraphFormat":{"styleName":"Heading 3"},"inlines":[{"text":"DNA results"}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"DNA analysis has put one mystery to rest. It has revealed that while the red panda is a distant relation, the giant panda's closest relative is the spectacled bear from South America."}]},{"paragraphFormat":{"styleName":"Heading 2"},"inlines":[{"text":"Mostly Vegetarian Diet"}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"Giant pandas love bamboo! In fact, their diet is 99% bamboo. Along with bamboo, they eat other plants, small rodents, and occasionally fish. The mystery behind their diet is they have the digestive system of a carnivore. "}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"Their ability to digest bamboo is attributed to tiny microbes that live within their digestive system. As they can only digest about 20% of what they eat, the average giant panda consumes around 14 kilograms (30 pounds) of bamboo a day. In comparison, humans eat about 2 kilograms (5 pounds) of food a day. This enormous diet means the giant panda spends more than 12 hours a day eating to stay nourished. "}]},{"paragraphFormat":{"beforeSpacing":7.0,"styleName":"Normal"},"inlines":[{"text":"Quick Fact ","characterFormat":{"bold":true}},{"text":"As the seasons change, the giant panda prefers different species and parts of bamboo."}]},{"paragraphFormat":{"styleName":"Heading 2"},"inlines":[{"text":"Tiny Cubs"}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"An infant giant panda cub is about the size of a croissant, weighs less than a teacup and is about 900 times smaller than its mother. An average adult mother weighs around 91 kilograms (200 pounds) while newborn weighs only 83 to 190 grams (3 to 4 ounces)."}]},{"paragraphFormat":{"styleName":"Heading 1"},"inlines":[{"text":"Other Fun Giant Panda Facts"}]},{"paragraphFormat":{"leftIndent":28.799999237060547,"styleName":"List Paragraph","listFormat":{"listLevelNumber":0,"listId":0}},"inlines":[{"text":"Researchers have recently discovered that the gene responsible for tasting savory or umami flavors, such as meat, is inactive in giant pandas."}]},{"paragraphFormat":{"leftIndent":28.799999237060547,"styleName":"List Paragraph","listFormat":{"listLevelNumber":0,"listId":0}},"inlines":[{"text":"For many centuries, giant pandas were thought to be a mythical creature, like a dragon or unicorn."}]},{"paragraphFormat":{"leftIndent":28.799999237060547,"styleName":"List Paragraph","listFormat":{"listLevelNumber":0,"listId":0}},"inlines":[{"text":"Unlike other bears in the region, giant pandas don’t hibernate. "}]},{"paragraphFormat":{"leftIndent":28.799999237060547,"styleName":"List Paragraph","listFormat":{"listLevelNumber":0,"listId":0}},"inlines":[{"text":"Giant pandas can stand erect on their hind legs but rarely walk."}]},{"paragraphFormat":{"leftIndent":28.799999237060547,"styleName":"List Paragraph","listFormat":{"listLevelNumber":0,"listId":0}},"inlines":[{"text":"The "},{"text":"Qinling"},{"text":" panda, another giant panda species with a dark brown and light brown coat, lives only in the mountains of Shaanxi. "}]},{"paragraphFormat":{"leftIndent":28.799999237060547,"styleName":"List Paragraph","listFormat":{"listLevelNumber":0,"listId":0}},"inlines":[{"text":"Giant pandas have very sensitive hearing and smell, but they have poor eyesight."}]},{"paragraphFormat":{"leftIndent":28.799999237060547,"styleName":"List Paragraph","listFormat":{"listLevelNumber":0,"listId":0}},"inlines":[{"text":"A newborn giant panda is blind and looks like a tiny, pink, hairless mouse."}]}],"headersFooters":{"header":{"blocks":[{"paragraphFormat":{"styleName":"Header"},"inlines":[]}]},"footer":{"blocks":[{"paragraphFormat":{"styleName":"Footer"},"inlines":[]}]},"evenHeader":{"blocks":[{"paragraphFormat":{"styleName":"Header"},"inlines":[]}]},"evenFooter":{"blocks":[{"paragraphFormat":{"styleName":"Footer"},"inlines":[]}]},"firstPageHeader":{"blocks":[{"paragraphFormat":{"styleName":"Header"},"inlines":[]}]},"firstPageFooter":{"blocks":[{"paragraphFormat":{"styleName":"Footer"},"inlines":[]}]}},"sectionFormat":{"headerDistance":36.0,"footerDistance":36.0,"pageWidth":612.0,"pageHeight":792.0,"leftMargin":72.0,"rightMargin":72.0,"topMargin":72.0,"bottomMargin":72.0,"differentFirstPage":false,"differentOddAndEvenPages":false,"bidi":false,"restartPageNumbering":false,"pageStartingNumber":0}}],"characterFormat":{"fontSize":11.0,"fontFamily":"Calibri","fontColor":"#000000FF","fontSizeBidi":11.0,"fontFamilyBidi":"Calibri"},"paragraphFormat":{"afterSpacing":10.0,"lineSpacing":1.149999976158142,"lineSpacingType":"Multiple"},"lists":[{"listId":0,"abstractListId":0}],"abstractLists":[{"abstractListId":0,"levels":[{"listLevelPattern":"Bullet","followCharacter":"Tab","numberFormat":"","characterFormat":{"fontFamily":"Wingdings"},"paragraphFormat":{"leftIndent":36.0,"firstLineIndent":-18.0}},{"listLevelPattern":"Bullet","followCharacter":"Tab","numberFormat":"o","characterFormat":{"fontFamily":"Courier New"},"paragraphFormat":{"leftIndent":72.0,"firstLineIndent":-18.0}},{"listLevelPattern":"Bullet","followCharacter":"Tab","numberFormat":"","characterFormat":{"fontFamily":"Wingdings"},"paragraphFormat":{"leftIndent":108.0,"firstLineIndent":-18.0}},{"listLevelPattern":"Bullet","followCharacter":"Tab","numberFormat":"","characterFormat":{"fontFamily":"Symbol"},"paragraphFormat":{"leftIndent":144.0,"firstLineIndent":-18.0}},{"listLevelPattern":"Bullet","followCharacter":"Tab","numberFormat":"o","characterFormat":{"fontFamily":"Courier New"},"paragraphFormat":{"leftIndent":180.0,"firstLineIndent":-18.0}},{"listLevelPattern":"Bullet","followCharacter":"Tab","numberFormat":"","characterFormat":{"fontFamily":"Wingdings"},"paragraphFormat":{"leftIndent":216.0,"firstLineIndent":-18.0}},{"listLevelPattern":"Bullet","followCharacter":"Tab","numberFormat":"","characterFormat":{"fontFamily":"Symbol"},"paragraphFormat":{"leftIndent":252.0,"firstLineIndent":-18.0}},{"listLevelPattern":"Bullet","followCharacter":"Tab","numberFormat":"o","characterFormat":{"fontFamily":"Courier New"},"paragraphFormat":{"leftIndent":288.0,"firstLineIndent":-18.0}},{"listLevelPattern":"Bullet","followCharacter":"Tab","numberFormat":"","characterFormat":{"fontFamily":"Wingdings"},"paragraphFormat":{"leftIndent":324.0,"firstLineIndent":-18.0}}]}],"background":{"color":"#FFFFFFFF"},"styles":[{"type":"Paragraph","name":"Normal","next":"Normal","characterFormat":{"fontSize":10.0,"fontColor":"#595959FF"}},{"type":"Paragraph","name":"Heading 1","basedOn":"Normal","next":"Normal","link":"Heading 1 Char","characterFormat":{"fontSize":18.0,"fontFamily":"Segoe UI"},"paragraphFormat":{"beforeSpacing":24.0,"afterSpacing":0.0,"outlineLevel":"Level1"}},{"type":"Paragraph","name":"Heading 2","basedOn":"Normal","next":"Normal","link":"Heading 2 Char","characterFormat":{"bold":true,"fontSize":12.0,"fontFamily":"Segoe UI","fontColor":"#00CC66FF"},"paragraphFormat":{"beforeSpacing":12.0,"afterSpacing":0.0,"outlineLevel":"Level2"}},{"type":"Paragraph","name":"Heading 3","basedOn":"Normal","next":"Normal","link":"Heading 3 Char","characterFormat":{"bold":true},"paragraphFormat":{"beforeSpacing":5.0,"afterSpacing":0.0,"outlineLevel":"Level3"}},{"type":"Paragraph","name":"Heading 4","basedOn":"Normal","next":"Normal","link":"Heading 4 Char","characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496FF"},"paragraphFormat":{"beforeSpacing":2.0,"afterSpacing":0.0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level4"}},{"type":"Paragraph","name":"Heading 5","basedOn":"Normal","next":"Normal","link":"Heading 5 Char","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496FF"},"paragraphFormat":{"beforeSpacing":2.0,"afterSpacing":0.0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level5"}},{"type":"Paragraph","name":"Heading 6","basedOn":"Normal","next":"Normal","link":"Heading 6 Char","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763FF"},"paragraphFormat":{"beforeSpacing":2.0,"afterSpacing":0.0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple","outlineLevel":"Level6"}},{"type":"Character","name":"Default Paragraph Font"},{"type":"Character","name":"Heading 1 Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":14.0,"fontFamily":"Segoe UI","fontColor":"#595959FF"}},{"type":"Character","name":"Heading 2 Char","basedOn":"Default Paragraph Font","characterFormat":{"bold":true,"fontSize":13.0,"fontFamily":"Segoe UI","fontColor":"#00CC66FF"}},{"type":"Character","name":"Heading 3 Char","basedOn":"Default Paragraph Font","characterFormat":{"bold":true,"fontSize":10.0,"fontColor":"#595959FF"}},{"type":"Paragraph","name":"Title","basedOn":"Normal","next":"Normal","link":"Title Char","characterFormat":{"fontSize":40.0,"fontFamily":"Segoe UI Light","fontColor":"#00CC66FF"},"paragraphFormat":{"afterSpacing":30.0,"lineSpacing":1.0,"lineSpacingType":"Multiple"}},{"type":"Character","name":"Title Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":40.0,"fontFamily":"Segoe UI Light","fontColor":"#00CC66FF"}},{"type":"Paragraph","name":"Quote","basedOn":"Normal","next":"Normal","link":"Quote Char","characterFormat":{"fontSize":16.0,"fontFamily":"Segoe UI Light","fontColor":"#00CC66FF"},"paragraphFormat":{"lineSpacing":1.0,"lineSpacingType":"Multiple"}},{"type":"Character","name":"Quote Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":16.0,"fontFamily":"Segoe UI Light","fontColor":"#00CC66FF"}},{"type":"Paragraph","name":"Balloon Text","basedOn":"Normal","link":"Balloon Text Char","characterFormat":{"fontSize":8.0,"fontFamily":"Tahoma"},"paragraphFormat":{"afterSpacing":0.0,"lineSpacing":1.0,"lineSpacingType":"Multiple"}},{"type":"Character","name":"Balloon Text Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":8.0,"fontFamily":"Tahoma","fontColor":"#595959FF"}},{"type":"Paragraph","name":"Quick Fact","basedOn":"Normal","characterFormat":{"italic":true,"fontFamily":"Cambria"},"paragraphFormat":{"afterSpacing":0.0,"lineSpacing":1.0,"lineSpacingType":"Multiple"}},{"type":"Paragraph","name":"List Paragraph","basedOn":"Normal","next":"List Paragraph","paragraphFormat":{"leftIndent":36.0,"beforeSpacing":10.0}},{"type":"Character","name":"annotation reference","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":8.0}},{"type":"Paragraph","name":"annotation text","basedOn":"Normal","next":"Normal","link":"Comment Text Char","paragraphFormat":{"lineSpacing":1.0,"lineSpacingType":"Multiple"}},{"type":"Character","name":"Comment Text Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":10.0,"fontColor":"#595959FF"}},{"type":"Paragraph","name":"annotation subject","basedOn":"annotation text","next":"annotation text","link":"Comment Subject Char","characterFormat":{"bold":true}},{"type":"Character","name":"Comment Subject Char","basedOn":"Comment Text Char","characterFormat":{"bold":true,"fontSize":10.0,"fontColor":"#595959FF"}},{"type":"Paragraph","name":"Header","basedOn":"Normal","next":"Normal","link":"Header Char","paragraphFormat":{"afterSpacing":0.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","tabs":[{"tabJustification":"Center","position":234.0,"tabLeader":"None","deletePosition":0.0},{"tabJustification":"Right","position":468.0,"tabLeader":"None","deletePosition":0.0}]}},{"type":"Character","name":"Header Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":10.0,"fontColor":"#595959FF"}},{"type":"Paragraph","name":"Footer","basedOn":"Normal","next":"Normal","link":"Footer Char","paragraphFormat":{"afterSpacing":0.0,"lineSpacing":1.0,"lineSpacingType":"Multiple","tabs":[{"tabJustification":"Center","position":234.0,"tabLeader":"None","deletePosition":0.0},{"tabJustification":"Right","position":468.0,"tabLeader":"None","deletePosition":0.0}]}},{"type":"Character","name":"Footer Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":10.0,"fontColor":"#595959FF"}},{"type":"Character","name":"Hyperlink","basedOn":"Default Paragraph Font","characterFormat":{"underline":"Single","fontColor":"#085296FF"}},{"type":"Character","name":"Heading 4 Char","basedOn":"Default Paragraph Font","characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496FF"}},{"type":"Character","name":"Heading 5 Char","basedOn":"Default Paragraph Font","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496FF"}},{"type":"Character","name":"Heading 6 Char","basedOn":"Default Paragraph Font","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763FF"}}],"comments":[{"commentId":"Comment_e5affde3-0e01-48df-938c-071a057c6f8e","author":"Nancy Davolio","initial":"ND","date":"2019-11-14T18:18:00Z","blocks":[{"inlines":[{"text":"Giant panda also known as panda bear or simply panda,"},{"text":" is a bear native to south central China"},{"text":"."}]}],"done":false,"replyComments":[]},{"commentId":"Comment_b99ebea3-29b7-4d2c-8410-ce8fecb2c30d","author":"Nancy Davolio","initial":"ND","date":"2019-11-14T18:41:00Z","blocks":[{"inlines":[{"text":"Please add more facts."}]}],"done":true,"replyComments":[{"commentId":"Comment_dd401ff7-c247-45e8-9d4e-fe9f3fc45603","author":"Andrew Fuller","initial":"AF","date":"2019-11-14T18:44:00Z","blocks":[{"inlines":[{"text":"Giant pandas are good at climbing trees and can also swim."}]}],"done":true,"replyComments":[]},{"commentId":"Comment_c1623cbf-5221-4da7-9158-539d7748f786","author":"Andrew Fuller","initial":"AF","date":"2019-11-14T18:46:00Z","blocks":[{"inlines":[{"text":"An adult can eat 12–38 kilos of bamboo per day!"}]}],"done":true,"replyComments":[]}]},{"commentId":"Comment_875b5153-42a7-4f48-930b-f4d4ab5df625","author":"Nancy Davolio","initial":"ND","date":"2019-11-14T18:14:00Z","blocks":[{"inlines":[{"text":"Grammar changes required for “may actually be a” as “may be”"}]}],"done":false,"replyComments":[{"commentId":"Comment_6f94599b-64a1-4652-a3c4-a57d3e13ae88","author":"Andrew Fuller","initial":"AF","date":"2019-11-14T18:16:00Z","blocks":[{"inlines":[{"text":"Thanks for the update. Will correct it."}]}],"done":false,"replyComments":[]}]}],"defaultTabWidth":36.0,"formatting":false,"protectionType":"NoProtection","enforcement":false}; 
export let weblayout:object = { "sections": [{ "sectionFormat": { "pageWidth": 612, "pageHeight": 792, "leftMargin": 72, "rightMargin": 72, "topMargin": 72, "bottomMargin": 72, "differentFirstPage": false, "differentOddAndEvenPages": false, "headerDistance": 36, "footerDistance": 36 }, "blocks": [{ "paragraphFormat": { "styleName": "Title", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "The Giant Panda" }] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": { "fontFamily": "Calibri" }, "text": "The giant panda, which only " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "lives " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "in China outside of captivity, has captured the hearts of people of all ages across " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "the globe." }, { "characterFormat": {}, "text": " " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "From their furry black and white bodies to their shy and docile nature, they are considered one of the " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "world's most loved animals." }] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "imageString": "data:image/jpeg;base64,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", "width": 467.4500099999999, "height": 262.75 }] }, { "paragraphFormat": { "afterSpacing": 0, "lineSpacing": 1, "lineSpacingType": "Multiple", "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": { "bold": true }, "text": "Quick Fact" }, { "characterFormat": {}, "text": " The estimated number of giant pandas in the wild varies between 1,500 and 3,000." }] }, { "paragraphFormat": { "styleName": "Heading 1", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "Intriguing Giant Panda Mysteries" }] }, { "paragraphFormat": { "afterSpacing": 6, "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": { "fontFamily": "Calibri" }, "text": "While most adore their fluffy fur and round heads, which help give them their cuddly bear quality, others are " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "fascinated by the many mysteries of the giant panda." }, { "characterFormat": {}, "text": " " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "Did you know that the giant panda may " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "actually be" }, { "characterFormat": { "fontFamily": "Calibri" }, "text": " a raccoon, " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "they have an opposable pseudo thumb, and that they’re technically a carnivore even though their diet is primarily " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "vegetarian?" }, { "characterFormat": {}, "text": " " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "These things and more have baffled scientists and naturalists for hundreds of years." }, { "characterFormat": {}, "text": " " }] }, { "paragraphFormat": { "styleName": "Heading 2", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "Opposable Pseudo Thumb" }] }, { "paragraphFormat": { "afterSpacing": 6, "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": { "fontFamily": "Calibri" }, "text": "A characteristic of the giant panda that has mystified scientists is their movable, elongated wrist bone that acts like " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "an opposable thumb." }, { "characterFormat": {}, "text": " " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "This human-like quality that helps give them even more of a cuddly-bear appearance enables " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "the giant panda to pick up objects and even eat sitting up" }, { "characterFormat": {}, "text": ". " }] }, { "paragraphFormat": { "afterSpacing": 6, "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": { "bold": true }, "text": "Quick Fact" }, { "characterFormat": {}, "text": " Giant pandas have five clawed toes and one pseudo thumb." }] }, { "paragraphFormat": { "afterSpacing": 6, "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "bookmarkType": 0, "name": "_GoBack" }, { "characterFormat": {}, "bookmarkType": 1, "name": "_GoBack" }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "Their pseudo thumb, along with pads of skin, help the giant panda strip the more nutritious small bamboo shoots " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "and leaves while holding the stalk in their mouth." }] }, { "paragraphFormat": { "styleName": "Heading 2", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "Small Bear or Large Raccoon?" }] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": { "fontFamily": "Calibri" }, "text": "Giant pandas are generally referred to as bears and are typically called panda bears rather than giant pandas." }, { "characterFormat": {}, "text": " " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "Though we may think they look like bears, there has been a great deal of discussion for decades about where giant " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "pandas " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "fit" }, { "characterFormat": { "fontFamily": "Calibri" }, "text": " in the animal kingdom." }, { "characterFormat": {}, "text": " " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "Much of the debate has been whether they are more closely related to the red " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "panda, once thought to be a member of the raccoon family, than the bear family." }] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": { "fontFamily": "Calibri" }, "text": "While a giant panda has a body that resembles a small bear and climbs trees like a bear, it also has several " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "characteristics in common with the red panda." }, { "characterFormat": {}, "text": " " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "For example, both giant pandas and red pandas eat bamboo and " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "have the same pseudo thumb." }, { "characterFormat": {}, "text": " " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "The table below lists the main characteristics the giant panda shares with bears and " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "red pandas." }] }, { "rows": [{ "cells": [{ "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal", "listFormat": {} }, "characterFormat": { "bold": true, "fontColor": "#FFFFFFFF" }, "inlines": [{ "characterFormat": { "bold": true, "fontColor": "#FFFFFFFF" }, "text": "Bear" }] }], "cellFormat": { "borders": { "top": { "color": "#00CC66FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 1, "shadow": false, "space": 0 }, "left": { "color": "#00CC66FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 1, "shadow": false, "space": 0 }, "right": { "color": "#00CC66FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 1, "shadow": false, "space": 0 }, "bottom": { "color": "#00CC66FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 1, "shadow": false, "space": 0 }, "diagonalDown": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "diagonalUp": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "horizontal": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "vertical": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 } }, "shading": { "backgroundColor": "#00CC66FF", "foregroundColor": "empty", "textureStyle": "TextureNone" }, "preferredWidth": 50, "preferredWidthType": "Percent", "cellWidth": 234, "columnSpan": 1, "rowSpan": 1, "verticalAlignment": "Center" }, "columnIndex": 0 }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal", "listFormat": {} }, "characterFormat": { "bold": true, "fontColor": "#FFFFFFFF" }, "inlines": [{ "characterFormat": { "bold": true, "fontColor": "#FFFFFFFF" }, "text": "Red Panda" }] }], "cellFormat": { "borders": { "top": { "color": "#00CC66FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 1, "shadow": false, "space": 0 }, "left": { "color": "#00CC66FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 1, "shadow": false, "space": 0 }, "right": { "color": "#00CC66FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 1, "shadow": false, "space": 0 }, "bottom": { "color": "#00CC66FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 1, "shadow": false, "space": 0 }, "diagonalDown": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "diagonalUp": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "horizontal": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "vertical": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 } }, "shading": { "backgroundColor": "#00CC66FF", "foregroundColor": "empty", "textureStyle": "TextureNone" }, "preferredWidth": 50, "preferredWidthType": "Percent", "cellWidth": 234, "columnSpan": 1, "rowSpan": 1, "verticalAlignment": "Center" }, "columnIndex": 1 }], "rowFormat": { "height": 18, "allowBreakAcrossPages": true, "heightType": "AtLeast", "isHeader": false, "borders": { "top": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "left": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "right": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "bottom": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "diagonalDown": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "diagonalUp": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "horizontal": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "vertical": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 } }, "gridBefore": 0, "gridBeforeWidth": 0, "gridBeforeWidthType": "Point", "gridAfter": 0, "gridAfterWidth": 0, "gridAfterWidthType": "Point" } }, { "cells": [{ "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "Shape" }] }], "cellFormat": { "borders": { "top": { "color": "#00CC66FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 1, "shadow": false, "space": 0 }, "left": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "right": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "bottom": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "diagonalDown": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "diagonalUp": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "horizontal": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "vertical": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 } }, "shading": { "backgroundColor": "#ffffff", "foregroundColor": "empty", "textureStyle": "TextureNone" }, "preferredWidth": 50, "preferredWidthType": "Percent", "cellWidth": 234, "columnSpan": 1, "rowSpan": 1, "verticalAlignment": "Center" }, "columnIndex": 0 }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "Diet" }] }], "cellFormat": { "borders": { "top": { "color": "#00CC66FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 1, "shadow": false, "space": 0 }, "left": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "right": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "bottom": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "diagonalDown": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "diagonalUp": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "horizontal": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "vertical": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 } }, "shading": { "backgroundColor": "#ffffff", "foregroundColor": "empty", "textureStyle": "TextureNone" }, "preferredWidth": 50, "preferredWidthType": "Percent", "cellWidth": 234, "columnSpan": 1, "rowSpan": 1, "verticalAlignment": "Center" }, "columnIndex": 1 }], "rowFormat": { "height": 18, "allowBreakAcrossPages": true, "heightType": "AtLeast", "isHeader": false, "borders": { "top": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "left": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "right": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "bottom": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "diagonalDown": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "diagonalUp": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "horizontal": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "vertical": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 } }, "gridBefore": 0, "gridBeforeWidth": 0, "gridBeforeWidthType": "Point", "gridAfter": 0, "gridAfterWidth": 0, "gridAfterWidthType": "Point" } }, { "cells": [{ "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "Size" }] }], "cellFormat": { "borders": { "top": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "left": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "right": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "bottom": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "diagonalDown": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "diagonalUp": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "horizontal": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "vertical": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 } }, "shading": { "backgroundColor": "#ffffff", "foregroundColor": "empty", "textureStyle": "TextureNone" }, "preferredWidth": 50, "preferredWidthType": "Percent", "cellWidth": 234, "columnSpan": 1, "rowSpan": 1, "verticalAlignment": "Center" }, "columnIndex": 0 }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "Paws" }] }], "cellFormat": { "borders": { "top": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "left": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "right": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "bottom": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "diagonalDown": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "diagonalUp": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "horizontal": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "vertical": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 } }, "shading": { "backgroundColor": "#ffffff", "foregroundColor": "empty", "textureStyle": "TextureNone" }, "preferredWidth": 50, "preferredWidthType": "Percent", "cellWidth": 234, "columnSpan": 1, "rowSpan": 1, "verticalAlignment": "Center" }, "columnIndex": 1 }], "rowFormat": { "height": 18, "allowBreakAcrossPages": true, "heightType": "AtLeast", "isHeader": false, "borders": { "top": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "left": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "right": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "bottom": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "diagonalDown": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "diagonalUp": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "horizontal": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "vertical": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 } }, "gridBefore": 0, "gridBeforeWidth": 0, "gridBeforeWidthType": "Point", "gridAfter": 0, "gridAfterWidth": 0, "gridAfterWidthType": "Point" } }, { "cells": [{ "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "Shaggy " }, { "characterFormat": {}, "text": "fur" }] }], "cellFormat": { "borders": { "top": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "left": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "right": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "bottom": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "diagonalDown": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "diagonalUp": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "horizontal": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "vertical": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 } }, "shading": { "backgroundColor": "#ffffff", "foregroundColor": "empty", "textureStyle": "TextureNone" }, "preferredWidth": 50, "preferredWidthType": "Percent", "cellWidth": 234, "columnSpan": 1, "rowSpan": 1, "verticalAlignment": "Center" }, "columnIndex": 0 }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "Eyes" }] }], "cellFormat": { "borders": { "top": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "left": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "right": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "bottom": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "diagonalDown": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "diagonalUp": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "horizontal": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "vertical": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 } }, "shading": { "backgroundColor": "#ffffff", "foregroundColor": "empty", "textureStyle": "TextureNone" }, "preferredWidth": 50, "preferredWidthType": "Percent", "cellWidth": 234, "columnSpan": 1, "rowSpan": 1, "verticalAlignment": "Center" }, "columnIndex": 1 }], "rowFormat": { "height": 18, "allowBreakAcrossPages": true, "heightType": "AtLeast", "isHeader": false, "borders": { "top": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "left": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "right": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "bottom": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "diagonalDown": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "diagonalUp": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "horizontal": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "vertical": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 } }, "gridBefore": 0, "gridBeforeWidth": 0, "gridBeforeWidthType": "Point", "gridAfter": 0, "gridAfterWidth": 0, "gridAfterWidthType": "Point" } }, { "cells": [{ "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "Gait" }] }], "cellFormat": { "borders": { "top": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "left": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "right": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "bottom": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "diagonalDown": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "diagonalUp": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "horizontal": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "vertical": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 } }, "shading": { "backgroundColor": "#ffffff", "foregroundColor": "empty", "textureStyle": "TextureNone" }, "preferredWidth": 50, "preferredWidthType": "Percent", "cellWidth": 234, "columnSpan": 1, "rowSpan": 1, "verticalAlignment": "Center" }, "columnIndex": 0 }, { "blocks": [{ "paragraphFormat": { "textAlignment": "Center", "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "Nose " }, { "characterFormat": {}, "text": "and teeth" }] }], "cellFormat": { "borders": { "top": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "left": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "right": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "bottom": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "diagonalDown": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "diagonalUp": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "horizontal": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "vertical": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 } }, "shading": { "backgroundColor": "#ffffff", "foregroundColor": "empty", "textureStyle": "TextureNone" }, "preferredWidth": 50, "preferredWidthType": "Percent", "cellWidth": 234, "columnSpan": 1, "rowSpan": 1, "verticalAlignment": "Center" }, "columnIndex": 1 }], "rowFormat": { "height": 18, "allowBreakAcrossPages": true, "heightType": "AtLeast", "isHeader": false, "borders": { "top": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "left": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "right": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "bottom": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "diagonalDown": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "diagonalUp": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "horizontal": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "vertical": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 } }, "gridBefore": 0, "gridBeforeWidth": 0, "gridBeforeWidthType": "Point", "gridAfter": 0, "gridAfterWidth": 0, "gridAfterWidthType": "Point" } }], "grid": [234, 234], "tableFormat": { "borders": { "top": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "left": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "right": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "bottom": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "diagonalDown": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "diagonalUp": { "color": "#000000", "hasNoneStyle": false, "lineStyle": "None", "lineWidth": 0, "shadow": false, "space": 0 }, "horizontal": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 }, "vertical": { "color": "#A6A6A6FF", "hasNoneStyle": false, "lineStyle": "Single", "lineWidth": 0.75, "shadow": false, "space": 0 } }, "shading": { "backgroundColor": "#ffffff", "foregroundColor": "empty", "textureStyle": "TextureNone" }, "cellSpacing": 0, "leftIndent": 0, "tableAlignment": "Left", "topMargin": 0, "rightMargin": 5.75, "leftMargin": 5.75, "bottomMargin": 0, "preferredWidth": 100, "preferredWidthType": "Percent" }, "description": null, "title": null }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [] }, { "paragraphFormat": { "styleName": "Heading 3", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "Cat-like features" }] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": { "fontFamily": "Calibri" }, "text": "While the body of a giant panda looks like that of a bear and the dark circles around its eyes resemble those of a " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "red panda or raccoon, its pupils have vertical slits like the eyes of a cat." }, { "characterFormat": {}, "text": " Because of the" }, { "characterFormat": {}, "text": "ir " }, { "characterFormat": {}, "text": "unusual eyes" }, { "characterFormat": {}, "text": ", a popular " }, { "characterFormat": {}, "text": "Chinese name for " }, { "characterFormat": {}, "text": "panda" }, { "characterFormat": {}, "text": " i" }, { "characterFormat": {}, "text": "s " }, { "characterFormat": {}, "text": "‘big bear cat’ or" }, { "characterFormat": {}, "text": "大" }, { "characterFormat": {}, "text": "‍" }, { "characterFormat": {}, "text": "熊" }, { "characterFormat": {}, "text": "‍" }, { "characterFormat": {}, "text": "貓" }, { "characterFormat": {}, "text": " /" }, { "characterFormat": {}, "text": "dà" }, { "characterFormat": {}, "text": " " }, { "characterFormat": {}, "text": "xióng" }, { "characterFormat": {}, "text": " " }, { "characterFormat": {}, "text": "māo" }, { "characterFormat": {}, "text": ", pronounced as dah-" }, { "characterFormat": {}, "text": "sshyong" }, { "characterFormat": {}, "text": "-" }, { "characterFormat": {}, "text": "maow" }, { "characterFormat": {}, "text": "." }] }, { "paragraphFormat": { "styleName": "Heading 3", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "DNA " }, { "characterFormat": {}, "text": "r" }, { "characterFormat": {}, "text": "esults" }] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "DNA analysis" }, { "characterFormat": {}, "text": " has put one mystery to rest" }, { "characterFormat": {}, "text": ". " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "It has revealed that while the red panda is a distant relation, the giant " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "panda's closest relative is the spectacled bear from South America." }] }, { "paragraphFormat": { "styleName": "Heading 2", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "Mostly Vegetarian Diet" }] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "Giant pandas " }, { "characterFormat": {}, "text": "love" }, { "characterFormat": {}, "text": " bamboo! In fact, their diet is 99% bamboo. Along with bamboo, they eat other plants, small " }, { "characterFormat": {}, "text": "rodents, and occasionally fish. The mystery behind their diet is they have the digestive system of a carnivore. " }] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "Their ability to digest bamboo is attributed to tiny microbes that live within their digestive system. " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "As they can only " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "digest about 20% of what they eat, the average giant panda consumes around 14 kilograms (30 pounds) of bamboo " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "a day." }, { "characterFormat": {}, "text": " In comparison, humans eat about 2 kilograms (5 pounds) of food a day. This enormous diet means the giant " }, { "characterFormat": {}, "text": "panda spends more than 12 hours a day eating to stay nourished. " }] }, { "paragraphFormat": { "beforeSpacing": 7, "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": { "bold": true }, "text": "Quick Fact " }, { "characterFormat": {}, "text": "As the seasons change, the giant panda prefers different species and parts of bamboo." }] }, { "paragraphFormat": { "styleName": "Heading 2", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "Tiny Cubs" }] }, { "paragraphFormat": { "styleName": "Normal", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": { "fontFamily": "Calibri" }, "text": "An infant giant panda cub is about the size of a croissant, weighs less than a teacup and is about 900 times smaller " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "than its mother. " }, { "characterFormat": {}, "text": "An average adult mother weighs around 91 kilograms (200 pounds) while " }, { "characterFormat": {}, "text": "newborn weighs" }, { "characterFormat": {}, "text": " only 83 " }, { "characterFormat": {}, "text": "to 190 grams (3 to 4 ounces)." }] }, { "paragraphFormat": { "styleName": "Heading 1", "listFormat": {} }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "Other Fun Giant Panda Facts" }] }, { "paragraphFormat": { "leftIndent": 28.799999237060547, "styleName": "List Paragraph", "listFormat": { "listId": 1, "listLevelNumber": 0 } }, "characterFormat": {}, "inlines": [{ "characterFormat": { "fontFamily": "Calibri" }, "text": "Researchers have recently discovered that the gene responsible for tasting " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "savory" }, { "characterFormat": { "fontFamily": "Calibri" }, "text": " or umami " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "flavors" }, { "characterFormat": { "fontFamily": "Calibri" }, "text": ", such as " }, { "characterFormat": { "fontFamily": "Calibri" }, "text": "meat, is inactive in giant pandas." }] }, { "paragraphFormat": { "leftIndent": 28.799999237060547, "styleName": "List Paragraph", "listFormat": { "listId": 1, "listLevelNumber": 0 } }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "For many centuries, giant pandas were thought to be a mythical creature" }, { "characterFormat": {}, "text": "," }, { "characterFormat": {}, "text": " " }, { "characterFormat": {}, "text": "like" }, { "characterFormat": {}, "text": " a dragon or unicorn" }, { "characterFormat": {}, "text": "." }] }, { "paragraphFormat": { "leftIndent": 28.799999237060547, "styleName": "List Paragraph", "listFormat": { "listId": 1, "listLevelNumber": 0 } }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "Unlike other bears in the region, giant pandas don’t hibernate. " }] }, { "paragraphFormat": { "leftIndent": 28.799999237060547, "styleName": "List Paragraph", "listFormat": { "listId": 1, "listLevelNumber": 0 } }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "Giant pandas can stand erect on their hind legs but rarely walk." }] }, { "paragraphFormat": { "leftIndent": 28.799999237060547, "styleName": "List Paragraph", "listFormat": { "listId": 1, "listLevelNumber": 0 } }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "The " }, { "characterFormat": {}, "text": "Qinling" }, { "characterFormat": {}, "text": " panda, another giant panda species with a dark brown and light brown coat, live" }, { "characterFormat": {}, "text": "s" }, { "characterFormat": {}, "text": " only in the " }, { "characterFormat": {}, "text": "mountains of Shaanxi. " }] }, { "paragraphFormat": { "leftIndent": 28.799999237060547, "styleName": "List Paragraph", "listFormat": { "listId": 1, "listLevelNumber": 0 } }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "Giant pandas have very sensitive hearing and smell" }, { "characterFormat": {}, "text": "," }, { "characterFormat": {}, "text": " but " }, { "characterFormat": {}, "text": "they " }, { "characterFormat": {}, "text": "have poor eyesight." }] }, { "paragraphFormat": { "leftIndent": 28.799999237060547, "styleName": "List Paragraph", "listFormat": { "listId": 1, "listLevelNumber": 0 } }, "characterFormat": {}, "inlines": [{ "characterFormat": {}, "text": "A newborn giant panda is blind and look" }, { "characterFormat": {}, "text": "s" }, { "characterFormat": {}, "text": " like " }, { "characterFormat": {}, "text": "a " }, { "characterFormat": {}, "text": "tiny" }, { "characterFormat": {}, "text": "," }, { "characterFormat": {}, "text": " pink" }, { "characterFormat": {}, "text": "," }, { "characterFormat": {}, "text": " hairless " }, { "characterFormat": {}, "text": "mouse" }, { "characterFormat": {}, "text": "." }] }], "headersFooters": { "header": { "blocks": [{ "paragraphFormat": { "styleName": "Header", "listFormat": {} }, "characterFormat": {}, "inlines": [] }] }, "footer": { "blocks": [{ "paragraphFormat": { "styleName": "Footer", "listFormat": {} }, "characterFormat": {}, "inlines": [] }] }, "evenHeader": { "blocks": [{ "paragraphFormat": { "styleName": "Header", "listFormat": {} }, "characterFormat": {}, "inlines": [] }] }, "evenFooter": { "blocks": [{ "paragraphFormat": { "styleName": "Footer", "listFormat": {} }, "characterFormat": {}, "inlines": [] }] }, "firstPageHeader": { "blocks": [{ "paragraphFormat": { "styleName": "Header", "listFormat": {} }, "characterFormat": {}, "inlines": [] }] }, "firstPageFooter": { "blocks": [{ "paragraphFormat": { "styleName": "Footer", "listFormat": {} }, "characterFormat": {}, "inlines": [] }] } } }], "characterFormat": { "fontSize": 11, "fontFamily": "Calibri" }, "paragraphFormat": { "afterSpacing": 10, "lineSpacing": 1.149999976158142, "lineSpacingType": "Multiple", "listFormat": {} }, "styles": [{ "name": "Normal", "type": "Paragraph", "paragraphFormat": { "listFormat": {} }, "characterFormat": { "fontSize": 10, "fontColor": "#595959FF" }, "next": "Normal" }, { "name": "Heading 1", "type": "Paragraph", "paragraphFormat": { "beforeSpacing": 24, "afterSpacing": 0, "outlineLevel": "Level1", "listFormat": {} }, "characterFormat": { "fontSize": 18, "fontFamily": "Segoe UI" }, "basedOn": "Normal", "link": "Heading 1 Char", "next": "Normal" }, { "name": "Heading 1 Char", "type": "Character", "characterFormat": { "fontSize": 14, "fontFamily": "Segoe UI", "fontColor": "#595959FF" }, "basedOn": "Default Paragraph Font" }, { "name": "Default Paragraph Font", "type": "Character", "characterFormat": {} }, { "name": "Heading 2", "type": "Paragraph", "paragraphFormat": { "beforeSpacing": 12, "afterSpacing": 0, "outlineLevel": "Level2", "listFormat": {} }, "characterFormat": { "bold": true, "fontSize": 12, "fontFamily": "Segoe UI", "fontColor": "#00CC66FF" }, "basedOn": "Normal", "link": "Heading 2 Char", "next": "Normal" }, { "name": "Heading 2 Char", "type": "Character", "characterFormat": { "bold": true, "fontSize": 13, "fontFamily": "Segoe UI", "fontColor": "#00CC66FF" }, "basedOn": "Default Paragraph Font" }, { "name": "Heading 3", "type": "Paragraph", "paragraphFormat": { "beforeSpacing": 5, "afterSpacing": 0, "outlineLevel": "Level3", "listFormat": {} }, "characterFormat": { "bold": true }, "basedOn": "Normal", "link": "Heading 3 Char", "next": "Normal" }, { "name": "Heading 3 Char", "type": "Character", "characterFormat": { "bold": true, "fontSize": 10, "fontColor": "#595959FF" }, "basedOn": "Default Paragraph Font" }, { "name": "Title", "type": "Paragraph", "paragraphFormat": { "afterSpacing": 30, "lineSpacing": 1, "lineSpacingType": "Multiple", "listFormat": {} }, "characterFormat": { "fontSize": 40, "fontFamily": "Segoe UI Light", "fontColor": "#00CC66FF" }, "basedOn": "Normal", "link": "Title Char", "next": "Normal" }, { "name": "Title Char", "type": "Character", "characterFormat": { "fontSize": 40, "fontFamily": "Segoe UI Light", "fontColor": "#00CC66FF" }, "basedOn": "Default Paragraph Font" }, { "name": "Quote", "type": "Paragraph", "paragraphFormat": { "lineSpacing": 1, "lineSpacingType": "Multiple", "listFormat": {} }, "characterFormat": { "fontSize": 16, "fontFamily": "Segoe UI Light", "fontColor": "#00CC66FF" }, "basedOn": "Normal", "link": "Quote Char", "next": "Normal" }, { "name": "Quote Char", "type": "Character", "characterFormat": { "fontSize": 16, "fontFamily": "Segoe UI Light", "fontColor": "#00CC66FF" }, "basedOn": "Default Paragraph Font" }, { "name": "Balloon Text", "type": "Paragraph", "paragraphFormat": { "afterSpacing": 0, "lineSpacing": 1, "lineSpacingType": "Multiple", "listFormat": {} }, "characterFormat": { "fontSize": 8, "fontFamily": "Tahoma" }, "basedOn": "Normal", "link": "Balloon Text Char" }, { "name": "Balloon Text Char", "type": "Character", "characterFormat": { "fontSize": 8, "fontFamily": "Tahoma", "fontColor": "#595959FF" }, "basedOn": "Default Paragraph Font" }, { "name": "Quick Fact", "type": "Paragraph", "paragraphFormat": { "afterSpacing": 0, "lineSpacing": 1, "lineSpacingType": "Multiple", "listFormat": {} }, "characterFormat": { "italic": true, "fontFamily": "Cambria" }, "basedOn": "Normal" }, { "name": "List Paragraph", "type": "Paragraph", "paragraphFormat": { "leftIndent": 36, "beforeSpacing": 10, "listFormat": {} }, "characterFormat": {}, "basedOn": "Normal", "next": "List Paragraph" }, { "name": "annotation reference", "type": "Character", "characterFormat": { "fontSize": 8 }, "basedOn": "Default Paragraph Font" }, { "name": "annotation text", "type": "Paragraph", "paragraphFormat": { "lineSpacing": 1, "lineSpacingType": "Multiple", "listFormat": {} }, "characterFormat": {}, "basedOn": "Normal", "link": "Comment Text Char" }, { "name": "Comment Text Char", "type": "Character", "characterFormat": { "fontSize": 10, "fontColor": "#595959FF" }, "basedOn": "Default Paragraph Font" }, { "name": "annotation subject", "type": "Paragraph", "paragraphFormat": { "listFormat": {} }, "characterFormat": { "bold": true }, "basedOn": "annotation text", "link": "Comment Subject Char", "next": "annotation text" }, { "name": "Comment Subject Char", "type": "Character", "characterFormat": { "bold": true, "fontSize": 10, "fontColor": "#595959FF" }, "basedOn": "Comment Text Char" }, { "name": "Header", "type": "Paragraph", "paragraphFormat": { "afterSpacing": 0, "lineSpacing": 1, "lineSpacingType": "Multiple", "listFormat": {}, "tabs": [{ "position": 234, "deletePosition": 0, "tabJustification": "Center", "tabLeader": "None" }, { "position": 468, "deletePosition": 0, "tabJustification": "Right", "tabLeader": "None" }] }, "characterFormat": {}, "basedOn": "Normal", "link": "Header Char", "next": "Normal" }, { "name": "Header Char", "type": "Character", "characterFormat": { "fontSize": 10, "fontColor": "#595959FF" }, "basedOn": "Default Paragraph Font" }, { "name": "Footer", "type": "Paragraph", "paragraphFormat": { "afterSpacing": 0, "lineSpacing": 1, "lineSpacingType": "Multiple", "listFormat": {}, "tabs": [{ "position": 234, "deletePosition": 0, "tabJustification": "Center", "tabLeader": "None" }, { "position": 468, "deletePosition": 0, "tabJustification": "Right", "tabLeader": "None" }] }, "characterFormat": {}, "basedOn": "Normal", "link": "Footer Char", "next": "Normal" }, { "name": "Footer Char", "type": "Character", "characterFormat": { "fontSize": 10, "fontColor": "#595959FF" }, "basedOn": "Default Paragraph Font" }, { "name": "Hyperlink", "type": "Character", "characterFormat": { "underline": "Single", "fontColor": "#085296FF" }, "basedOn": "Default Paragraph Font" }], "lists": [{ "abstractListId": 1, "listId": 1 }], "abstractLists": [{ "abstractListId": 1, "levels": [{ "characterFormat": { "fontFamily": "Wingdings" }, "paragraphFormat": { "leftIndent": 36, "firstLineIndent": -18, "listFormat": {} }, "followCharacter": "Tab", "listLevelPattern": "Bullet", "numberFormat": "", "restartLevel": 0, "startAt": 0 }, { "characterFormat": { "fontFamily": "Courier New" }, "paragraphFormat": { "leftIndent": 72, "firstLineIndent": -18, "listFormat": {} }, "followCharacter": "Tab", "listLevelPattern": "Bullet", "numberFormat": "o", "restartLevel": 0, "startAt": 0 }, { "characterFormat": { "fontFamily": "Wingdings" }, "paragraphFormat": { "leftIndent": 108, "firstLineIndent": -18, "listFormat": {} }, "followCharacter": "Tab", "listLevelPattern": "Bullet", "numberFormat": "", "restartLevel": 0, "startAt": 0 }, { "characterFormat": { "fontFamily": "Symbol" }, "paragraphFormat": { "leftIndent": 144, "firstLineIndent": -18, "listFormat": {} }, "followCharacter": "Tab", "listLevelPattern": "Bullet", "numberFormat": "", "restartLevel": 0, "startAt": 0 }, { "characterFormat": { "fontFamily": "Courier New" }, "paragraphFormat": { "leftIndent": 180, "firstLineIndent": -18, "listFormat": {} }, "followCharacter": "Tab", "listLevelPattern": "Bullet", "numberFormat": "o", "restartLevel": 0, "startAt": 0 }, { "characterFormat": { "fontFamily": "Wingdings" }, "paragraphFormat": { "leftIndent": 216, "firstLineIndent": -18, "listFormat": {} }, "followCharacter": "Tab", "listLevelPattern": "Bullet", "numberFormat": "", "restartLevel": 0, "startAt": 0 }, { "characterFormat": { "fontFamily": "Symbol" }, "paragraphFormat": { "leftIndent": 252, "firstLineIndent": -18, "listFormat": {} }, "followCharacter": "Tab", "listLevelPattern": "Bullet", "numberFormat": "", "restartLevel": 0, "startAt": 0 }, { "characterFormat": { "fontFamily": "Courier New" }, "paragraphFormat": { "leftIndent": 288, "firstLineIndent": -18, "listFormat": {} }, "followCharacter": "Tab", "listLevelPattern": "Bullet", "numberFormat": "o", "restartLevel": 0, "startAt": 0 }, { "characterFormat": { "fontFamily": "Wingdings" }, "paragraphFormat": { "leftIndent": 324, "firstLineIndent": -18, "listFormat": {} }, "followCharacter": "Tab", "listLevelPattern": "Bullet", "numberFormat": "", "restartLevel": 0, "startAt": 0 }] }] };
export let trackchanges = {"sections":[{"blocks":[{"paragraphFormat":{"styleName":"Title"},"inlines":[{"text":"ASP.NET Core Succinctly"}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[]},{"paragraphFormat":{"styleName":"Heading 1"},"inlines":[{"name":"_Toc523387945","bookmarkType":0},{"name":"_Toc523388455","bookmarkType":0},{"name":"_Toc42015551","bookmarkType":0},{"name":"_Toc42015586","bookmarkType":0},{"text":"C"},{"text":"hapter 1 Introduction to ASP.NET Core"},{"name":"_Toc523387945","bookmarkType":1},{"name":"_Toc523388455","bookmarkType":1},{"name":"_Toc42015551","bookmarkType":1},{"name":"_Toc42015586","bookmarkType":1}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"A"},{"text":"SP","revisionIds":["b756b968-3c64-4455-80aa-61b916ed6f80"]},{"text":"sp","revisionIds":["e8b50102-c9bb-4e08-b827-04728a72980f"]},{"text":"."},{"text":"NET","revisionIds":["80a06038-0f6b-4a87-9dae-5518fea6c609"]},{"text":"net","revisionIds":["2aae587d-9776-4c64-933a-4e2293edec4b"]},{"text":" "},{"text":"c","revisionIds":["798ad0fd-21dc-4bdb-922f-fd9aaae7f938"]},{"text":"C","revisionIds":["6fc9c1f4-5fbd-4857-9955-523011a8c8a7"]},{"text":"ore is the web develop"},{"text":" framework that comes together with the ne"},{"text":"w .NET Core and, besides all the new features,"},{"text":" ","revisionIds":["6ef86691-b42e-4fdc-9c36-126b0d047f29"]},{"text":"also adopts a significantly new approach to web development. The first chapter starts by going through the history of Microsoft's web stack to show the motivations that led to this framework. Later, it moves t"},{"text":"o more practical matters, like showing you how to get started with ."},{"text":"Net","revisionIds":["1a353a7a-aabf-477d-9511-142fb35343e2"]},{"text":"net","revisionIds":["1c78faa0-3e72-48bc-b973-6f52795d10a4"]},{"text":" "},{"text":"c","revisionIds":["b7e55980-4794-4edb-b3d3-15d109d9645d"]},{"text":"C","revisionIds":["e9e9819b-f471-41f9-b146-eb8134aeaf64"]},{"text":"ore and describing the foundations of the framework."}]},{"paragraphFormat":{"styleName":"Heading 1"},"inlines":[{"name":"_Toc523387946","bookmarkType":0},{"name":"_Toc523388456","bookmarkType":0},{"name":"_Toc42015552","bookmarkType":0},{"name":"_Toc42015587","bookmarkType":0},{"text":"Chapter 2 What are .NET Core and ASP.NET Core?"},{"name":"_Toc523387946","bookmarkType":1},{"name":"_Toc523388456","bookmarkType":1},{"name":"_Toc42015552","bookmarkType":1},{"name":"_Toc42015587","bookmarkType":1}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"Before trying to understand the reason for its existence, let's first try to define"},{"text":" what .NET Core and ASP.NET Core are."}]},{"paragraphFormat":{"styleName":"Heading 2"},"inlines":[{"name":"_Toc523387947","bookmarkType":0},{"name":"_Toc523388457","bookmarkType":0},{"name":"_Toc42015553","bookmarkType":0},{"name":"_Toc42015588","bookmarkType":0},{"text":".NET Core"},{"name":"_Toc523387947","bookmarkType":1},{"name":"_Toc523388457","bookmarkType":1},{"name":"_Toc42015553","bookmarkType":1},{"name":"_Toc42015588","bookmarkType":1}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"The framework .NET Core 1.1 a is modular, cross-platform, cloud-optimized version of the .NET Framework, consisting of the "},{"text":"CoreCLR"},{"text":" and the implementation of the .NET Standard Library 1.6. One of the main feat"},{"text":"ures of this library is the ability to install only the features that are needed for the application you are building, reducing its footprint and the possibility of installing the library itself within the application. This makes it possible for applicatio"},{"text":"ns built with different versions to co-exist on the same machine without the compatibility problems typical of the full .NET Framework."}]},{"paragraphFormat":{"styleName":"Heading 2"},"inlines":[{"name":"_Toc523387948","bookmarkType":0},{"name":"_Toc523388458","bookmarkType":0},{"name":"_Toc42015554","bookmarkType":0},{"name":"_Toc42015589","bookmarkType":0},{"text":"ASP.NET Core"},{"name":"_Toc523387948","bookmarkType":1},{"name":"_Toc523388458","bookmarkType":1},{"name":"_Toc42015554","bookmarkType":1},{"name":"_Toc42015589","bookmarkType":1}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"ASP.NET Core is a complete rewrite of ASP.NET, built with the goal of being cross-platform, complete"},{"text":"ly","revisionIds":["0a876474-7164-4c1e-8b97-a18a855e421f"]},{"text":" open"},{"text":"-source, and without the limitations of backward compatibility. Like .NET Core, ASP.NET Core is also built with a modular approach. This means the application you build can include only the needed features without taking on additional burdens. This is made"},{"text":" possible by the new startup and execution environment, based on the Open Web Interface for .NET (OWIN) standard. In addition, ASP.NET Core comes with many interesting features that we are going to see throughout the book, like an integrated dependency inj"},{"text":"ection system and a new application framework that unifies the programming models of ASP.NET MVC and Web API."}]},{"paragraphFormat":{"styleName":"Heading 1"},"inlines":[{"name":"_Toc523387949","bookmarkType":0},{"name":"_Toc523388459","bookmarkType":0},{"name":"_Toc42015555","bookmarkType":0},{"name":"_Toc42015590","bookmarkType":0},{"text":"Chapter 3 Getting Started with .NET Core"},{"name":"_Toc523387949","bookmarkType":1},{"name":"_Toc523388459","bookmarkType":1},{"name":"_Toc42015555","bookmarkType":1},{"name":"_Toc42015590","bookmarkType":1}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"Now that it is clear what ASP.NET Core and .NET Core are, and why they were created, it's time to look at how to install them and how to build a simple application with them."}]},{"paragraphFormat":{"styleName":"Heading 2"},"inlines":[{"name":"_Toc523387950","bookmarkType":0},{"name":"_Toc523388460","bookmarkType":0},{"name":"_Toc42015556","bookmarkType":0},{"name":"_Toc42015591","bookmarkType":0},{"text":"Install"},{"text":"ing","revisionIds":["9f6e263c-7289-4dad-9292-0455f375da73"]},{"text":" .NET Core on Windows"},{"name":"_Toc523387950","bookmarkType":1},{"name":"_Toc523388460","bookmarkType":1},{"name":"_Toc42015556","bookmarkType":1},{"name":"_Toc42015591","bookmarkType":1}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"Installing on Windows is "},{"text":"pretty easy","revisionIds":["d6d85993-c119-4223-8299-bbfb7072bab4"]},{"text":"easy","revisionIds":["55973d80-9fa5-4d4f-9bad-dd72e1475b6f"]},{"text":". With Visual"},{"text":" Studio 2017, chances are you already installed it. If not, go back to the Visual Studio Installer and make sure you have the .NET Core workload selected."}]},{"paragraphFormat":{"styleName":"Heading 2"},"inlines":[{"name":"_Toc523387951","bookmarkType":0},{"name":"_Toc523388461","bookmarkType":0},{"name":"_Toc42015557","bookmarkType":0},{"name":"_Toc42015592","bookmarkType":0},{"text":"Install"},{"text":"ing","revisionIds":["a3330ddc-0b35-4102-8fed-74bddc293e57"]},{"text":" .NET Core on a Mac (or Linux)"},{"name":"_Toc523387951","bookmarkType":1},{"name":"_Toc523388461","bookmarkType":1},{"name":"_Toc42015557","bookmarkType":1},{"name":"_Toc42015592","bookmarkType":1}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"The beauty of .NET Core is that it can also be installed on "},{"text":"a Mac (or Linux, for that matter) without relying on third-party frameworks, as was needed before with Mono."}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"Each distribution of Linux has its own individual way of installing, but in the end, the process boils down to the same principles:"}]},{"paragraphFormat":{"styleName":"List Paragraph","listFormat":{"listLevelNumber":0,"listId":0}},"inlines":[{"text":"Install prerequisites and configure the package manager of your distribution."}]},{"paragraphFormat":{"styleName":"List Paragraph","listFormat":{"listLevelNumber":0,"listId":0}},"inlines":[{"text":"Invoke the package manager to download and install .NET Core and its tools."}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"You can read instructions specific to your distribution on the official .NET Core website. As an examp"},{"text":"le, we’ll show you how to install on a Mac."}]},{"characterFormat":{"italic":true},"paragraphFormat":{"textAlignment":"Center","styleName":"Normal"},"inlines":[{"text":"Code Listing 3-1","characterFormat":{"italic":true}}]},{"rows":[{"rowFormat":{"allowBreakAcrossPages":true,"isHeader":false,"height":1.0,"heightType":"AtLeast","borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}}},"cells":[{"blocks":[{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":">brew update"}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":">brew install "},{"text":"openssl"}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":">ln -s /"},{"text":"usr"},{"text":"/local/opt/"},{"text":"openssl"},{"text":"/lib/libcrypto.1.0.0.dylib /"},{"text":"usr"},{"text":"/local/lib/"}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":">ln -s /"},{"text":"usr"},{"text":"/local/opt/"},{"text":"openssl"},{"text":"/lib/libssl.1.0.0.dylib /"},{"text":"usr"},{"text":"/local/lib/"}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":467.5,"preferredWidthType":"Point","verticalAlignment":"Top","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone"},"cellWidth":467.5}}]}],"title":null,"description":null,"tableFormat":{"allowAutoFit":true,"leftIndent":0.0,"tableAlignment":"Left","preferredWidthType":"Auto","borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"bidi":false}},{"paragraphFormat":{"styleName":"Normal"},"inlines":[]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"Once all these pr"},{"text":"erequisites have been installed, you can download and install the official SDK for macOS by downloading it from the "},{"hasFieldEnd":true,"fieldType":0},{"text":"HYPERLINK \"https://www.microsoft.com/net/core\" "},{"fieldType":2},{"text":"official .NET Core website","characterFormat":{"styleName":"Hyperlink"}},{"fieldType":1},{"text":"."}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"On Linux and Mac, you do not have Visual Studio to develop app"},{"text":"s, but you can use the .NET Core SDK or Visual Studio Code, which is a lightweight, extensible, cross-platform text editor built by Microsoft and the community. The last chapter of this book covers in detail each of the tools with which you can build .NET "},{"text":"Core apps."}]},{"paragraphFormat":{"styleName":"Heading 1"},"inlines":[{"name":"_Toc523387952","bookmarkType":0},{"name":"_Toc523388462","bookmarkType":0},{"name":"_Toc42015558","bookmarkType":0},{"name":"_Toc42015593","bookmarkType":0},{"text":"A Look at the Future"},{"name":"_Toc523387952","bookmarkType":1},{"name":"_Toc523388462","bookmarkType":1},{"name":"_Toc42015558","bookmarkType":1},{"name":"_Toc42015593","bookmarkType":1}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"The release of .NET Core has been a very difficult one, with many delays and changes in direction. While the framework is stable, with .NET Core 1.1 released in November 2016, the tooling is still in development."}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"When we wro"},{"text":"te this book, we relied on previews that were made available at the "},{"text":"Con"},{"name":"_GoBack","bookmarkType":0},{"name":"_GoBack","bookmarkType":1},{"text":"nect("},{"text":"); event of November 2016, so some of the screenshots or procedures in the examples might be different from what is currently available."}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"What can we expect for the future of .NET C"},{"text":"ore?"}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"First, unlike previous frameworks, we "},{"text":"have to","revisionIds":["3742a158-cadf-4848-b105-ca2cbcde35c7"]},{"text":"must","revisionIds":["666ca6c2-ac2b-49b5-bfdb-dff924672b91"]},{"text":" expect a continuous release of enhanced tools, both for the CLI and for the tooling inside Visual Studio. Second, on the framework side, there will be the second big release of .NET Core 2.0, implementing "},{"text":".NET Standard 2.0."}]},{"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"But rest assured that Microsoft sees .NET Core as the future of .NET for the next 10 years, so this is the right time to jump in and start learning this new technology."}]}],"headersFooters":{},"sectionFormat":{"headerDistance":36.0,"footerDistance":36.0,"pageWidth":612.0,"pageHeight":792.0,"leftMargin":72.0,"rightMargin":72.0,"topMargin":72.0,"bottomMargin":72.0,"differentFirstPage":false,"differentOddAndEvenPages":false,"bidi":false,"restartPageNumbering":false,"pageStartingNumber":0}}],"characterFormat":{"fontSize":11.0,"fontFamily":"Calibri","fontColor":"#000000FF","fontSizeBidi":11.0,"fontFamilyBidi":"Calibri"},"paragraphFormat":{"afterSpacing":8.0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple"},"lists":[{"listId":0,"abstractListId":0}],"abstractLists":[{"abstractListId":0,"levels":[{"listLevelPattern":"Bullet","followCharacter":"Tab","numberFormat":"","characterFormat":{"fontFamily":"Symbol"},"paragraphFormat":{"leftIndent":36.0,"firstLineIndent":-18.0}},{"listLevelPattern":"Bullet","followCharacter":"Tab","numberFormat":"o","characterFormat":{"fontFamily":"Courier New"},"paragraphFormat":{"leftIndent":72.0,"firstLineIndent":-18.0}},{"listLevelPattern":"Bullet","followCharacter":"Tab","numberFormat":"","characterFormat":{"fontFamily":"Wingdings"},"paragraphFormat":{"leftIndent":108.0,"firstLineIndent":-18.0}},{"listLevelPattern":"Bullet","followCharacter":"Tab","numberFormat":"","characterFormat":{"fontFamily":"Symbol"},"paragraphFormat":{"leftIndent":144.0,"firstLineIndent":-18.0}},{"listLevelPattern":"Bullet","followCharacter":"Tab","numberFormat":"o","characterFormat":{"fontFamily":"Courier New"},"paragraphFormat":{"leftIndent":180.0,"firstLineIndent":-18.0}},{"listLevelPattern":"Bullet","followCharacter":"Tab","numberFormat":"","characterFormat":{"fontFamily":"Wingdings"},"paragraphFormat":{"leftIndent":216.0,"firstLineIndent":-18.0}},{"listLevelPattern":"Bullet","followCharacter":"Tab","numberFormat":"","characterFormat":{"fontFamily":"Symbol"},"paragraphFormat":{"leftIndent":252.0,"firstLineIndent":-18.0}},{"listLevelPattern":"Bullet","followCharacter":"Tab","numberFormat":"o","characterFormat":{"fontFamily":"Courier New"},"paragraphFormat":{"leftIndent":288.0,"firstLineIndent":-18.0}},{"listLevelPattern":"Bullet","followCharacter":"Tab","numberFormat":"","characterFormat":{"fontFamily":"Wingdings"},"paragraphFormat":{"leftIndent":324.0,"firstLineIndent":-18.0}}]}],"background":{"color":"#FFFFFFFF"},"styles":[{"type":"Paragraph","name":"Normal","next":"Normal"},{"type":"Paragraph","name":"Heading 1","basedOn":"Normal","next":"Normal","link":"Heading 1 Char","characterFormat":{"fontSize":16.0,"fontFamily":"Calibri Light","fontColor":"#2F5496FF"},"paragraphFormat":{"beforeSpacing":12.0,"afterSpacing":0.0,"outlineLevel":"Level1"}},{"type":"Paragraph","name":"Heading 2","basedOn":"Normal","next":"Normal","link":"Heading 2 Char","characterFormat":{"fontSize":13.0,"fontFamily":"Calibri Light","fontColor":"#2F5496FF"},"paragraphFormat":{"beforeSpacing":2.0,"afterSpacing":0.0,"outlineLevel":"Level2"}},{"type":"Paragraph","name":"Heading 3","basedOn":"Normal","next":"Normal","link":"Heading 3 Char","characterFormat":{"fontSize":12.0,"fontFamily":"Calibri Light","fontColor":"#1F3763FF"},"paragraphFormat":{"beforeSpacing":2.0,"afterSpacing":0.0,"outlineLevel":"Level3"}},{"type":"Paragraph","name":"Heading 4","basedOn":"Normal","next":"Normal","link":"Heading 4 Char","characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496FF"},"paragraphFormat":{"beforeSpacing":2.0,"afterSpacing":0.0,"outlineLevel":"Level4"}},{"type":"Paragraph","name":"Heading 5","basedOn":"Normal","next":"Normal","link":"Heading 5 Char","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496FF"},"paragraphFormat":{"beforeSpacing":2.0,"afterSpacing":0.0,"outlineLevel":"Level5"}},{"type":"Paragraph","name":"Heading 6","basedOn":"Normal","next":"Normal","link":"Heading 6 Char","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763FF"},"paragraphFormat":{"beforeSpacing":2.0,"afterSpacing":0.0,"outlineLevel":"Level6"}},{"type":"Character","name":"Default Paragraph Font"},{"type":"Character","name":"Heading 1 Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":16.0,"fontFamily":"Calibri Light","fontColor":"#2F5496FF"}},{"type":"Character","name":"Heading 2 Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":13.0,"fontFamily":"Calibri Light","fontColor":"#2F5496FF"}},{"type":"Paragraph","name":"Notes","basedOn":"Normal","next":"Normal","characterFormat":{"bold":true},"paragraphFormat":{"afterSpacing":6.0,"lineSpacing":1.0,"lineSpacingType":"Multiple"}},{"type":"Paragraph","name":"List Paragraph","basedOn":"Normal","next":"List Paragraph","paragraphFormat":{"leftIndent":36.0}},{"type":"Character","name":"Hyperlink","basedOn":"Default Paragraph Font","characterFormat":{"underline":"Single","fontColor":"#0563C1FF"}},{"type":"Character","name":"Unresolved Mention","basedOn":"Default Paragraph Font","characterFormat":{"fontColor":"#808080FF"}},{"type":"Paragraph","name":"Title","basedOn":"Normal","next":"Normal","link":"Title Char","characterFormat":{"fontSize":28.0,"fontFamily":"Calibri Light"},"paragraphFormat":{"afterSpacing":0.0,"lineSpacing":1.0,"lineSpacingType":"Multiple"}},{"type":"Character","name":"Title Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":28.0,"fontFamily":"Calibri Light"}},{"type":"Paragraph","name":"TOC Heading","basedOn":"Heading 1","next":"Normal","paragraphFormat":{"outlineLevel":"BodyText"}},{"type":"Paragraph","name":"TOC 1","basedOn":"Normal","next":"Normal","paragraphFormat":{"afterSpacing":5.0}},{"type":"Paragraph","name":"TOC 2","basedOn":"Normal","next":"Normal","paragraphFormat":{"leftIndent":11.0,"afterSpacing":5.0}},{"type":"Character","name":"Heading 3 Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":12.0,"fontFamily":"Calibri Light","fontColor":"#1F3763FF"}},{"type":"Character","name":"Heading 4 Char","basedOn":"Default Paragraph Font","characterFormat":{"italic":true,"fontFamily":"Calibri Light","fontColor":"#2F5496FF"}},{"type":"Character","name":"Heading 5 Char","basedOn":"Default Paragraph Font","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#2F5496FF"}},{"type":"Character","name":"Heading 6 Char","basedOn":"Default Paragraph Font","characterFormat":{"fontFamily":"Calibri Light","fontColor":"#1F3763FF"}},{"type":"Paragraph","name":"Balloon Text","basedOn":"Normal","next":"Balloon Text","link":"Balloon Text Char","characterFormat":{"fontSize":9.0,"fontFamily":"Segoe UI","fontSizeBidi":9.0,"fontFamilyBidi":"Segoe UI"},"paragraphFormat":{"afterSpacing":0.0,"lineSpacing":1.0,"lineSpacingType":"Multiple"}},{"type":"Character","name":"Balloon Text Char","basedOn":"Default Paragraph Font","characterFormat":{"fontSize":9.0,"fontFamily":"Segoe UI","fontSizeBidi":9.0,"fontFamilyBidi":"Segoe UI"}}],"revisions":[{"author":"Andrew Fuller","date":"2020-06-02T18:41:00Z","revisionType":"Insertion","revisionId":"b756b968-3c64-4455-80aa-61b916ed6f80"},{"author":"Andrew Fuller","date":"2020-06-02T18:41:00Z","revisionType":"Deletion","revisionId":"e8b50102-c9bb-4e08-b827-04728a72980f"},{"author":"Andrew Fuller","date":"2020-06-02T18:41:00Z","revisionType":"Insertion","revisionId":"80a06038-0f6b-4a87-9dae-5518fea6c609"},{"author":"Andrew Fuller","date":"2020-06-02T18:41:00Z","revisionType":"Deletion","revisionId":"2aae587d-9776-4c64-933a-4e2293edec4b"},{"author":"Andrew Fuller","date":"2020-06-02T18:41:00Z","revisionType":"Deletion","revisionId":"798ad0fd-21dc-4bdb-922f-fd9aaae7f938"},{"author":"Andrew Fuller","date":"2020-06-02T18:41:00Z","revisionType":"Insertion","revisionId":"6fc9c1f4-5fbd-4857-9955-523011a8c8a7"},{"author":"Andrew Fuller","date":"2020-06-02T18:35:00Z","revisionType":"Insertion","revisionId":"6ef86691-b42e-4fdc-9c36-126b0d047f29"},{"author":"Andrew Fuller","date":"2020-06-02T18:41:00Z","revisionType":"Insertion","revisionId":"1a353a7a-aabf-477d-9511-142fb35343e2"},{"author":"Andrew Fuller","date":"2020-06-02T18:41:00Z","revisionType":"Deletion","revisionId":"1c78faa0-3e72-48bc-b973-6f52795d10a4"},{"author":"Andrew Fuller","date":"2020-06-02T18:41:00Z","revisionType":"Deletion","revisionId":"b7e55980-4794-4edb-b3d3-15d109d9645d"},{"author":"Andrew Fuller","date":"2020-06-02T18:41:00Z","revisionType":"Insertion","revisionId":"e9e9819b-f471-41f9-b146-eb8134aeaf64"},{"author":"Nancy Davolio","date":"2020-06-02T18:35:00Z","revisionType":"Insertion","revisionId":"0a876474-7164-4c1e-8b97-a18a855e421f"},{"author":"Nancy Davolio","date":"2020-06-02T18:35:00Z","revisionType":"Insertion","revisionId":"9f6e263c-7289-4dad-9292-0455f375da73"},{"author":"Nancy Davolio","date":"2020-06-02T18:35:00Z","revisionType":"Deletion","revisionId":"d6d85993-c119-4223-8299-bbfb7072bab4"},{"author":"Nancy Davolio","date":"2020-06-02T18:35:00Z","revisionType":"Insertion","revisionId":"55973d80-9fa5-4d4f-9bad-dd72e1475b6f"},{"author":"Nancy Davolio","date":"2020-06-02T18:35:00Z","revisionType":"Insertion","revisionId":"a3330ddc-0b35-4102-8fed-74bddc293e57"},{"author":"Nancy Davolio","date":"2020-06-02T18:42:00Z","revisionType":"Deletion","revisionId":"3742a158-cadf-4848-b105-ca2cbcde35c7"},{"author":"Nancy Davolio","date":"2020-06-02T18:42:00Z","revisionType":"Insertion","revisionId":"666ca6c2-ac2b-49b5-bfdb-dff924672b91"}],"defaultTabWidth":36.0,"formatting":false,"trackChanges":true,"protectionType":"NoProtection","enforcement":false,"dontUseHTMLParagraphAutoSpacing":false};
export let formfields = {"sections":[{"blocks":[{"rows":[{"rowFormat":{"allowBreakAcrossPages":true,"isHeader":false,"height":0.0,"heightType":"AtLeast","borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}}},"cells":[{"blocks":[{"characterFormat":{"fontSize":22.0,"fontSizeBidi":22.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"textAlignment":"Right","styleName":"Normal"},"inlines":[{"imageString":"data:image/png;base64,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","length":1,"width":53.25,"height":59.707244873046875,"isInlineImage":true,"isMetaFile":false}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":184.05000305175781,"preferredWidthType":"Point","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"bottom":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"cellWidth":184.05000305175781}},{"blocks":[{"characterFormat":{"fontSize":22.0,"fontSizeBidi":22.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"Job Application Form","characterFormat":{"bold":true,"fontSize":22.0,"boldBidi":true,"fontSizeBidi":22.0,"fontFamilyBidi":"Arial"}}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":283.5,"preferredWidthType":"Point","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"bottom":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"cellWidth":283.5}}]}],"title":null,"description":null,"tableFormat":{"allowAutoFit":true,"leftIndent":0.0,"tableAlignment":"Left","preferredWidth":467.54998779296875,"preferredWidthType":"Point","borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"bidi":false}},{"paragraphFormat":{"styleName":"Normal"},"inlines":[]},{"rows":[{"rowFormat":{"allowBreakAcrossPages":true,"isHeader":false,"height":28.350000381469727,"heightType":"AtLeast","borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"bottom":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}}},"cells":[{"blocks":[{"characterFormat":{"bold":true,"fontSize":12.0,"boldBidi":true,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"General Information","characterFormat":{"bold":true,"fontSize":14.0,"boldBidi":true,"fontSizeBidi":18.0,"fontFamilyBidi":"Arial"}}]}],"cellFormat":{"columnSpan":2,"rowSpan":1,"preferredWidth":467.5,"preferredWidthType":"Point","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"bottom":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone","backgroundColor":"#C6E3FFFF"},"cellWidth":467.5}}]},{"rowFormat":{"allowBreakAcrossPages":true,"isHeader":false,"height":25.5,"heightType":"AtLeast","borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"bottom":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}}},"cells":[{"blocks":[{"characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"Full Name:","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":233.75,"preferredWidthType":"Point","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone"},"cellWidth":233.75}},{"blocks":[{"characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"styleName":"Normal"},"inlines":[{"name":"Text_896b1951_a74d_4","bookmarkType":0},{"hasFieldEnd":true,"formFieldData":{"name":"Text_896b1951_a74d_4","enabled":true,"helpText":"","statusText":"","textInput":{"type":"Text","maxLength":0,"defaultValue":"John","format":""}},"fieldType":0},{"text":" FORMTEXT ","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}},{"fieldType":2},{"name":"_GoBack","bookmarkType":0},{"text":"John","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}},{"name":"_GoBack","bookmarkType":1},{"fieldType":1},{"name":"Text_896b1951_a74d_4","bookmarkType":1}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":233.75,"preferredWidthType":"Point","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone"},"cellWidth":233.75}}]},{"rowFormat":{"allowBreakAcrossPages":true,"isHeader":false,"height":25.5,"heightType":"AtLeast","borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"bottom":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}}},"cells":[{"blocks":[{"characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"Birth Date:","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":233.75,"preferredWidthType":"Point","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone"},"cellWidth":233.75}},{"blocks":[{"characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"styleName":"Normal"},"inlines":[{"hasFieldEnd":true,"formFieldData":{"name":"BirthDayField","enabled":true,"helpText":"","statusText":"","textInput":{"type":"Date","maxLength":0,"defaultValue":"6/2/1990","format":"M/d/yyyy"}},"fieldType":0},{"name":"BirthDayField","bookmarkType":0},{"text":" FORMTEXT ","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}},{"fieldType":2},{"text":"6/2/1990","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}},{"fieldType":1},{"name":"BirthDayField","bookmarkType":1}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":233.75,"preferredWidthType":"Point","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone"},"cellWidth":233.75}}]},{"rowFormat":{"allowBreakAcrossPages":true,"isHeader":false,"height":25.5,"heightType":"AtLeast","borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"bottom":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}}},"cells":[{"blocks":[{"characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"Address:","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":233.75,"preferredWidthType":"Point","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone"},"cellWidth":233.75}},{"blocks":[{"characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"styleName":"Normal"},"inlines":[{"name":"Text_00fd628b_5135_4","bookmarkType":0},{"hasFieldEnd":true,"formFieldData":{"name":"Text_00fd628b_5135_4","enabled":true,"helpText":"","statusText":"","textInput":{"type":"Text","maxLength":0,"defaultValue":"221b Baker Street","format":""}},"fieldType":0},{"text":" FORMTEXT ","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}},{"fieldType":2},{"text":"221b Baker Street","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}},{"fieldType":1},{"name":"Text_00fd628b_5135_4","bookmarkType":1}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":233.75,"preferredWidthType":"Point","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone"},"cellWidth":233.75}}]},{"rowFormat":{"allowBreakAcrossPages":true,"isHeader":false,"height":25.5,"heightType":"AtLeast","borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"bottom":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}}},"cells":[{"blocks":[{"characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"Phone:","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":233.75,"preferredWidthType":"Point","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone"},"cellWidth":233.75}},{"blocks":[{"characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"styleName":"Normal"},"inlines":[{"name":"Text_7df46404_8bba_4","bookmarkType":0},{"hasFieldEnd":true,"formFieldData":{"name":"Text_7df46404_8bba_4","enabled":true,"helpText":"","statusText":"","textInput":{"type":"Text","maxLength":0,"defaultValue":"(206)555-3412","format":""}},"fieldType":0},{"text":" FORMTEXT ","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}},{"fieldType":2},{"text":"(206)555-3412","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}},{"fieldType":1},{"name":"Text_7df46404_8bba_4","bookmarkType":1}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":233.75,"preferredWidthType":"Point","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone"},"cellWidth":233.75}}]},{"rowFormat":{"allowBreakAcrossPages":true,"isHeader":false,"height":25.5,"heightType":"AtLeast","borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"bottom":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}}},"cells":[{"blocks":[{"characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"Email:","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":233.75,"preferredWidthType":"Point","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone"},"cellWidth":233.75}},{"blocks":[{"characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"styleName":"Normal"},"inlines":[{"name":"Text_201d0986_0d35_4","bookmarkType":0},{"hasFieldEnd":true,"formFieldData":{"name":"Text_201d0986_0d35_4","enabled":true,"helpText":"","statusText":"","textInput":{"type":"Text","maxLength":0,"defaultValue":"John@company.com","format":""}},"fieldType":0},{"text":" FORMTEXT ","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}},{"fieldType":2},{"text":"John@company.com","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}},{"fieldType":1},{"name":"Text_201d0986_0d35_4","bookmarkType":1}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":233.75,"preferredWidthType":"Point","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone"},"cellWidth":233.75}}]}],"title":null,"description":null,"tableFormat":{"allowAutoFit":true,"leftIndent":0.0,"tableAlignment":"Left","preferredWidthType":"Auto","borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"bottom":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":true},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"bidi":false}},{"characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"styleName":"Normal"},"inlines":[]},{"rows":[{"rowFormat":{"allowBreakAcrossPages":true,"isHeader":false,"height":25.5,"heightType":"AtLeast","borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}}},"cells":[{"blocks":[{"characterFormat":{"bold":true,"fontSize":12.0,"boldBidi":true,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"Educational Qualification","characterFormat":{"bold":true,"fontSize":14.0,"boldBidi":true,"fontSizeBidi":18.0,"fontFamilyBidi":"Arial"}}]}],"cellFormat":{"columnSpan":2,"rowSpan":1,"preferredWidth":467.54998779296875,"preferredWidthType":"Point","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"bottom":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone","backgroundColor":"#C6E3FFFF"},"cellWidth":467.54998779296875}}]},{"rowFormat":{"allowBreakAcrossPages":true,"isHeader":false,"height":25.5,"heightType":"AtLeast","borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}}},"cells":[{"blocks":[{"characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"Type:","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":233.64999389648438,"preferredWidthType":"Point","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"right":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"bottom":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone"},"cellWidth":233.64999389648438}},{"blocks":[{"characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"styleName":"Normal"},"inlines":[{"name":"Drop_6a31054b_b15e_4","bookmarkType":0},{"hasFieldEnd":true,"formFieldData":{"name":"Drop_6a31054b_b15e_4","enabled":true,"helpText":"","statusText":"","dropDownList":{"dropDownItems":["Higher","Vocational","Universal"],"selectedIndex":0}},"fieldType":0},{"text":"FORMDROPDOWN","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}},{"fieldType":2},{"fieldType":1},{"name":"Drop_6a31054b_b15e_4","bookmarkType":1}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":233.89999389648438,"preferredWidthType":"Point","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"bottom":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone"},"cellWidth":233.89999389648438}}]},{"rowFormat":{"allowBreakAcrossPages":true,"isHeader":false,"height":25.5,"heightType":"AtLeast","borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}}},"cells":[{"blocks":[{"characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"Institution:","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":233.64999389648438,"preferredWidthType":"Point","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"right":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone"},"cellWidth":233.64999389648438}},{"blocks":[{"characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"styleName":"Normal"},"inlines":[{"name":"Text_875ac2ab_1794_4","bookmarkType":0},{"hasFieldEnd":true,"formFieldData":{"name":"Text_875ac2ab_1794_4","enabled":true,"helpText":"","statusText":"","textInput":{"type":"Text","maxLength":0,"defaultValue":"Michigan University","format":""}},"fieldType":0},{"text":" FORMTEXT ","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}},{"fieldType":2},{"text":"Michigan University","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}},{"fieldType":1},{"name":"Text_875ac2ab_1794_4","bookmarkType":1}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":233.89999389648438,"preferredWidthType":"Point","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"top":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone"},"cellWidth":233.89999389648438}}]},{"rowFormat":{"allowBreakAcrossPages":true,"isHeader":false,"height":25.5,"heightType":"AtLeast","borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}}},"cells":[{"blocks":[{"characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"styleName":"Normal"},"inlines":[{"text":"Programming Languages:","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":233.64999389648438,"preferredWidthType":"Point","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"right":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone"},"cellWidth":233.64999389648438}},{"blocks":[{"characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"styleName":"Normal"},"inlines":[]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":233.89999389648438,"preferredWidthType":"Point","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"top":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone"},"cellWidth":233.89999389648438}}]},{"rowFormat":{"allowBreakAcrossPages":true,"isHeader":false,"height":25.5,"heightType":"AtLeast","borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}}},"cells":[{"blocks":[{"characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"leftIndent":36.0,"styleName":"Normal"},"inlines":[{"text":"JavaScript:","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":233.64999389648438,"preferredWidthType":"Point","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"right":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone"},"cellWidth":233.64999389648438}},{"blocks":[{"characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"styleName":"Normal"},"inlines":[{"hasFieldEnd":true,"formFieldData":{"name":"javascript","enabled":true,"helpText":"","statusText":"","dropDownList":{"dropDownItems":["Perfect","Good","Excellent"],"selectedIndex":0}},"fieldType":0},{"name":"javascript","bookmarkType":0},{"text":" FORMDROPDOWN ","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}},{"fieldType":2},{"fieldType":1},{"name":"javascript","bookmarkType":1}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":233.89999389648438,"preferredWidthType":"Point","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"top":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone"},"cellWidth":233.89999389648438}}]},{"rowFormat":{"allowBreakAcrossPages":true,"isHeader":false,"height":25.5,"heightType":"AtLeast","borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}}},"cells":[{"blocks":[{"characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"leftIndent":36.0,"styleName":"Normal"},"inlines":[{"text":"Angular:","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":233.64999389648438,"preferredWidthType":"Point","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"right":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone"},"cellWidth":233.64999389648438}},{"blocks":[{"characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"styleName":"Normal"},"inlines":[{"name":"Drop_0a143cfa_bfc5_4","bookmarkType":0},{"hasFieldEnd":true,"formFieldData":{"name":"Drop_0a143cfa_bfc5_4","enabled":true,"helpText":"","statusText":"","dropDownList":{"dropDownItems":["Perfect","Good","Excellent"],"selectedIndex":0}},"fieldType":0},{"text":"FORMDROPDOWN","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}},{"fieldType":2},{"fieldType":1},{"name":"Drop_0a143cfa_bfc5_4","bookmarkType":1}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":233.89999389648438,"preferredWidthType":"Point","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"top":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone"},"cellWidth":233.89999389648438}}]},{"rowFormat":{"allowBreakAcrossPages":true,"isHeader":false,"height":25.5,"heightType":"AtLeast","borders":{"left":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}}},"cells":[{"blocks":[{"characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"leftIndent":36.0,"styleName":"Normal"},"inlines":[{"text":"React:","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":233.64999389648438,"preferredWidthType":"Point","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"right":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone"},"cellWidth":233.64999389648438}},{"blocks":[{"characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"styleName":"Normal"},"inlines":[{"name":"Drop_54e3e178_e685_4","bookmarkType":0},{"hasFieldEnd":true,"formFieldData":{"name":"Drop_54e3e178_e685_4","enabled":true,"helpText":"","statusText":"","dropDownList":{"dropDownItems":["Perfect","Good","Excellent"],"selectedIndex":0}},"fieldType":0},{"text":"FORMDROPDOWN","characterFormat":{"fontSize":12.0,"fontSizeBidi":16.0,"fontFamilyBidi":"Arial"}},{"fieldType":2},{"fieldType":1},{"name":"Drop_54e3e178_e685_4","bookmarkType":1}]}],"cellFormat":{"columnSpan":1,"rowSpan":1,"preferredWidth":233.89999389648438,"preferredWidthType":"Point","verticalAlignment":"Center","isSamePaddingAsTable":true,"borders":{"left":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"top":{"lineStyle":"Cleared","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false,"color":"#5B9BD5FF"},"vertical":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"shading":{"texture":"TextureNone"},"cellWidth":233.89999389648438}}]}],"title":null,"description":null,"tableFormat":{"allowAutoFit":true,"leftIndent":0.0,"tableAlignment":"Left","preferredWidth":467.54998779296875,"preferredWidthType":"Point","borders":{"left":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false},"right":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false},"top":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false},"bottom":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false},"vertical":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false},"horizontal":{"lineStyle":"Single","lineWidth":0.5,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalDown":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false},"diagonalUp":{"lineStyle":"None","lineWidth":0.0,"shadow":false,"space":0.0,"hasNoneStyle":false}},"bidi":false}},{"paragraphFormat":{"styleName":"Normal"},"inlines":[]}],"headersFooters":{},"sectionFormat":{"headerDistance":36.0,"footerDistance":36.0,"pageWidth":612.0,"pageHeight":792.0,"leftMargin":72.0,"rightMargin":72.0,"topMargin":72.0,"bottomMargin":72.0,"differentFirstPage":false,"differentOddAndEvenPages":false,"bidi":false,"restartPageNumbering":false,"pageStartingNumber":0}}],"characterFormat":{"fontSize":11.0,"fontFamily":"Calibri","fontSizeBidi":14.0,"fontFamilyBidi":"Arial"},"paragraphFormat":{"afterSpacing":8.0,"lineSpacing":1.0791666507720947,"lineSpacingType":"Multiple"},"background":{"color":"#FFFFFFFF"},"styles":[{"type":"Paragraph","name":"Normal","next":"Normal"},{"type":"Character","name":"Default Paragraph Font"}],"defaultTabWidth":36.0,"formatting":false,"protectionType":"FormFieldsOnly","enforcement":true,"hashValue":"P2YQ07iIVZvm/ALfj/u8BIXJMhkr43vd/+58R5UVkpkNMJHFba77a8EYmtVWsJRd70JXPGyCUjtGYuG7yE/XQQ==","saltValue":"RqzKqJFypmzVqc0EgwfzcA==","dontUseHTMLParagraphAutoSpacing":false};
export let mailmerge =
{
	"sections": [
		{
			"blocks": [
				{
					"rows": [
						{
							"rowFormat": {
								"allowBreakAcrossPages": true,
								"isHeader": false,
								"height": 83.5999984741211,
								"heightType": "AtLeast",
								"borders": {
									"left": {
										"lineStyle": "None",
										"lineWidth": 0.0,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": true
									},
									"right": {
										"lineStyle": "None",
										"lineWidth": 0.0,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": true
									},
									"top": {
										"lineStyle": "None",
										"lineWidth": 0.0,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": true
									},
									"bottom": {
										"lineStyle": "None",
										"lineWidth": 0.0,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": true
									},
									"vertical": {
										"lineStyle": "None",
										"lineWidth": 0.0,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": true
									},
									"horizontal": {
										"lineStyle": "None",
										"lineWidth": 0.0,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": true
									},
									"diagonalDown": {
										"lineStyle": "None",
										"lineWidth": 0.0,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false
									},
									"diagonalUp": {
										"lineStyle": "None",
										"lineWidth": 0.0,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false
									}
								}
							},
							"cells": [
								{
									"blocks": [
										{
											"characterFormat": {
												"fontFamily": "Calibri"
											},
											"paragraphFormat": {
												"styleName": "Header",
												"tabs": [
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 234.0
													},
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 468.0
													}
												]
											},
											"inlines": [
												{
													"hasFieldEnd": true,
													"fieldType": 0
												},
												{
													"text": " MERGEFIELD  TableStart:Orders  \\* MERGEFORMAT ",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"fieldType": 2
												},
												{
													"text": "«TableStart:Orders»",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"fieldType": 1
												}
											]
										},
										{
											"characterFormat": {
												"bold": true,
												"fontSize": 24.0,
												"fontSizeBidi": 24.0
											},
											"paragraphFormat": {
												"styleName": "Header",
												"tabs": [
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 234.0
													},
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 468.0
													}
												]
											},
											"inlines": [
												{
													"text": "INVOICE",
													"characterFormat": {
														"bold": true,
														"fontSize": 24.0,
														"fontSizeBidi": 24.0
													}
												}
											]
										},
										{
											"paragraphFormat": {
												"styleName": "Header",
												"tabs": [
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 234.0
													},
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 468.0
													}
												]
											},
											"inlines": [
												{
													"imageString": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAM4AAAAJCAYAAAB68hPIAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAA+SURBVFhH7dgxEQAwDAOxgCuiYiyiEEgxxLN8Jwi/uMbM1qvuHmCnzn0D7AgHAsKBgHAgIBwICAcC7mhY6/kc4VEEyn2PzAAAAABJRU5ErkJggg==",
													"length": 1,
													"width": 103.0,
													"height": 4.499999523162842,
													"isInlineImage": true,
													"isMetaFile": false
												}
											]
										},
										{
											"characterFormat": {
												"bold": true,
												"fontFamily": "Calibri"
											},
											"paragraphFormat": {
												"styleName": "Header",
												"tabs": [
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 234.0
													},
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 468.0
													}
												]
											},
											"inlines": [
												{
													"text": "Invoice to:",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri"
													}
												}
											]
										},
										{
											"characterFormat": {
												"fontFamily": "Calibri"
											},
											"paragraphFormat": {
												"styleName": "Header",
												"tabs": [
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 234.0
													},
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 468.0
													}
												]
											},
											"inlines": [
												{
													"hasFieldEnd": true,
													"fieldType": 0
												},
												{
													"text": " MERGEFIELD  ShipName  \\* MERGEFORMAT ",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"fieldType": 2
												},
												{
													"text": "«ShipName»",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"fieldType": 1
												}
											]
										},
										{
											"characterFormat": {
												"fontFamily": "Calibri"
											},
											"paragraphFormat": {
												"styleName": "Header",
												"tabs": [
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 234.0
													},
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 468.0
													}
												]
											},
											"inlines": [
												{
													"hasFieldEnd": true,
													"fieldType": 0
												},
												{
													"text": " MERGEFIELD  ShipAddress  \\* MERGEFORMAT ",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"fieldType": 2
												},
												{
													"text": "«ShipAddress»",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"fieldType": 1
												}
											]
										},
										{
											"characterFormat": {
												"fontFamily": "Calibri"
											},
											"paragraphFormat": {
												"styleName": "Header",
												"tabs": [
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 234.0
													},
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 468.0
													}
												]
											},
											"inlines": [
												{
													"hasFieldEnd": true,
													"fieldType": 0
												},
												{
													"text": " MERGEFIELD  ShipCity  \\* MERGEFORMAT ",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"fieldType": 2
												},
												{
													"text": "«ShipCity»",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"fieldType": 1
												},
												{
													"text": " - ",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"hasFieldEnd": true,
													"fieldType": 0
												},
												{
													"text": " MERGEFIELD  ShipPostalCode  \\* MERGEFORMAT ",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"fieldType": 2
												},
												{
													"text": "«ShipPostalCode»",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"fieldType": 1
												}
											]
										},
										{
											"paragraphFormat": {
												"styleName": "Header",
												"tabs": [
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 234.0
													},
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 468.0
													}
												]
											},
											"inlines": [
												{
													"hasFieldEnd": true,
													"fieldType": 0
												},
												{
													"text": " MERGEFIELD  ShipCountry  \\* MERGEFORMAT ",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"fieldType": 2
												},
												{
													"text": "«",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"text": "ShipCountry",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"text": "»",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"fieldType": 1
												}
											]
										}
									],
									"cellFormat": {
										"leftMargin": 5.400000095367432,
										"rightMargin": 5.400000095367432,
										"topMargin": 0.0,
										"bottomMargin": 0.0,
										"columnSpan": 1,
										"rowSpan": 1,
										"preferredWidth": 347.1000061035156,
										"preferredWidthType": "Point",
										"verticalAlignment": "Top",
										"isSamePaddingAsTable": false,
										"borders": {
											"left": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"right": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"top": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"bottom": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"vertical": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"horizontal": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalDown": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalUp": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											}
										},
										"shading": {
											"texture": "TextureNone",
											"backgroundColor": "#FFFFFFFF"
										},
										"cellWidth": 347.1000061035156
									}
								},
								{
									"blocks": [
										{
											"paragraphFormat": {
												"styleName": "Header",
												"tabs": [
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 234.0
													},
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 468.0
													}
												]
											},
											"inlines": []
										},
										{
											"paragraphFormat": {
												"styleName": "Header",
												"tabs": [
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 234.0
													},
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 468.0
													}
												]
											},
											"inlines": []
										},
										{
											"paragraphFormat": {
												"afterSpacing": 0.0,
												"styleName": "Normal"
											},
											"inlines": []
										},
										{
											"characterFormat": {
												"fontFamily": "Calibri"
											},
											"paragraphFormat": {
												"afterSpacing": 0.0,
												"styleName": "Normal"
											},
											"inlines": []
										},
										{
											"characterFormat": {
												"bold": true,
												"fontFamily": "Calibri"
											},
											"paragraphFormat": {
												"styleName": "Header",
												"tabs": [
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 234.0
													},
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 468.0
													}
												]
											},
											"inlines": [
												{
													"text": "Order ID         ",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri"
													}
												},
												{
													"text": "  :",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri"
													}
												},
												{
													"text": " ",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri"
													}
												},
												{
													"hasFieldEnd": true,
													"fieldType": 0
												},
												{
													"text": " MERGEFIELD  OrderID  \\* MERGEFORMAT ",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"fieldType": 2
												},
												{
													"text": "«OrderID»",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"fieldType": 1
												}
											]
										},
										{
											"characterFormat": {
												"fontFamily": "Calibri"
											},
											"paragraphFormat": {
												"styleName": "Header",
												"tabs": [
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 234.0
													},
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 468.0
													}
												]
											},
											"inlines": [
												{
													"text": "Order",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri"
													}
												},
												{
													"text": " Date    ",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri"
													}
												},
												{
													"text": "  :",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri"
													}
												},
												{
													"text": " ",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"hasFieldEnd": true,
													"fieldType": 0
												},
												{
													"text": " MERGEFIELD  OrderDate \\@ \"dd-MMM-yyyy\" \\* MERGEFORMAT ",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"fieldType": 2
												},
												{
													"text": "«OrderDate»",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"fieldType": 1
												}
											]
										},
										{
											"characterFormat": {
												"bold": true,
												"fontFamily": "Calibri"
											},
											"paragraphFormat": {
												"styleName": "Header",
												"tabs": [
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 234.0
													},
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 468.0
													}
												]
											},
											"inlines": [
												{
													"text": "Customer ID  ",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri"
													}
												},
												{
													"text": "  :",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri"
													}
												},
												{
													"text": " ",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri"
													}
												},
												{
													"hasFieldEnd": true,
													"fieldType": 0
												},
												{
													"text": " MERGEFIELD  CustomerID  \\* MERGEFORMAT ",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"fieldType": 2
												},
												{
													"text": "«CustomerID»",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"fieldType": 1
												}
											]
										},
										{
											"paragraphFormat": {
												"styleName": "Header",
												"tabs": [
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 234.0
													},
													{
														"tabJustification": "Left",
														"position": 0.0,
														"tabLeader": "None",
														"deletePosition": 468.0
													}
												]
											},
											"inlines": [
												{
													"text": "Shipped Date  : ",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri"
													}
												},
												{
													"hasFieldEnd": true,
													"fieldType": 0
												},
												{
													"text": " MERGEFIELD  ShippedDate \\@ \"dd-MMM-yyyy\" \\* MERGEFORMAT ",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"fieldType": 2
												},
												{
													"text": "«ShippedDate»",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"fieldType": 1
												},
												{
													"text": " ",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"hasFieldEnd": true,
													"fieldType": 0
												},
												{
													"text": " MERGEFIEL",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"text": "D  TableEnd:Orders  \\* MERGEFORMAT ",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"fieldType": 2
												},
												{
													"text": "«TableEnd:Orders»",
													"characterFormat": {
														"fontFamily": "Calibri"
													}
												},
												{
													"fieldType": 1
												}
											]
										}
									],
									"cellFormat": {
										"leftMargin": 5.400000095367432,
										"rightMargin": 5.400000095367432,
										"topMargin": 0.0,
										"bottomMargin": 0.0,
										"columnSpan": 1,
										"rowSpan": 1,
										"preferredWidth": 203.6999969482422,
										"preferredWidthType": "Point",
										"verticalAlignment": "Top",
										"isSamePaddingAsTable": false,
										"borders": {
											"left": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"right": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"top": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"bottom": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"vertical": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"horizontal": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalDown": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalUp": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											}
										},
										"shading": {
											"texture": "TextureNone",
											"backgroundColor": "#FFFFFFFF"
										},
										"cellWidth": 203.6999969482422
									}
								}
							]
						}
					],
					"title": null,
					"description": null,
					"tableFormat": {
						"allowAutoFit": false,
						"leftIndent": 0.0,
						"tableAlignment": "Left",
						"preferredWidthType": "Auto",
						"borders": {
							"left": {
								"lineStyle": "None",
								"lineWidth": 0.0,
								"shadow": false,
								"space": 0.0,
								"hasNoneStyle": true
							},
							"right": {
								"lineStyle": "None",
								"lineWidth": 0.0,
								"shadow": false,
								"space": 0.0,
								"hasNoneStyle": true
							},
							"top": {
								"lineStyle": "None",
								"lineWidth": 0.0,
								"shadow": false,
								"space": 0.0,
								"hasNoneStyle": true
							},
							"bottom": {
								"lineStyle": "None",
								"lineWidth": 0.0,
								"shadow": false,
								"space": 0.0,
								"hasNoneStyle": true
							},
							"vertical": {
								"lineStyle": "None",
								"lineWidth": 0.0,
								"shadow": false,
								"space": 0.0,
								"hasNoneStyle": true
							},
							"horizontal": {
								"lineStyle": "None",
								"lineWidth": 0.0,
								"shadow": false,
								"space": 0.0,
								"hasNoneStyle": true
							},
							"diagonalDown": {
								"lineStyle": "None",
								"lineWidth": 0.0,
								"shadow": false,
								"space": 0.0,
								"hasNoneStyle": false
							},
							"diagonalUp": {
								"lineStyle": "None",
								"lineWidth": 0.0,
								"shadow": false,
								"space": 0.0,
								"hasNoneStyle": false
							}
						},
						"bidi": false
					}
				},
				{
					"paragraphFormat": {
						"styleName": "Normal"
					},
					"inlines": []
				},
				{
					"rows": [
						{
							"rowFormat": {
								"allowBreakAcrossPages": true,
								"isHeader": false,
								"height": 1.0,
								"heightType": "AtLeast",
								"borders": {
									"left": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"right": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"top": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"bottom": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"vertical": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"horizontal": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"diagonalDown": {
										"lineStyle": "None",
										"lineWidth": 0.0,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false
									},
									"diagonalUp": {
										"lineStyle": "None",
										"lineWidth": 0.0,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false
									}
								}
							},
							"cells": [
								{
									"blocks": [
										{
											"characterFormat": {
												"bold": true,
												"fontFamily": "Calibri",
												"fontColor": "#FFFFFFFF",
												"boldBidi": true,
												"fontFamilyBidi": "Arial"
											},
											"paragraphFormat": {
												"textAlignment": "Center",
												"styleName": "Normal"
											},
											"inlines": [
												{
													"text": "Product",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri",
														"fontColor": "#FFFFFFFF",
														"boldBidi": true,
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"text": " ID",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri",
														"fontColor": "#FFFFFFFF",
														"boldBidi": true,
														"fontFamilyBidi": "Arial"
													}
												}
											]
										}
									],
									"cellFormat": {
										"leftMargin": 5.400000095367432,
										"rightMargin": 5.400000095367432,
										"topMargin": 0.0,
										"bottomMargin": 0.0,
										"columnSpan": 1,
										"rowSpan": 1,
										"preferredWidth": 107.9000015258789,
										"preferredWidthType": "Point",
										"verticalAlignment": "Top",
										"isSamePaddingAsTable": false,
										"borders": {
											"left": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"right": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"top": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"bottom": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"vertical": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"horizontal": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalDown": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalUp": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											}
										},
										"shading": {
											"texture": "TextureNone",
											"backgroundColor": "#2E74B5FF"
										},
										"cellWidth": 107.9000015258789
									}
								},
								{
									"blocks": [
										{
											"characterFormat": {
												"bold": true,
												"fontFamily": "Calibri",
												"fontColor": "#FFFFFFFF",
												"boldBidi": true,
												"fontFamilyBidi": "Arial"
											},
											"paragraphFormat": {
												"textAlignment": "Center",
												"styleName": "Normal"
											},
											"inlines": [
												{
													"text": "Quantity",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri",
														"fontColor": "#FFFFFFFF",
														"boldBidi": true,
														"fontFamilyBidi": "Arial"
													}
												}
											]
										}
									],
									"cellFormat": {
										"leftMargin": 5.400000095367432,
										"rightMargin": 5.400000095367432,
										"topMargin": 0.0,
										"bottomMargin": 0.0,
										"columnSpan": 1,
										"rowSpan": 1,
										"preferredWidth": 107.9000015258789,
										"preferredWidthType": "Point",
										"verticalAlignment": "Top",
										"isSamePaddingAsTable": false,
										"borders": {
											"left": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"right": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"top": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"bottom": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"vertical": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"horizontal": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalDown": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalUp": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											}
										},
										"shading": {
											"texture": "TextureNone",
											"backgroundColor": "#2E74B5FF"
										},
										"cellWidth": 107.9000015258789
									}
								},
								{
									"blocks": [
										{
											"characterFormat": {
												"bold": true,
												"fontFamily": "Calibri",
												"fontColor": "#FFFFFFFF",
												"boldBidi": true,
												"fontFamilyBidi": "Arial"
											},
											"paragraphFormat": {
												"textAlignment": "Center",
												"styleName": "Normal"
											},
											"inlines": [
												{
													"text": "Unit ",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri",
														"fontColor": "#FFFFFFFF",
														"boldBidi": true,
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"text": "Price",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri",
														"fontColor": "#FFFFFFFF",
														"boldBidi": true,
														"fontFamilyBidi": "Arial"
													}
												}
											]
										}
									],
									"cellFormat": {
										"leftMargin": 5.400000095367432,
										"rightMargin": 5.400000095367432,
										"topMargin": 0.0,
										"bottomMargin": 0.0,
										"columnSpan": 1,
										"rowSpan": 1,
										"preferredWidth": 107.9000015258789,
										"preferredWidthType": "Point",
										"verticalAlignment": "Top",
										"isSamePaddingAsTable": false,
										"borders": {
											"left": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"right": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"top": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"bottom": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"vertical": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"horizontal": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalDown": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalUp": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											}
										},
										"shading": {
											"texture": "TextureNone",
											"backgroundColor": "#2E74B5FF"
										},
										"cellWidth": 107.9000015258789
									}
								},
								{
									"blocks": [
										{
											"characterFormat": {
												"bold": true,
												"fontFamily": "Calibri",
												"fontColor": "#FFFFFFFF",
												"boldBidi": true,
												"fontFamilyBidi": "Arial"
											},
											"paragraphFormat": {
												"textAlignment": "Center",
												"styleName": "Normal"
											},
											"inlines": [
												{
													"text": "Discount",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri",
														"fontColor": "#FFFFFFFF",
														"boldBidi": true,
														"fontFamilyBidi": "Arial"
													}
												}
											]
										}
									],
									"cellFormat": {
										"leftMargin": 5.400000095367432,
										"rightMargin": 5.400000095367432,
										"topMargin": 0.0,
										"bottomMargin": 0.0,
										"columnSpan": 1,
										"rowSpan": 1,
										"preferredWidth": 107.9000015258789,
										"preferredWidthType": "Point",
										"verticalAlignment": "Top",
										"isSamePaddingAsTable": false,
										"borders": {
											"left": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"right": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"top": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"bottom": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"vertical": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"horizontal": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalDown": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalUp": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											}
										},
										"shading": {
											"texture": "TextureNone",
											"backgroundColor": "#2E74B5FF"
										},
										"cellWidth": 107.9000015258789
									}
								},
								{
									"blocks": [
										{
											"characterFormat": {
												"bold": true,
												"fontFamily": "Calibri",
												"fontColor": "#FFFFFFFF",
												"boldBidi": true,
												"fontFamilyBidi": "Arial"
											},
											"paragraphFormat": {
												"textAlignment": "Center",
												"styleName": "Normal"
											},
											"inlines": [
												{
													"text": "Price",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri",
														"fontColor": "#FFFFFFFF",
														"boldBidi": true,
														"fontFamilyBidi": "Arial"
													}
												}
											]
										}
									],
									"cellFormat": {
										"leftMargin": 5.400000095367432,
										"rightMargin": 5.400000095367432,
										"topMargin": 0.0,
										"bottomMargin": 0.0,
										"columnSpan": 1,
										"rowSpan": 1,
										"preferredWidth": 107.9000015258789,
										"preferredWidthType": "Point",
										"verticalAlignment": "Top",
										"isSamePaddingAsTable": false,
										"borders": {
											"left": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"right": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"top": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"bottom": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"vertical": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"horizontal": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalDown": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalUp": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											}
										},
										"shading": {
											"texture": "TextureNone",
											"backgroundColor": "#2E74B5FF"
										},
										"cellWidth": 107.9000015258789
									}
								}
							]
						},
						{
							"rowFormat": {
								"allowBreakAcrossPages": true,
								"isHeader": false,
								"height": 1.0,
								"heightType": "AtLeast",
								"borders": {
									"left": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"right": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"top": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"bottom": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"vertical": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"horizontal": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"diagonalDown": {
										"lineStyle": "None",
										"lineWidth": 0.0,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false
									},
									"diagonalUp": {
										"lineStyle": "None",
										"lineWidth": 0.0,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false
									}
								}
							},
							"cells": [
								{
									"blocks": [
										{
											"characterFormat": {
												"fontFamily": "Calibri",
												"fontFamilyBidi": "Arial"
											},
											"paragraphFormat": {
												"textAlignment": "Center",
												"styleName": "Normal"
											},
											"inlines": [
												{
													"hasFieldEnd": true,
													"fieldType": 0
												},
												{
													"text": " MERGEFIELD  TableStart:Order  \\* MERGEFORMAT ",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri",
														"boldBidi": true,
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"fieldType": 2
												},
												{
													"text": "«",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri",
														"boldBidi": true,
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"text": "TableStart:Order",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri",
														"boldBidi": true,
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"text": "»",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri",
														"boldBidi": true,
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"fieldType": 1
												},
												{
													"text": " ",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri",
														"boldBidi": true,
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"hasFieldEnd": true,
													"fieldType": 0
												},
												{
													"text": " MERGEFIELD  ProductName  \\* MERGEFORMAT ",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri",
														"boldBidi": true,
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"fieldType": 2
												},
												{
													"text": "«",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri",
														"boldBidi": true,
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"text": "ProductName",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri",
														"boldBidi": true,
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"text": "»",
													"characterFormat": {
														"bold": true,
														"fontFamily": "Calibri",
														"boldBidi": true,
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"fieldType": 1
												}
											]
										}
									],
									"cellFormat": {
										"leftMargin": 5.400000095367432,
										"rightMargin": 5.400000095367432,
										"topMargin": 0.0,
										"bottomMargin": 0.0,
										"columnSpan": 1,
										"rowSpan": 1,
										"preferredWidth": 107.9000015258789,
										"preferredWidthType": "Point",
										"verticalAlignment": "Top",
										"isSamePaddingAsTable": false,
										"borders": {
											"left": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"right": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"top": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"bottom": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"vertical": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"horizontal": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalDown": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalUp": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											}
										},
										"shading": {
											"texture": "TextureNone",
											"backgroundColor": "#E7E6E6FF"
										},
										"cellWidth": 107.9000015258789
									}
								},
								{
									"blocks": [
										{
											"characterFormat": {
												"fontFamily": "Calibri",
												"fontFamilyBidi": "Arial"
											},
											"paragraphFormat": {
												"textAlignment": "Center",
												"styleName": "Normal"
											},
											"inlines": [
												{
													"hasFieldEnd": true,
													"fieldType": 0
												},
												{
													"text": " MERGEFIELD  Quantity  \\* MERGEFORMAT ",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"fieldType": 2
												},
												{
													"text": "«",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"text": "Quantity",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"text": "»",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"fieldType": 1
												}
											]
										}
									],
									"cellFormat": {
										"leftMargin": 5.400000095367432,
										"rightMargin": 5.400000095367432,
										"topMargin": 0.0,
										"bottomMargin": 0.0,
										"columnSpan": 1,
										"rowSpan": 1,
										"preferredWidth": 107.9000015258789,
										"preferredWidthType": "Point",
										"verticalAlignment": "Top",
										"isSamePaddingAsTable": false,
										"borders": {
											"left": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"right": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"top": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"bottom": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"vertical": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"horizontal": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalDown": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalUp": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											}
										},
										"shading": {
											"texture": "TextureNone",
											"backgroundColor": "#E7E6E6FF"
										},
										"cellWidth": 107.9000015258789
									}
								},
								{
									"blocks": [
										{
											"characterFormat": {
												"fontFamily": "Calibri",
												"fontFamilyBidi": "Arial"
											},
											"paragraphFormat": {
												"textAlignment": "Center",
												"styleName": "Normal"
											},
											"inlines": [
												{
													"text": "$",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"hasFieldEnd": true,
													"fieldType": 0
												},
												{
													"text": " MERGEFIELD  UnitPrice  \\* MERGEFORMAT ",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"fieldType": 2
												},
												{
													"text": "«",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"text": "UnitPrice",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"text": "»",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"fieldType": 1
												}
											]
										}
									],
									"cellFormat": {
										"leftMargin": 5.400000095367432,
										"rightMargin": 5.400000095367432,
										"topMargin": 0.0,
										"bottomMargin": 0.0,
										"columnSpan": 1,
										"rowSpan": 1,
										"preferredWidth": 107.9000015258789,
										"preferredWidthType": "Point",
										"verticalAlignment": "Top",
										"isSamePaddingAsTable": false,
										"borders": {
											"left": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"right": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"top": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"bottom": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"vertical": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"horizontal": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalDown": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalUp": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											}
										},
										"shading": {
											"texture": "TextureNone",
											"backgroundColor": "#E7E6E6FF"
										},
										"cellWidth": 107.9000015258789
									}
								},
								{
									"blocks": [
										{
											"characterFormat": {
												"fontFamily": "Calibri",
												"fontFamilyBidi": "Arial"
											},
											"paragraphFormat": {
												"textAlignment": "Center",
												"styleName": "Normal"
											},
											"inlines": [
												{
													"hasFieldEnd": true,
													"fieldType": 0
												},
												{
													"text": " MERGEFIELD  Discount  \\* MERGEFORMAT ",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"fieldType": 2
												},
												{
													"text": "«",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"text": "Discount",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"text": "»",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"fieldType": 1
												}
											]
										}
									],
									"cellFormat": {
										"leftMargin": 5.400000095367432,
										"rightMargin": 5.400000095367432,
										"topMargin": 0.0,
										"bottomMargin": 0.0,
										"columnSpan": 1,
										"rowSpan": 1,
										"preferredWidth": 107.9000015258789,
										"preferredWidthType": "Point",
										"verticalAlignment": "Top",
										"isSamePaddingAsTable": false,
										"borders": {
											"left": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"right": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"top": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"bottom": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"vertical": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"horizontal": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalDown": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalUp": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											}
										},
										"shading": {
											"texture": "TextureNone",
											"backgroundColor": "#E7E6E6FF"
										},
										"cellWidth": 107.9000015258789
									}
								},
								{
									"blocks": [
										{
											"characterFormat": {
												"fontFamily": "Calibri",
												"fontFamilyBidi": "Arial"
											},
											"paragraphFormat": {
												"textAlignment": "Center",
												"styleName": "Normal"
											},
											"inlines": [
												{
													"text": "$",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"hasFieldEnd": true,
													"fieldType": 0
												},
												{
													"text": " MERGEFIELD  ExtendedPrice  \\* MERGEFORMAT ",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"fieldType": 2
												},
												{
													"text": "«",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"text": "ExtendedPrice",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"text": "»",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"fieldType": 1
												},
												{
													"text": " ",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"hasFieldEnd": true,
													"fieldType": 0
												},
												{
													"text": " MERGEFIELD  TableEnd:Order  \\* ME",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"text": "RGEFORMAT ",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"fieldType": 2
												},
												{
													"text": "«",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"text": "TableEnd:Order",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"text": "»",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"fieldType": 1
												}
											]
										}
									],
									"cellFormat": {
										"leftMargin": 5.400000095367432,
										"rightMargin": 5.400000095367432,
										"topMargin": 0.0,
										"bottomMargin": 0.0,
										"columnSpan": 1,
										"rowSpan": 1,
										"preferredWidth": 107.9000015258789,
										"preferredWidthType": "Point",
										"verticalAlignment": "Top",
										"isSamePaddingAsTable": false,
										"borders": {
											"left": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"right": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"top": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"bottom": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"vertical": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"horizontal": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalDown": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalUp": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											}
										},
										"shading": {
											"texture": "TextureNone",
											"backgroundColor": "#E7E6E6FF"
										},
										"cellWidth": 107.9000015258789
									}
								}
							]
						}
					],
					"title": null,
					"description": null,
					"tableFormat": {
						"allowAutoFit": true,
						"leftIndent": 0.0,
						"tableAlignment": "Left",
						"preferredWidthType": "Auto",
						"borders": {
							"left": {
								"lineStyle": "Single",
								"lineWidth": 0.5,
								"shadow": false,
								"space": 0.0,
								"hasNoneStyle": false,
								"color": "#FFFFFFFF"
							},
							"right": {
								"lineStyle": "Single",
								"lineWidth": 0.5,
								"shadow": false,
								"space": 0.0,
								"hasNoneStyle": false,
								"color": "#FFFFFFFF"
							},
							"top": {
								"lineStyle": "Single",
								"lineWidth": 0.5,
								"shadow": false,
								"space": 0.0,
								"hasNoneStyle": false,
								"color": "#FFFFFFFF"
							},
							"bottom": {
								"lineStyle": "Single",
								"lineWidth": 0.5,
								"shadow": false,
								"space": 0.0,
								"hasNoneStyle": false,
								"color": "#FFFFFFFF"
							},
							"vertical": {
								"lineStyle": "Single",
								"lineWidth": 0.5,
								"shadow": false,
								"space": 0.0,
								"hasNoneStyle": false,
								"color": "#FFFFFFFF"
							},
							"horizontal": {
								"lineStyle": "Single",
								"lineWidth": 0.5,
								"shadow": false,
								"space": 0.0,
								"hasNoneStyle": false,
								"color": "#FFFFFFFF"
							},
							"diagonalDown": {
								"lineStyle": "None",
								"lineWidth": 0.0,
								"shadow": false,
								"space": 0.0,
								"hasNoneStyle": false
							},
							"diagonalUp": {
								"lineStyle": "None",
								"lineWidth": 0.0,
								"shadow": false,
								"space": 0.0,
								"hasNoneStyle": false
							}
						},
						"bidi": false
					}
				},
				{
					"paragraphFormat": {
						"styleName": "Normal"
					},
					"inlines": []
				},
				{
					"rows": [
						{
							"rowFormat": {
								"allowBreakAcrossPages": true,
								"isHeader": false,
								"height": 1.0,
								"heightType": "AtLeast",
								"borders": {
									"left": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"right": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"top": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"bottom": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"vertical": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"horizontal": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"diagonalDown": {
										"lineStyle": "None",
										"lineWidth": 0.0,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false
									},
									"diagonalUp": {
										"lineStyle": "None",
										"lineWidth": 0.0,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false
									}
								}
							},
							"cells": [
								{
									"blocks": [
										{
											"characterFormat": {
												"fontFamily": "Calibri",
												"fontFamilyBidi": "Arial"
											},
											"paragraphFormat": {
												"styleName": "Normal"
											},
											"inlines": [
												{
													"text": "Sub Total",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												}
											]
										}
									],
									"cellFormat": {
										"leftMargin": 5.400000095367432,
										"rightMargin": 5.400000095367432,
										"topMargin": 0.0,
										"bottomMargin": 0.0,
										"columnSpan": 1,
										"rowSpan": 1,
										"preferredWidthType": "Auto",
										"verticalAlignment": "Top",
										"isSamePaddingAsTable": false,
										"borders": {
											"left": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"right": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"top": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"bottom": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"vertical": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"horizontal": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalDown": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalUp": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											}
										},
										"shading": {
											"texture": "TextureNone",
											"backgroundColor": "#E7E6E6FF"
										},
										"cellWidth": 56.349998474121097
									}
								},
								{
									"blocks": [
										{
											"characterFormat": {
												"fontFamily": "Calibri",
												"fontFamilyBidi": "Arial"
											},
											"paragraphFormat": {
												"textAlignment": "Right",
												"styleName": "Normal"
											},
											"inlines": [
												{
													"hasFieldEnd": true,
													"fieldType": 0
												},
												{
													"text": " MERGEFIELD  TableStart:OrderTotals  \\* MERGEFORMAT ",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"fieldType": 2
												},
												{
													"text": "«",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"text": "TableStart:OrderTotals",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"text": "»",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"fieldType": 1
												},
												{
													"text": " ",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"name": "_GoBack",
													"bookmarkType": 0
												},
												{
													"name": "_GoBack",
													"bookmarkType": 1
												},
												{
													"text": "$",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"hasFieldEnd": true,
													"fieldType": 0
												},
												{
													"text": " MERGEFIELD  Subtotal  \\* MERGEFORMAT ",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"fieldType": 2
												},
												{
													"text": "«Subtotal»",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"fieldType": 1
												}
											]
										}
									],
									"cellFormat": {
										"leftMargin": 5.400000095367432,
										"rightMargin": 5.400000095367432,
										"topMargin": 0.0,
										"bottomMargin": 0.0,
										"columnSpan": 1,
										"rowSpan": 1,
										"preferredWidthType": "Auto",
										"verticalAlignment": "Top",
										"isSamePaddingAsTable": false,
										"borders": {
											"left": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"right": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"top": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"bottom": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"vertical": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"horizontal": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalDown": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalUp": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											}
										},
										"shading": {
											"texture": "TextureNone",
											"backgroundColor": "#E7E6E6FF"
										},
										"cellWidth": 134.39999389648438
									}
								}
							]
						},
						{
							"rowFormat": {
								"allowBreakAcrossPages": true,
								"isHeader": false,
								"height": 1.0,
								"heightType": "AtLeast",
								"borders": {
									"left": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"right": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"top": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"bottom": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"vertical": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"horizontal": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"diagonalDown": {
										"lineStyle": "None",
										"lineWidth": 0.0,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false
									},
									"diagonalUp": {
										"lineStyle": "None",
										"lineWidth": 0.0,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false
									}
								}
							},
							"cells": [
								{
									"blocks": [
										{
											"characterFormat": {
												"fontFamily": "Calibri",
												"fontFamilyBidi": "Arial"
											},
											"paragraphFormat": {
												"styleName": "Normal"
											},
											"inlines": [
												{
													"text": "Freight",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												}
											]
										}
									],
									"cellFormat": {
										"leftMargin": 5.400000095367432,
										"rightMargin": 5.400000095367432,
										"topMargin": 0.0,
										"bottomMargin": 0.0,
										"columnSpan": 1,
										"rowSpan": 1,
										"preferredWidthType": "Auto",
										"verticalAlignment": "Top",
										"isSamePaddingAsTable": false,
										"borders": {
											"left": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"right": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"top": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"bottom": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"vertical": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"horizontal": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalDown": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalUp": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											}
										},
										"shading": {
											"texture": "TextureNone",
											"backgroundColor": "#E7E6E6FF"
										},
										"cellWidth": 56.349998474121097
									}
								},
								{
									"blocks": [
										{
											"characterFormat": {
												"fontFamily": "Calibri",
												"fontFamilyBidi": "Arial"
											},
											"paragraphFormat": {
												"textAlignment": "Right",
												"styleName": "Normal"
											},
											"inlines": [
												{
													"text": "$",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"hasFieldEnd": true,
													"fieldType": 0
												},
												{
													"text": " MERGEFIELD  Freight  \\* MERGEFORMAT ",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"fieldType": 2
												},
												{
													"text": "«",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"text": "Freight",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"text": "»",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"fieldType": 1
												}
											]
										}
									],
									"cellFormat": {
										"leftMargin": 5.400000095367432,
										"rightMargin": 5.400000095367432,
										"topMargin": 0.0,
										"bottomMargin": 0.0,
										"columnSpan": 1,
										"rowSpan": 1,
										"preferredWidthType": "Auto",
										"verticalAlignment": "Top",
										"isSamePaddingAsTable": false,
										"borders": {
											"left": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"right": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"top": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"bottom": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"vertical": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"horizontal": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalDown": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalUp": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											}
										},
										"shading": {
											"texture": "TextureNone",
											"backgroundColor": "#E7E6E6FF"
										},
										"cellWidth": 134.39999389648438
									}
								}
							]
						},
						{
							"rowFormat": {
								"allowBreakAcrossPages": true,
								"isHeader": false,
								"height": 1.0,
								"heightType": "AtLeast",
								"borders": {
									"left": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"right": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"top": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"bottom": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"vertical": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"horizontal": {
										"lineStyle": "Single",
										"lineWidth": 0.5,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false,
										"color": "#FFFFFFFF"
									},
									"diagonalDown": {
										"lineStyle": "None",
										"lineWidth": 0.0,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false
									},
									"diagonalUp": {
										"lineStyle": "None",
										"lineWidth": 0.0,
										"shadow": false,
										"space": 0.0,
										"hasNoneStyle": false
									}
								}
							},
							"cells": [
								{
									"blocks": [
										{
											"characterFormat": {
												"fontFamily": "Calibri",
												"fontFamilyBidi": "Arial"
											},
											"paragraphFormat": {
												"styleName": "Normal"
											},
											"inlines": [
												{
													"text": "Total",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												}
											]
										}
									],
									"cellFormat": {
										"leftMargin": 5.400000095367432,
										"rightMargin": 5.400000095367432,
										"topMargin": 0.0,
										"bottomMargin": 0.0,
										"columnSpan": 1,
										"rowSpan": 1,
										"preferredWidthType": "Auto",
										"verticalAlignment": "Top",
										"isSamePaddingAsTable": false,
										"borders": {
											"left": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"right": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"top": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"bottom": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"vertical": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"horizontal": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalDown": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalUp": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											}
										},
										"shading": {
											"texture": "TextureNone",
											"backgroundColor": "#E7E6E6FF"
										},
										"cellWidth": 56.349998474121097
									}
								},
								{
									"blocks": [
										{
											"characterFormat": {
												"fontFamily": "Calibri",
												"fontFamilyBidi": "Arial"
											},
											"paragraphFormat": {
												"textAlignment": "Right",
												"styleName": "Normal"
											},
											"inlines": [
												{
													"text": "$",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"hasFieldEnd": true,
													"fieldType": 0
												},
												{
													"text": " MERGEFIELD  Total  \\* MERGEFORMAT ",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"fieldType": 2
												},
												{
													"text": "«Total»",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"fieldType": 1
												},
												{
													"text": " ",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"hasFieldEnd": true,
													"fieldType": 0
												},
												{
													"text": " MERGEFIELD  TableEnd:OrderTotals  \\* MERGEFORMAT ",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"fieldType": 2
												},
												{
													"text": "«",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"text": "TableEnd:OrderTotals",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"text": "»",
													"characterFormat": {
														"fontFamily": "Calibri",
														"fontFamilyBidi": "Arial"
													}
												},
												{
													"fieldType": 1
												}
											]
										}
									],
									"cellFormat": {
										"leftMargin": 5.400000095367432,
										"rightMargin": 5.400000095367432,
										"topMargin": 0.0,
										"bottomMargin": 0.0,
										"columnSpan": 1,
										"rowSpan": 1,
										"preferredWidthType": "Auto",
										"verticalAlignment": "Top",
										"isSamePaddingAsTable": false,
										"borders": {
											"left": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"right": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"top": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"bottom": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"vertical": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"horizontal": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalDown": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											},
											"diagonalUp": {
												"lineStyle": "None",
												"lineWidth": 0.0,
												"shadow": false,
												"space": 0.0,
												"hasNoneStyle": false
											}
										},
										"shading": {
											"texture": "TextureNone",
											"backgroundColor": "#E7E6E6FF"
										},
										"cellWidth": 134.39999389648438
									}
								}
							]
						}
					],
					"title": null,
					"description": null,
					"tableFormat": {
						"allowAutoFit": true,
						"leftIndent": 0.0,
						"tableAlignment": "Right",
						"preferredWidthType": "Auto",
						"borders": {
							"left": {
								"lineStyle": "Single",
								"lineWidth": 0.5,
								"shadow": false,
								"space": 0.0,
								"hasNoneStyle": false,
								"color": "#FFFFFFFF"
							},
							"right": {
								"lineStyle": "Single",
								"lineWidth": 0.5,
								"shadow": false,
								"space": 0.0,
								"hasNoneStyle": false,
								"color": "#FFFFFFFF"
							},
							"top": {
								"lineStyle": "Single",
								"lineWidth": 0.5,
								"shadow": false,
								"space": 0.0,
								"hasNoneStyle": false,
								"color": "#FFFFFFFF"
							},
							"bottom": {
								"lineStyle": "Single",
								"lineWidth": 0.5,
								"shadow": false,
								"space": 0.0,
								"hasNoneStyle": false,
								"color": "#FFFFFFFF"
							},
							"vertical": {
								"lineStyle": "Single",
								"lineWidth": 0.5,
								"shadow": false,
								"space": 0.0,
								"hasNoneStyle": false,
								"color": "#FFFFFFFF"
							},
							"horizontal": {
								"lineStyle": "Single",
								"lineWidth": 0.5,
								"shadow": false,
								"space": 0.0,
								"hasNoneStyle": false,
								"color": "#FFFFFFFF"
							},
							"diagonalDown": {
								"lineStyle": "None",
								"lineWidth": 0.0,
								"shadow": false,
								"space": 0.0,
								"hasNoneStyle": false
							},
							"diagonalUp": {
								"lineStyle": "None",
								"lineWidth": 0.0,
								"shadow": false,
								"space": 0.0,
								"hasNoneStyle": false
							}
						},
						"shading": {
							"texture": "TextureNone",
							"backgroundColor": "#E7E6E6FF"
						},
						"bidi": false
					}
				},
				{
					"paragraphFormat": {
						"styleName": "Normal"
					},
					"inlines": []
				},
				{
					"characterFormat": {
						"fontSize": 16.0,
						"fontSizeBidi": 16.0
					},
					"paragraphFormat": {
						"textAlignment": "Center",
						"styleName": "Normal"
					},
					"inlines": []
				},
				{
					"characterFormat": {
						"fontSize": 16.0,
						"fontFamily": "Calibri",
						"fontSizeBidi": 16.0
					},
					"paragraphFormat": {
						"textAlignment": "Center",
						"styleName": "Normal"
					},
					"inlines": [
						{
							"text": "Thank you for doing business with us!",
							"characterFormat": {
								"fontSize": 16.0,
								"fontFamily": "Calibri",
								"fontSizeBidi": 16.0
							}
						}
					]
				}
			],
			"headersFooters": {
				"header": {
					"blocks": [
						{
							"paragraphFormat": {
								"styleName": "Header"
							},
							"inlines": [
								{
									"shapeId": 2,
									"name": "Rectangle 2",
									"alternativeText": null,
									"title": null,
									"visible": true,
									"width": 614.8,
									"height": 15.05,
									"widthScale": 100.0,
									"heightScale": 100.0,
									"lineFormat": {
										"lineFormatType": "Solid",
										"color": "#000000FF",
										"weight": 1.0,
										"lineStyle": "Solid"
									},
									"verticalPosition": -183.55,
									"verticalOrigin": "Paragraph",
									"verticalAlignment": "None",
									"horizontalPosition": -74.45,
									"horizontalOrigin": "Column",
									"horizontalAlignment": "None",
									"zOrderPosition": 251657728,
									"allowOverlap": true,
									"layoutInCell": true,
									"lockAnchor": false,
									"autoShapeType": "Rectangle",
									"textFrame": {
										"textVerticalAlignment": "Top",
										"leftMargin": 7.087,
										"rightMargin": 7.087,
										"topMargin": 3.685,
										"bottomMargin": 3.685,
										"blocks": [
											{
												"paragraphFormat": {
													"styleName": "Normal"
												},
												"inlines": []
											}
										]
									}
								}
							]
						}
					]
				}
			},
			"sectionFormat": {
				"headerDistance": 36.0,
				"footerDistance": 36.0,
				"pageWidth": 612.0,
				"pageHeight": 792.0,
				"leftMargin": 36.0,
				"rightMargin": 36.0,
				"topMargin": 36.0,
				"bottomMargin": 36.0,
				"differentFirstPage": false,
				"differentOddAndEvenPages": false,
				"bidi": false,
				"restartPageNumbering": false,
				"pageStartingNumber": 0
			}
		}
	],
	"characterFormat": {
		"fontSize": 11.0,
		"fontFamily": "Times New Roman",
		"fontColor": "#000000FF",
		"fontSizeBidi": 11.0,
		"fontFamilyBidi": "Times New Roman"
	},
	"background": {
		"color": "#FFFFFFFF"
	},
	"styles": [
		{
			"type": "Paragraph",
			"name": "Normal",
			"next": "Normal",
			"characterFormat": {
				"fontSize": 12.0,
				"fontSizeBidi": 12.0
			},
			"paragraphFormat": {
				"afterSpacing": 8.0,
				"lineSpacing": 1.0791666507720948,
				"lineSpacingType": "Multiple"
			}
		},
		{
			"type": "Paragraph",
			"name": "Heading 1",
			"basedOn": "Normal",
			"next": "Normal",
			"link": "Heading 1 Char",
			"characterFormat": {
				"fontSize": 16.0,
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496FF"
			},
			"paragraphFormat": {
				"beforeSpacing": 12.0,
				"afterSpacing": 0.0,
				"outlineLevel": "Level1"
			}
		},
		{
			"type": "Paragraph",
			"name": "Heading 2",
			"basedOn": "Normal",
			"next": "Normal",
			"link": "Heading 2 Char",
			"characterFormat": {
				"fontSize": 13.0,
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496FF"
			},
			"paragraphFormat": {
				"beforeSpacing": 2.0,
				"afterSpacing": 0.0,
				"outlineLevel": "Level2"
			}
		},
		{
			"type": "Paragraph",
			"name": "Heading 3",
			"basedOn": "Normal",
			"next": "Normal",
			"link": "Heading 3 Char",
			"characterFormat": {
				"fontFamily": "Calibri Light",
				"fontColor": "#1F3763FF"
			},
			"paragraphFormat": {
				"beforeSpacing": 2.0,
				"afterSpacing": 0.0,
				"outlineLevel": "Level3"
			}
		},
		{
			"type": "Paragraph",
			"name": "Heading 4",
			"basedOn": "Normal",
			"next": "Normal",
			"link": "Heading 4 Char",
			"characterFormat": {
				"italic": true,
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496FF"
			},
			"paragraphFormat": {
				"beforeSpacing": 2.0,
				"afterSpacing": 0.0,
				"outlineLevel": "Level4"
			}
		},
		{
			"type": "Paragraph",
			"name": "Heading 5",
			"basedOn": "Normal",
			"next": "Normal",
			"link": "Heading 5 Char",
			"characterFormat": {
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496FF"
			},
			"paragraphFormat": {
				"beforeSpacing": 2.0,
				"afterSpacing": 0.0,
				"outlineLevel": "Level5"
			}
		},
		{
			"type": "Paragraph",
			"name": "Heading 6",
			"basedOn": "Normal",
			"next": "Normal",
			"link": "Heading 6 Char",
			"characterFormat": {
				"fontFamily": "Calibri Light",
				"fontColor": "#1F3763FF"
			},
			"paragraphFormat": {
				"beforeSpacing": 2.0,
				"afterSpacing": 0.0,
				"outlineLevel": "Level6"
			}
		},
		{
			"type": "Character",
			"name": "Default Paragraph Font"
		},
		{
			"type": "Paragraph",
			"name": "Header",
			"basedOn": "Normal",
			"next": "Header",
			"link": "Header Char",
			"paragraphFormat": {
				"afterSpacing": 0.0,
				"lineSpacing": 1.0,
				"lineSpacingType": "Multiple",
				"tabs": [
					{
						"tabJustification": "Center",
						"position": 234.0,
						"tabLeader": "None",
						"deletePosition": 0.0
					},
					{
						"tabJustification": "Right",
						"position": 468.0,
						"tabLeader": "None",
						"deletePosition": 0.0
					}
				]
			}
		},
		{
			"type": "Character",
			"name": "Header Char",
			"basedOn": "Default Paragraph Font"
		},
		{
			"type": "Paragraph",
			"name": "Footer",
			"basedOn": "Normal",
			"next": "Footer",
			"link": "Footer Char",
			"paragraphFormat": {
				"afterSpacing": 0.0,
				"lineSpacing": 1.0,
				"lineSpacingType": "Multiple",
				"tabs": [
					{
						"tabJustification": "Center",
						"position": 234.0,
						"tabLeader": "None",
						"deletePosition": 0.0
					},
					{
						"tabJustification": "Right",
						"position": 468.0,
						"tabLeader": "None",
						"deletePosition": 0.0
					}
				]
			}
		},
		{
			"type": "Character",
			"name": "Footer Char",
			"basedOn": "Default Paragraph Font"
		},
		{
			"type": "Character",
			"name": "Hyperlink",
			"basedOn": "Default Paragraph Font",
			"characterFormat": {
				"underline": "Single",
				"fontColor": "#0563C1FF"
			}
		},
		{
			"type": "Character",
			"name": "Heading 1 Char",
			"basedOn": "Default Paragraph Font",
			"characterFormat": {
				"fontSize": 16.0,
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496FF"
			}
		},
		{
			"type": "Character",
			"name": "Heading 2 Char",
			"basedOn": "Default Paragraph Font",
			"characterFormat": {
				"fontSize": 13.0,
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496FF"
			}
		},
		{
			"type": "Character",
			"name": "Heading 3 Char",
			"basedOn": "Default Paragraph Font",
			"characterFormat": {
				"fontSize": 12.0,
				"fontFamily": "Calibri Light",
				"fontColor": "#1F3763FF"
			}
		},
		{
			"type": "Character",
			"name": "Heading 4 Char",
			"basedOn": "Default Paragraph Font",
			"characterFormat": {
				"italic": true,
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496FF"
			}
		},
		{
			"type": "Character",
			"name": "Heading 5 Char",
			"basedOn": "Default Paragraph Font",
			"characterFormat": {
				"fontFamily": "Calibri Light",
				"fontColor": "#2F5496FF"
			}
		},
		{
			"type": "Character",
			"name": "Heading 6 Char",
			"basedOn": "Default Paragraph Font",
			"characterFormat": {
				"fontFamily": "Calibri Light",
				"fontColor": "#1F3763FF"
			}
		}
	],
	"defaultTabWidth": 36.0,
	"formatting": false,
	"trackChanges": false,
	"protectionType": "NoProtection",
	"enforcement": false,
	"dontUseHTMLParagraphAutoSpacing": false
};