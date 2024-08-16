# Localization

## Localization resources

> **Definitions**

```typescript
type Language = string;
type Namespace = string;
type LocalisationResources = Record<Language, Record<Namespace, any>>;
```

> **Default Localizations**

```json
{
  "en": {
    "general": {
      "retry": "Try again",
      "close": "Close",
      "or": "or",
      "general_error_message": "Something went wrong",
      "general_error_message_with_refresh": "Something went wrong. Please refresh the page.",
      "premium_clip": "Premium Clip",
      "premium_collection": "Premium Collection",
      "play": "Play",
      "view": "View",
      "view_all": "View all",
      "back": "Back",
      "done": "Done",
      "new": "New",
      "clips": "Clips",
      "beta": "Beta",
      "remove": "Remove",
      "use": "Use",
      "images": "Images",
      "next": "Next",
      "go_back": "Go back",
      "delete": "Delete",
      "video": {
        "progress": {
          "label": "Video in progress",
          "percentage": "{{totalProgress}}% complete"
        },
        "status": {
          "draft": "Draft"
        },
        "card_actions": {
          "menu_label": "More",
          "delete": "Delete",
          "duplicate": "Duplicate",
          "download_video": "{{aspectRatio}} Video"
        },
        "page_title": "Your Videos",
        "create_video_button": "Create New Video",
        "show_more_button": "Show more videos"
      },
      "processing_audio": "Processing audio...",
      "download": "Download",
      "cart": {
        "added": "Added to cart ✅",
        "open": "Open cart",
        "add": "Add to cart"
      },
      "canvas_page_title": "Canvas Video",
      "album_motion_page_title": "Album Motion Video",
      "create_video_dialog": {
        "title": "What do you want to create?",
        "album_motion_video": "Apple Artwork",
        "canvas_video": "Spotify Canvas Video"
      },
      "delete_video_dialog": {
        "loading": "Deleting...",
        "title": "Are you sure you want to delete this video?"
      },
      "order": {
        "duplicate_button": "Make another version",
        "purchased_note": "You've purchased this video",
        "cart_note": "Your Canvas Video has been added to the cart",
        "download_button": "Download video",
        "remove_from_cart_button": "Remove from cart",
        "page_title": "Order confirmation #{{outputId}}"
      },
      "smart_button": {
        "error_label": "Failed to load!",
        "loading_label": "Loading...",
        "videos_label": "Your Videos ({{count}})",
        "make_videos_label": "Make Videos"
      }
    },
    "album_motion": {
      "asset_step": {
        "artwork_alt": "Selected artwork",
        "browse_uploads": "Browse your uploads",
        "change_artwork": "Change Artwork",
        "guideline_notice": "Please read <2>apple’s guidelines</2> to ensure your artwork is accepted",
        "square_title": "1:1 Artwork",
        "upload_info": "Recommended Size 3840px x 3840px",
        "upload_label": "Drop an image here",
        "wizard_title": "Step 1: Add Artwork",
        "upload_error": "Please upload a square image"
      },
      "style_step": {
        "wizard_title": "Step 2: Choose Style"
      }
    },
    "canvas": {
      "applying_loading": "Applying...",
      "wizard_heading": "Create Your Canvas",
      "looping_mode_step": {
        "title": "Choose Looping Mode",
        "description": "Select hard or seamless video looping"
      },
      "preview_button": "Preview Canvas",
      "customization": {
        "edit_button": "Edit snippet",
        "title": "Select Snippet",
        "subtitle": "Position the crop and select a 3-8 second snippet of the video",
        "description": "Canvas videos are vertical and 3 to 8 seconds long",
        "submit_button": "Use Snippet"
      },
      "upload": {
        "choose_file": "Select a video clip from your device",
        "choose_clip": "Choose a clip from our extensive library",
        "drop_file": "Drop a video clip here",
        "browse_library": "Browse our clip library"
      },
      "audio": {
        "choose_file_tooltip": "Click to add your audio",
        "alert_message": "Heads up: Your final Canvas video won't contain any audio",
        "alert_details_link": "Find out why →",
        "alert_confirm_button": "Ok, got it",
        "remove": "Remove Audio",
        "upload": "Upload"
      },
      "applying_style": "Applying {{style}} Style",
      "error_message": "Choose a different clip or style and try again",
      "track": {
        "title_placeholder": "Your Song Title",
        "artist_name_placeholder": "Artist Name",
        "add_details": "Add your track details"
      },
      "preview_type": {
        "video": "Video only"
      },
      "clips_step": {
        "list_description": "Select 3-8 seconds of your video clip to use in your canvas",
        "title": "Add Clip",
        "description": "Add your own content or use a clip from our library",
        "status_added": "Clip Added"
      },
      "style_step": {
        "title": "Choose Style",
        "description": "Styles add visual effects to your video"
      }
    },
    "clips_selector": {
      "processing": "Processing",
      "uploading": "Uploading",
      "delete_upload": "Delete this upload",
      "create_video_modal_description": "Add this clip to your music or canvas video",
      "create_video_button": "Make a video with this clip",
      "clip_details_collection": "Part of the <1>{{name}}</1> Collection",
      "keywords": "Keywords",
      "clip_details_page_title": "Clip: {{uuid}} {{appTitle}}",
      "featured_clips": "Featured Clips",
      "aria_list_of_clips": "List of clips",
      "collections": "Collections",
      "moods": "Moods",
      "search_clips": "Search Clips",
      "search_result": "<strong>{{count}}</strong> result",
      "search_result_other": "<strong>{{count}}</strong> results",
      "search_result_with_term": "<strong>{{ count }}</strong> result for \"{{searchQuery}}\"",
      "search_result_with_term_other": "<strong>{{ count }}</strong> results for \"{{searchQuery}}\"",
      "popular_keywords": "Popular Keywords",
      "show_more_clips": "Show more clips",
      "library_menu_item": "Library",
      "uploads_menu_item": "Uploaded Clips",
      "collection_exclusive_to": "Exclusive to {{scope}}",
      "collection_details_page_title": "{{collection}} Clips {{appTitle}}",
      "collection_clips_count": "{{count}} Clip",
      "collection_clips_count_other": "{{count}} Clips",
      "collections_page_title": "Collections {{appTitle}}",
      "too_many_files_error": "You're attempting to upload too many files simultaneously. The maximum is {{maxFiles}}.",
      "upload_clips_touch": "Tap here to upload files",
      "upload_clips_desktop": "Drop files here to upload",
      "supported_extensions": "We support {{supportedExtensions}}",
      "max_clips_alert": "You've reached the limit of clips ({{maxClips}}) that can be used with this style",
      "mood_details_page_title": "{{mood}} Clips {{appTitle}}",
      "moods_page_title": "Moods | Clips {{appTitle}}",
      "output_progress_header_count": "Clip selected",
      "output_progress_header_count_other": "Clips selected",
      "smart_select_clips_loading": "Finding clips…",
      "smart_select_clips": "Smart Select Clips",
      "remove_all": "Remove all",
      "similar_clips_title": "More Like This",
      "remove_clip": "Remove this clip",
      "added_clip": "Added",
      "adding_clip": "Adding",
      "tooltip_max_clips_limit_reached": "Your selected video style allows you to use up to {{maxClips}} clips",
      "use_clip": "Use this clip",
      "uploads_page_title": "Uploads {{appTitle}}",
      "user_uploads": "Your Uploads",
      "show_more_uploads": "Show more uploads",
      "filter_uploads_all": "All Uploads",
      "filter_uploads_all_short": "All"
    },
    "ui": {
      "create_video_modal": {
        "video_name_header": "Give your new {{videoTypeLabel}} Video a name",
        "video_name_label": "Video name",
        "video_name_placeholder": "e.g. Your Track Name",
        "creation_flow_header": "What do you want to create?",
        "creation_flow": {
          "rotor": {
            "title": "Music Video",
            "description": "Use our footage or upload clips to create your music video"
          },
          "artwork": {
            "title": "Art Track Video",
            "description": "Just add your artwork for a video that vibes to the beat"
          },
          "canvas": {
            "title": "Spotify Canvas Video",
            "description": "A 3-8 second loop video for your track on Spotify"
          },
          "lyrics": {
            "title": "Lyric Video",
            "description": "Promote your music with dynamic, professional lyric videos"
          },
          "motion": {
            "title": "Apple Music Album Motion",
            "description": "Put your Album Art in motion with our tool designed for Apple Music"
          }
        }
      },
      "delete_clip_modal": {
        "error_title": "Something went wrong, please try again later.",
        "error_back_button": "Go back",
        "videos_title": "Deleting this clip will remove it from videos you have created",
        "videos_description": "If your videos are still in progress we recommend that you complete and download your videos before deleting the clip.",
        "videos_back_button": "Never mind, go back",
        "videos_confirm_button": "Delete clip anyway",
        "affected_videos_count": "This clip is used in {{count}} video",
        "affected_videos_count_other": "This clip is used in {{count}} videos",
        "title": "Are you sure you want to delete this clip?",
        "back_button": "No, go back",
        "confirm_button": "Yes, delete clip"
      },
      "error_alert": {
        "description": "Please refresh the page and try again. If the problem persists contact support.",
        "reload_button": "Reload Page"
      },
      "file_uploader": {
        "permission_title": "Do you have permission to use this file?",
        "permission_message": "We don't want you getting in trouble for using copyrighted material",
        "permission_confirm_label": "Yes I do",
        "permission_cancel_label": "No I don't",
        "drag_accept_title": "Those files look good. Go ahead and drop them.",
        "drag_reject_title": "Some of the files will not be uploaded"
      },
      "image_uploader_dragging": {
        "message": "Drop this file to upload your image"
      },
      "maintenance": {
        "fallback": "We are currently performing maintenance. We will be back shortly.",
        "order_acceptance": "Due to unforeseen technical issues, we are currently unable to accept orders.",
        "closing_message": "Thank you for your patience and understanding."
      },
      "style_group_list": {
        "compact": {
          "description": "Styles add visual effects to your video",
          "user_active_group": "Active",
          "user_history_group": "History"
        }
      }
    }
  }
}
```

The `localisationResources` object provided to the [RotorVideosProvider](#react-rotorvideosprovider) component is used to
localize or override
the text strings used in the Rotor Videos components.
By providing this object, you can override the default localizations, as it uses deep merge to combine both objects.

## Language detection

> **Language detection source**

```markdown
- cookie (set cookie i18next=LANGUAGE)
- sessionStorage (set key i18nextLng=LANGUAGE)
- localStorage (set key i18nextLng=LANGUAGE)
- navigator (set browser language)
- querystring (append ?lng=LANGUAGE to URL)
- htmlTag (add html language tag <html lang="LANGUAGE" ...)
- path (http://my.site.com/LANGUAGE/...)
- subdomain (http://LANGUAGE.site.com/...)

```

By default, the current language is automatically detected from the user's browser, but you can also set the language
manually
by following the instructions
in [i18next-browser-languageDetector](https://github.com/i18next/i18next-browser-languageDetector) plugin.

## Adding new language

> **Example of a new language localization**

```json
{
  "es": {
    "general": {
      "retry": "Intentar de nuevo",
      "close": "Cerrar"
    }
  }
}
```

In order to add a new language, you need to provide a new top-level key, which is the language code, in
the `localisationResources` object.
