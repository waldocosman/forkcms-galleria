<?php
namespace Backend\Modules\Galleria;

/*
 * This file is part of Fork CMS.
 *
 * For the full copyright and license information, please view the license
 * file that was distributed with this source code.
 */

/**
 * This is the configuration-object for the galleria module
 *
 * @author John Poelman <john.poelman@bloobz.be>
 */
use Backend\Core\Engine\Base\Config as BackendBaseConfig;

final class Config extends BackendBaseConfig
{
	/**
	 * The default action
	 *
	 * @var string
	 */
	protected $defaultAction = 'albums';

	/**
	 * The disabled actions
	 *
	 * @var array
	 */
	protected $disabledActions = array();
}
