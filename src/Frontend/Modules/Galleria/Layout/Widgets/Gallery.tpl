{*
	variables that are available:
	- {$widgetGallery}: contains all the data for this widget
*}

{option:widgetGallery}
<div class="galleria-gallery">

    <ul class="list-unstyled">
    {iteration:widgetGallery}
        <li>
		<a href="{$widgetGallery.image_800x}" title="{$widgetGallery.description}" class="colorbox">
            		<img src="{$widgetGallery.image_128x128}" alt="{$widgetGallery.description} {$widgetGallery.filename}" title="{$widgetGallery.description} {$widgetGallery.filename}">
            	</a>
            	<span>{$widgetGallery.description}</span>
        </li>
    {/iteration:widgetGallery}
    </ul>

</div>
{/option:widgetGallery}

{* $widgetGallery|dump *}
