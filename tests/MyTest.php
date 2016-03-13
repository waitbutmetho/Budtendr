<!-- testing with php unit, use this template for guidance -->
<?php
    require_once __DIR__ . '/../src/MyClass.php';

    class TestClassName extends PHPUnit_Framework_TestCase
    {
        function test_whatItDoes_descriptionOfTest()
        {// checks if single characters match
            // Arrange
            $test_className = new ClassName;
            $input = ''
            // Act
            $result = $test_className->functionTesting($input);

            // Assert
            $this->assertEquals(______, $result);
        }
    }
?>
