<?php

namespace App\Nova;

use Illuminate\Http\Request;
use Laravel\Nova\Fields\BelongsTo;
use Laravel\Nova\Fields\Boolean;
use Laravel\Nova\Fields\Currency;
use Laravel\Nova\Fields\DateTime;
use Laravel\Nova\Fields\Heading;
use Laravel\Nova\Fields\ID;
use Laravel\Nova\Fields\Number;
use Laravel\Nova\Fields\Text;
use Laravel\Nova\Fields\Trix;
use Laravel\Nova\Panel;

class Coffee extends Resource
{
    /**
     * The model the resource corresponds to.
     *
     * @var string
     */
    public static $model = 'App\Coffee';

    /**
     * The single value that should be used to represent the resource when being displayed.
     *
     * @var string
     */
    public static $title = 'name';

    /**
     * The columns that should be searched.
     *
     * @var array
     */
    public static $search = [
        'id', 'name',
    ];

    /**
     * Get the fields displayed by the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function fields(Request $request)
    {
        return [
            Heading::make('Basic Information')->onlyOnForms(),
            new Panel('Basic Information', $this->basicInfoFields()),

            Heading::make('Availability')->onlyOnForms(),
            new Panel('Availability', [
                Boolean::make('Is Sold Out?', 'is_sold_out')
                    ->hideFromIndex(),
                Boolean::make('Is Retired?', 'is_retired')
                    ->hideFromIndex(),
            ]),

            Heading::make('Pricing Information')->onlyOnForms(),
            new Panel('Pricing Information', $this->pricingFields()),

            Heading::make('Grind Availability')->onlyOnForms(),
            new Panel('Grind Availability', [
                Boolean::make('Is Available Ground')
                    ->hideFromIndex(),
                Boolean::make('Is Available Whole')
                    ->hideFromIndex(),
            ]),

        ];
    }

    /**
     * Configure protection fields.
     *
     * @return Array
     */
    protected function basicInfoFields()
    {
        return [
            ID::make()->sortable(),

            Text::make('Name')
                ->rules('required', 'max:255')
                ->sortable(),

            Trix::make('Description'),
            DateTime::make('Created At')
                ->hideFromIndex(),
            DateTime::make('Updated At')
                ->hideFromIndex(),
            Boolean::make('Is Single Origin?', 'is_single_origin')
                ->hideFromIndex(),

            BelongsTo::make('Flavor Profile', 'flavorProfile')
                ->searchable()
                ->rules('required')
                ->hideFromIndex(),

            BelongsTo::make('Roast Level', 'roastLevel')
                ->nullable()
                ->rules('required')
                ->hideFromIndex(),

            BelongsTo::make('Roaster')
                ->searchable()
                ->rules('required')
                ->hideFromIndex(),

            BelongsTo::make('Best Brew Method', 'bestBrewMethod', '\App\Nova\BrewMethod')
                ->nullable()
                ->hideFromIndex(),
        ];
    }

    /**
     * Configures pricing information fields
     *
     * @return Array
     */
    protected function pricingFields()
    {
        return [
            Number::make('Max Quantity')
                ->min(1)
                ->rules('required')
                ->hideFromIndex(),
            Currency::make('Price Per Bag')->format('%.2n')
                ->min(0)
                ->rules('required')
                ->hideFromIndex(),
            Number::make('Bag In Ounces')
                ->min(0)
                ->step(0.01)
                ->help('Weight of a single bag')
                ->rules('required')
                ->hideFromIndex(),
        ];
    }

    /**
     * Get the cards available for the request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function cards(Request $request)
    {
        return [];
    }

    /**
     * Get the filters available for the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function filters(Request $request)
    {
        return [];
    }

    /**
     * Get the lenses available for the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function lenses(Request $request)
    {
        return [];
    }

    /**
     * Get the actions available for the resource.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function actions(Request $request)
    {
        return [];
    }
}
